/**
 * Indonesian Rupiah and Date formatting utilities for LPJ BOS Madrasah
 */

export function formatRupiah(value: number): string {
  if (isNaN(value)) return 'Rp 0';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function terbilang(n: number): string {
  const r = Math.abs(Math.floor(n));
  const t = [
    '',
    'Satu',
    'Dua',
    'Tiga',
    'Empat',
    'Lima',
    'Enam',
    'Tujuh',
    'Delapan',
    'Sembilan',
    'Sepuluh',
    'Sebelas',
  ];
  let res = '';
  if (r < 12) {
    res = t[r];
  } else if (r < 20) {
    res = terbilang(r - 10).replace(' Rupiah', '') + ' Belas';
  } else if (r < 100) {
    res =
      terbilang(Math.floor(r / 10)).replace(' Rupiah', '') +
      ' Puluh ' +
      terbilang(r % 10).replace(' Rupiah', '');
  } else if (r < 200) {
    res = 'Seratus ' + terbilang(r - 100).replace(' Rupiah', '');
  } else if (r < 1000) {
    res =
      terbilang(Math.floor(r / 100)).replace(' Rupiah', '') +
      ' Ratus ' +
      terbilang(r % 100).replace(' Rupiah', '');
  } else if (r < 2000) {
    res = 'Seribu ' + terbilang(r - 1000).replace(' Rupiah', '');
  } else if (r < 1000000) {
    res =
      terbilang(Math.floor(r / 1000)).replace(' Rupiah', '') +
      ' Ribu ' +
      terbilang(r % 1000).replace(' Rupiah', '');
  } else if (r < 1000000000) {
    res =
      terbilang(Math.floor(r / 1000000)).replace(' Rupiah', '') +
      ' Juta ' +
      terbilang(r % 1000000).replace(' Rupiah', '');
  } else if (r < 1000000000000) {
    res =
      terbilang(Math.floor(r / 1000000000)).replace(' Rupiah', '') +
      ' Miliar ' +
      terbilang(r % 1000000000).replace(' Rupiah', '');
  } else {
    res =
      terbilang(Math.floor(r / 1000000000000)).replace(' Rupiah', '') +
      ' Triliun ' +
      terbilang(r % 1000000000000).replace(' Rupiah', '');
  }
  const s = res.replace(/\s+/g, ' ').trim();
  return s ? s + ' Rupiah' : 'Nol Rupiah';
}

export function formatDateIndo(dateStr?: string): string {
  if (!dateStr) return '-';
  try {
    const r = new Date(dateStr);
    if (isNaN(r.getTime())) return dateStr;
    const months = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    return `${r.getDate()} ${months[r.getMonth()]} ${r.getFullYear()}`;
  } catch {
    return dateStr;
  }
}
