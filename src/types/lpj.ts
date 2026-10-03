export interface Profile {
  namaMadrasah: string;
  nsm: string;
  npsn: string;
  jenjang: string;
  status: string;
  alamat: string;
  desa: string;
  kecamatan: string;
  kabupaten: string;
  provinsi: string;
  kodePos: string;
  telepon: string;
  email: string;
  logoMadrasah?: string;
  tandaTanganKamad?: string;
  tandaTanganBendahara?: string;
  stempelMadrasah?: string;
}

export interface Periode {
  tahunAnggaran: string;
  tahap: string;
  semester: string;
  tanggalAwal: string;
  tanggalAkhir: string;
  bulan?: string;
}

export interface SumberDanaItem {
  id: string;
  namaSumber: string;
  alokasiPagu: number;
  diterima: number;
  tanggalTerima: string;
  noRekening: string;
  keterangan: string;
}

export interface RealisasiKegiatanItem {
  id: string;
  kro: string;
  standarSNP: string;
  kodeKegiatan: string;
  namaKegiatan: string;
  anggaran: number;
  realisasi: number;
  volume: string;
  satuan: string;
  keterangan: string;
  tanggalKegiatan?: string;
}

export interface BuktiPengeluaranItem {
  id: string;
  noBukti: string;
  tanggal: string;
  kodeAkun: string;
  penerima: string;
  uraian: string;
  nominal: number;
  jenisBukti: string;
  kelengkapan: string[];
}

export interface RekapPajakItem {
  id: string;
  kro: string;
  noBukti: string;
  jenisPajak: 'PPh 21' | 'PPh 22' | 'PPh 23' | 'PPN' | string;
  uraian: string;
  dpp: number;
  tarif: number;
  jumlahPajak: number;
  tanggalSetor: string;
  ntpn: string;
  statusSetor: 'Sudah Disetor' | 'Belum Disetor' | 'Nihil / Bebas Pajak' | string;
}

export interface ItemBarang {
  id: string;
  namaBarang: string;
  spesifikasi: string;
  volume: number;
  satuan: string;
  hargaSatuan: number;
  totalHarga: number;
  kondisi: string;
}

export interface NotaPesananBastItem {
  id: string;
  buktiPengeluaranId?: string;
  noBuktiSpj: string;
  noSuratPesanan: string;
  tanggalPesanan: string;
  noBast: string;
  tanggalBast: string;
  hariBast: string;
  namaToko: string;
  namaPenyedia: string;
  jabatanPenyedia: string;
  alamatToko: string;
  teleponToko: string;
  namaPemesan: string;
  nipPemesan: string;
  jabatanPemesan: string;
  keperluan: string;
  waktuPenyerahan: string;
  tempatPenyerahan: string;
  keteranganPemeriksaan: string;
  totalNominal: number;
  itemsBarang: ItemBarang[];
}

export interface DokumentasiItem {
  id: string;
  judul: string;
  tanggal: string;
  kategori: string;
  keterangan: string;
  foto?: string;
}

export interface SptjbData {
  noSurat: string;
  tanggalSurat: string;
  pernyataan: string;
  barcodeTtdKepala?: string;
}

export interface PejabatData {
  namaKepala: string;
  nipKepala: string;
  namaBendahara: string;
  nipBendahara: string;
  namaKetuaKomite: string;
  tempatPembuatan: string;
  tanggalPengesahan: string;
  barcodeTtdKepala?: string;
}

export interface PerjalananDinasItem {
  id: string;
  noSppd: string;
  tanggalSppd: string;
  maksudPerjalanan: string;
  namaPelaksana: string;
  nipPelaksana: string;
  jabatanPelaksana: string;
  kotaTujuan: string;
  lamaHari: string;
  totalBiaya: number;
  laporanHasil: string;
}

export interface HonorSatkerItem {
  id: string;
  nama: string;
  nip: string;
  jabatan: string;
  golonganPNS: string;
  honorBruto: number;
  potonganPph: number;
  jumlahNetto: number;
  noRekening: string;
}

export interface LpjData {
  id: string;
  createdAt: string;
  updatedAt: string;
  archiveName?: string;
  archiveNotes?: string;
  profile: Profile;
  periode: Periode;
  sumberDana: SumberDanaItem[];
  realisasiKegiatan: RealisasiKegiatanItem[];
  buktiPengeluaran: BuktiPengeluaranItem[];
  rekapPajak: RekapPajakItem[];
  dokumentasi: DokumentasiItem[];
  sptjb: SptjbData;
  notaPesananBast: NotaPesananBastItem[];
  pejabat: PejabatData;
  perjalananDinas: PerjalananDinasItem[];
  honorSatker: HonorSatkerItem[];
  catatanTambahan?: string;
}

export type PaperSize = 'A4' | 'F4';
export type FontSizeScale = 'compact' | 'normal' | 'large' | 'extra';
export type MarginPreset = 'tight' | 'standard' | 'spacious';
