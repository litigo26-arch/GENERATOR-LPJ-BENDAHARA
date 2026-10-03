const fs = require('fs');
const code = fs.readFileSync('/tmp/index.js', 'utf8');

// 1. Search for localStorage keys
const lsMatches = [...code.matchAll(/localStorage\.(?:getItem|setItem|removeItem)\(\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log('localStorage keys:', [...new Set(lsMatches)]);

// 2. Search for navigation or tabs
const tabMatches = [...code.matchAll(/label:\s*["']([^"']+)["'],\s*icon:/g)].map(m => m[1]);
console.log('Tabs with icons:', [...new Set(tabMatches)]);

// 3. Search for state or components
const titles = [...code.matchAll(/(?:title|label|heading|header):\s*["']([^"']{3,50})["']/g)].map(m => m[1]);
console.log('Sample titles/labels (first 40):', [...new Set(titles)].slice(0, 40));

// 4. Look for sections or modules
const sections = [...code.matchAll(/activeTab\s*===\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log('activeTab checks:', [...new Set(sections)]);

const pages = [...code.matchAll(/page\s*===\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log('page checks:', [...new Set(pages)]);

const views = [...code.matchAll(/activeView\s*===\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log('activeView checks:', [...new Set(views)]);
