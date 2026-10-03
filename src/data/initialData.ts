import { LpjData } from "../types/lpj";

export const initialLpjData: LpjData = {
  "id": "lpj-demo-2025-01",
  "createdAt": "2026-10-03T01:38:43.510Z",
  "updatedAt": "2026-10-03T01:38:43.510Z",
  "profile": {
    "namaMadrasah": "MTs BANGKALA ISLAMIC INTEGRATED SCHOOL",
    "nsm": "121273710045",
    "npsn": "69954321",
    "jenjang": "MTs",
    "status": "Swasta",
    "alamat": "Jl. Poros Bangkala No. 45, Kompleks Pendidikan",
    "desa": "Bangkala",
    "kecamatan": "Bangkala",
    "kabupaten": "Jeneponto",
    "provinsi": "Sulawesi Selatan",
    "kodePos": "92352",
    "telepon": "0812-3456-7890",
    "email": "mtsbangkala@gmail.com"
  },
  "periode": {
    "tahunAnggaran": "2025",
    "tahap": "Tahap I (Januari - Juni)",
    "semester": "Genap",
    "tanggalAwal": "2025-01-02",
    "tanggalAkhir": "2025-06-30"
  },
  "sumberDana": [
    {
      "id": "sd-1",
      "namaSumber": "BOS Reguler Madrasah Tahap I",
      "alokasiPagu": 78000000,
      "diterima": 78000000,
      "tanggalTerima": "2025-02-15",
      "noRekening": "0451-01-002345-50-8 (Bank Syariah Indonesia)",
      "keterangan": "Pencairan BOS Kemenag Tahap 1 untuk 78 Siswa @ Rp 1.000.000 / thn"
    },
    {
      "id": "sd-2",
      "namaSumber": "BOS Afirmasi / Kinerja Kemenag",
      "alokasiPagu": 25000000,
      "diterima": 25000000,
      "tanggalTerima": "2025-03-10",
      "noRekening": "0451-01-002345-50-8 (Bank Syariah Indonesia)",
      "keterangan": "Bantuan Digitalisasi Madrasah & Penguatan Mutu"
    }
  ],
  "realisasiKegiatan": [
    {
      "id": "rk-1",
      "kro": "KRO 1: Anggaran Dana BOS (Siswa Penerima BOS)",
      "standarSNP": "1. Standar Kompetensi Lulusan",
      "kodeKegiatan": "01.01.04",
      "namaKegiatan": "Pelaksanaan Asesmen Madrasah (AM) & Pengayaan Materi Kelulusan",
      "anggaran": 8500000,
      "realisasi": 8500000,
      "volume": "1",
      "satuan": "Paket",
      "keterangan": "Penggandaan naskah AM, konsumsi pengawas, & proktor"
    },
    {
      "id": "rk-2",
      "kro": "KRO 1: Anggaran Dana BOS (Siswa Penerima BOS)",
      "standarSNP": "2. Standar Isi",
      "kodeKegiatan": "02.01.02",
      "namaKegiatan": "Penyusunan Kurikulum Operasional Madrasah (KOM) & Modul Ajar",
      "anggaran": 4200000,
      "realisasi": 4200000,
      "volume": "1",
      "satuan": "Kegiatan",
      "keterangan": "Workshop pengembangan modul ajar IKM & P5RA"
    },
    {
      "id": "rk-3",
      "kro": "KRO 1: Anggaran Dana BOS (Siswa Penerima BOS)",
      "standarSNP": "3. Standar Proses",
      "kodeKegiatan": "03.02.01",
      "namaKegiatan": "Pengadaan Alat Peraga Pembelajaran & Kegiatan Ekstrakurikuler Keagamaan",
      "anggaran": 12800000,
      "realisasi": 12800000,
      "volume": "6",
      "satuan": "Bulan",
      "keterangan": "Pembinaan Tahfidz, Pramuka, Hadrah & ATK Pembelajaran"
    },
    {
      "id": "rk-4",
      "kro": "KRO 1: Anggaran Dana BOS (Siswa Penerima BOS)",
      "standarSNP": "4. Standar Pendidik dan Tenaga Kependidikan",
      "kodeKegiatan": "04.01.03",
      "namaKegiatan": "Peningkatan Kompetensi Guru melalui MGMP dan Pelatihan PKB",
      "anggaran": 6500000,
      "realisasi": 6500000,
      "volume": "12",
      "satuan": "Orang",
      "keterangan": "Transport & pendaftaran pelatihan guru madrasah"
    },
    {
      "id": "rk-5",
      "kro": "KRO 1: Anggaran Dana BOS (Siswa Penerima BOS)",
      "standarSNP": "5. Standar Sarana dan Prasarana",
      "kodeKegiatan": "05.02.05",
      "namaKegiatan": "Pemeliharaan Ringan Gedung, Sanitasi & Pengadaan Buku Teks Utama",
      "anggaran": 21500000,
      "realisasi": 21500000,
      "volume": "1",
      "satuan": "Paket",
      "keterangan": "Pengecatan kelas, perbaikan kran/sanitasi, pembelian buku teks Kemenag"
    },
    {
      "id": "rk-6",
      "kro": "KRO 1: Anggaran Dana BOS (Siswa Penerima BOS)",
      "standarSNP": "6. Standar Pengelolaan",
      "kodeKegiatan": "06.01.01",
      "namaKegiatan": "Langganan Daya dan Jasa (Listrik PLN, Internet Madrasah, Aplikasi SIMPATIKA/EMIS)",
      "anggaran": 10500000,
      "realisasi": 10500000,
      "volume": "6",
      "satuan": "Bulan",
      "keterangan": "Pembayaran tagihan rutin Indihome & token listrik"
    },
    {
      "id": "rk-7",
      "kro": "KRO 1: Anggaran Dana BOS (Siswa Penerima BOS)",
      "standarSNP": "7. Standar Pembiayaan",
      "kodeKegiatan": "07.03.01",
      "namaKegiatan": "Honorarium Guru Non-PNS (GTT/PTT) dan Tenaga Kependidikan",
      "anggaran": 32000000,
      "realisasi": 32000000,
      "volume": "6",
      "satuan": "Bulan",
      "keterangan": "Honor 8 guru honorer & 2 tenaga kependidikan @ 6 bulan"
    },
    {
      "id": "rk-8",
      "kro": "KRO 1: Anggaran Dana BOS (Siswa Penerima BOS)",
      "standarSNP": "8. Standar Penilaian Pendidikan",
      "kodeKegiatan": "08.01.02",
      "namaKegiatan": "Pelaksanaan Asesmen Sumatif Akhir Semester (SAS) & RDM",
      "anggaran": 7000000,
      "realisasi": 7000000,
      "volume": "1",
      "satuan": "Paket",
      "keterangan": "Penggandaan lembar soal & operasional Rapor Digital Madrasah"
    },
    {
      "id": "rk-9",
      "kro": "KRO 2: Anggaran Operasional (Layanan Perkantoran)",
      "standarSNP": "Belanja Keperluan Perkantoran",
      "kodeKegiatan": "09.01.01",
      "namaKegiatan": "Pengadaan Alat Tulis Kantor (ATK), Kertas, Tinta, & Bahan Operasional Perkantoran",
      "tanggalKegiatan": "2025-01-15",
      "anggaran": 8500000,
      "realisasi": 8500000,
      "volume": "6",
      "satuan": "Bulan",
      "keterangan": "Pengadaan ATK, kertas HVS, tinta printer, dan keperluan kantor harian"
    },
    {
      "id": "rk-10",
      "kro": "KRO 2: Anggaran Operasional (Layanan Perkantoran)",
      "standarSNP": "Belanja Honor Operasional Satuan Kerja",
      "kodeKegiatan": "10.01.01",
      "namaKegiatan": "Honorarium Pengelola Keuangan / Operasional Satuan Kerja Madrasah",
      "tanggalKegiatan": "2025-02-10",
      "anggaran": 12000000,
      "realisasi": 12000000,
      "volume": "6",
      "satuan": "Bulan",
      "keterangan": "Penyaluran honorarium KPA, PPK, PPSPM, & Bendahara Pengeluaran Satker"
    },
    {
      "id": "rk-11",
      "kro": "KRO 2: Anggaran Operasional (Layanan Perkantoran)",
      "standarSNP": "Belanja Pemeliharaan Gedung dan Bangunan",
      "kodeKegiatan": "11.01.01",
      "namaKegiatan": "Pemeliharaan, Perawatan Ringan Gedung, dan Instalasi Perkantoran",
      "tanggalKegiatan": "2025-03-20",
      "anggaran": 9500000,
      "realisasi": 9500000,
      "volume": "1",
      "satuan": "Paket",
      "keterangan": "Perbaikan instalasi listrik, kran air, pengecatan, & fasilitas kantor"
    },
    {
      "id": "rk-12",
      "kro": "KRO 2: Anggaran Operasional (Layanan Perkantoran)",
      "standarSNP": "Belanja Perjalanan Dinas",
      "kodeKegiatan": "12.01.01",
      "namaKegiatan": "Pelaksanaan Perjalanan Dinas Biasa / Dalam Kota / Luar Kota Koordinasi Satker",
      "tanggalKegiatan": "2025-04-18",
      "anggaran": 4500000,
      "realisasi": 4500000,
      "volume": "5",
      "satuan": "Kali",
      "keterangan": "Transport & SPPD perjalanan dinas koordinasi ke Kanwil / Kankemenag"
    }
  ],
  "buktiPengeluaran": [
    {
      "id": "bp-1",
      "noBukti": "KW-01/BOS/MTS/II/2025",
      "tanggal": "2025-02-18",
      "kodeAkun": "521115 - Belanja Honor Operasional Satuan Kerja (GTT / PTT)",
      "penerima": "Ust. Ahmad Dahlan, S.Pd.I dkk (8 Orang Guru)",
      "uraian": "Pembayaran Honor Guru Honorer / GTT Bulan Januari & Februari 2025",
      "nominal": 10666000,
      "jenisBukti": "SPJ / Honor",
      "kelengkapan": [
        "Kwitansi Asli",
        "Daftar Hadir",
        "SK Pembagian Tugas",
        "Tanda Terima Rekening"
      ]
    },
    {
      "id": "bp-2",
      "noBukti": "KW-02/BOS/MTS/II/2025",
      "tanggal": "2025-02-25",
      "kodeAkun": "521211 - Belanja Bahan (ATK, Kertas, Tinta, Penggandaan & Bahan Ajar)",
      "penerima": "Toko Madani Stationery",
      "uraian": "Pengadaan Kertas HVS, Tinta Printer, Spidol Whiteboard & ATK Kantor Semester Genap",
      "nominal": 4350000,
      "jenisBukti": "Faktur / Nota",
      "kelengkapan": [
        "Kwitansi Asli",
        "Faktur Toko",
        "Berita Acara Pemeriksaan Barang"
      ]
    },
    {
      "id": "bp-3",
      "noBukti": "KW-03/BOS/MTS/III/2025",
      "tanggal": "2025-03-05",
      "kodeAkun": "522119 - Belanja Langganan Daya dan Jasa Lainnya (Internet / WiFi / Cloud SIMPATIKA/EMIS)",
      "penerima": "PT Telkom Indonesia & PT PLN (Persero)",
      "uraian": "Pembayaran Tagihan Internet Dedicated & Token Listrik Madrasah Triwulan I",
      "nominal": 5250000,
      "jenisBukti": "Kwitansi",
      "kelengkapan": [
        "Kwitansi Asli",
        "Struk Bukti Bayar Resmi PLN/Telkom"
      ]
    },
    {
      "id": "bp-4",
      "noBukti": "KW-04/BOS/MTS/III/2025",
      "tanggal": "2025-03-20",
      "kodeAkun": "523111 - Belanja Pemeliharaan Gedung dan Bangunan",
      "penerima": "CV. Berkah Karya Mandiri",
      "uraian": "Pekerjaan Pengecatan 4 Ruang Kelas dan Perbaikan Instalasi Sanitasi/Wudhu",
      "nominal": 14500000,
      "jenisBukti": "Faktur / Nota",
      "kelengkapan": [
        "Kwitansi Asli",
        "Faktur / Nota",
        "Berita Acara Serah Terima Pekerjaan",
        "Foto Fisik 0%, 50%, 100%"
      ]
    },
    {
      "id": "bp-5",
      "noBukti": "KW-05/BOS/MTS/IV/2025",
      "tanggal": "2025-04-12",
      "kodeAkun": "536111 - Belanja Modal Lainnya - Buku Teks Utama / Perpustakaan",
      "penerima": "Penerbit CV. Bina Prestasi Mandiri",
      "uraian": "Pengadaan Buku Teks Pelajaran Kurikulum Merdeka Madrasah Kelas 7 & 8",
      "nominal": 7000000,
      "jenisBukti": "Faktur / Nota",
      "kelengkapan": [
        "Kwitansi Asli",
        "Faktur Resmi",
        "Faktur Pajak",
        "Berita Acara Penerimaan"
      ]
    },
    {
      "id": "bp-6",
      "noBukti": "KW-06/BOS/MTS/V/2025",
      "tanggal": "2025-05-15",
      "kodeAkun": "521219 - Belanja Non Operasional Lainnya (Konsumsi Kegiatan & Spanduk)",
      "penerima": "Panitia Asesmen Madrasah (AM)",
      "uraian": "Operasional, Penggandaan Naskah Soal & Konsumsi Asesmen Madrasah TP 2024/2025",
      "nominal": 8500000,
      "jenisBukti": "Kwitansi",
      "kelengkapan": [
        "Kwitansi Asli",
        "SK Panitia",
        "Daftar Hadir Pengawas",
        "SPJ Konsumsi"
      ]
    }
  ],
  "rekapPajak": [
    {
      "id": "pj-1",
      "kro": "KRO 1: Anggaran Dana BOS",
      "noBukti": "KW-01/BOS/MTS/II/2025",
      "jenisPajak": "PPh 21",
      "uraian": "Pajak Penghasilan Pasal 21 atas Honorarium GTT Golongan III",
      "dpp": 10666000,
      "tarif": 5,
      "jumlahPajak": 533300,
      "tanggalSetor": "2025-02-20",
      "ntpn": "7829103849102834",
      "statusSetor": "Sudah Disetor"
    },
    {
      "id": "pj-2",
      "kro": "KRO 1: Anggaran Dana BOS",
      "noBukti": "KW-02/BOS/MTS/II/2025",
      "jenisPajak": "PPh 22",
      "uraian": "Pajak Penghasilan Pasal 22 atas Pengadaan ATK Belanja Bahan",
      "dpp": 4350000,
      "tarif": 1.5,
      "jumlahPajak": 65250,
      "tanggalSetor": "2025-02-28",
      "ntpn": "9102837465019283",
      "statusSetor": "Sudah Disetor"
    },
    {
      "id": "pj-3",
      "kro": "KRO 1: Anggaran Dana BOS",
      "noBukti": "KW-04/BOS/MTS/III/2025",
      "jenisPajak": "PPN 11%",
      "uraian": "Pajak Pertambahan Nilai atas Pemeliharaan Bangunan Gedung",
      "dpp": 14500000,
      "tarif": 11,
      "jumlahPajak": 1595000,
      "tanggalSetor": "2025-03-25",
      "ntpn": "6382019482736192",
      "statusSetor": "Sudah Disetor"
    },
    {
      "id": "pj-4",
      "kro": "KRO 2: Anggaran Operasional (Layanan Perkantoran)",
      "noBukti": "KW-OPS-01/2025",
      "jenisPajak": "PPh 21",
      "uraian": "Pajak Penghasilan Pasal 21 atas Honorarium Operasional Satker (KRO 2)",
      "dpp": 12000000,
      "tarif": 5,
      "jumlahPajak": 600000,
      "tanggalSetor": "2025-03-28",
      "ntpn": "4820193857291023",
      "statusSetor": "Sudah Disetor"
    },
    {
      "id": "pj-5",
      "kro": "KRO 2: Anggaran Operasional (Layanan Perkantoran)",
      "noBukti": "KW-OPS-02/2025",
      "jenisPajak": "PPh 22",
      "uraian": "Pajak Penghasilan Pasal 22 atas Belanja Keperluan Perkantoran (KRO 2)",
      "dpp": 8500000,
      "tarif": 1.5,
      "jumlahPajak": 127500,
      "tanggalSetor": "2025-04-02",
      "ntpn": "5920193857281044",
      "statusSetor": "Sudah Disetor"
    }
  ],
  "dokumentasi": [
    {
      "id": "doc-1",
      "judul": "Pelaksanaan Asesmen Madrasah Berbasis Komputer & Digital (AM)",
      "tanggal": "2025-05-12",
      "kategori": "Foto Kegiatan",
      "keterangan": "Dokumentasi peserta didik kelas IX mengikuti Asesmen Madrasah dengan tertib"
    },
    {
      "id": "doc-2",
      "judul": "Workshop Peningkatan Mutu Modul Ajar Kurikulum Merdeka (IKM)",
      "tanggal": "2025-02-22",
      "kategori": "Berita Acara",
      "keterangan": "Berita Acara dan daftar hadir 24 dewan guru dalam perumusan perangkat ajar"
    },
    {
      "id": "doc-3",
      "judul": "Serah Terima Pekerjaan Pemeliharaan Ruang Kelas & Sanitasi",
      "tanggal": "2025-03-22",
      "kategori": "Serah Terima Barang",
      "keterangan": "BAST pemeliharaan fasilitas sanitasi dan pengecatan ruang belajar madrasah"
    },
    {
      "id": "doc-4",
      "judul": "Rapat Evaluasi Serapan Dana BOS & Penyusunan RKAM Perubahan",
      "tanggal": "2025-06-20",
      "kategori": "Notulen Rapat",
      "keterangan": "Notulen rapat bersama Komite Madrasah dan Kepala Madrasah terkait transparansi anggaran"
    }
  ],
  "sptjb": {
    "noSurat": "045/SPTJB-BOS/MTS.BK/VI/2025",
    "tanggalSurat": "2025-06-30",
    "pernyataan": "Menyatakan bahwa Laporan Pertanggungjawaban Penggunaan Dana Bantuan Operasional Sekolah (BOS) Periode ini telah dilaksanakan dengan sebenarnya, bukti-bukti pengeluaran telah diverifikasi keabsahannya, dan disimpan dengan tertib di madrasah sesuai peraturan perundang-undangan."
  },
  "notaPesananBast": [
    {
      "id": "npb-1",
      "buktiPengeluaranId": "bp-2",
      "noBuktiSpj": "KW-02/BOS/MTS/II/2026",
      "noSuratPesanan": "B.001/SP-BOS/MTs.21.07.03/II/2026",
      "tanggalPesanan": "2026-02-22",
      "noBast": "B.001/BAST-BOS/MTs.21.07.03/II/2026",
      "tanggalBast": "2026-02-25",
      "hariBast": "Selasa",
      "namaToko": "Toko Madani Stationery",
      "namaPenyedia": "H. Anwar Sadat, S.E.",
      "jabatanPenyedia": "Pimpinan / Pemilik Toko",
      "alamatToko": "Jl. Kemakmuran No. 18, Kec. Bangkala, Kab. Jeneponto",
      "teleponToko": "0813-4211-8900",
      "namaPemesan": "Drs. H. Muhammad Idris, M.Pd.I",
      "nipPemesan": "19750812 200212 1 004",
      "jabatanPemesan": "Kepala MTs Swasta Bangkala / PPK",
      "keperluan": "Pengadaan Kertas HVS, Tinta Printer, Spidol Whiteboard & ATK Kantor Semester Genap",
      "waktuPenyerahan": "3 (tiga) hari kalender setelah surat pesanan diterima",
      "tempatPenyerahan": "Kantor MTs Swasta Bangkala (Jl. Pendidikan No. 12 Bangkala)",
      "keteranganPemeriksaan": "Barang telah diperiksa secara fisik, diterima dalam keadaan 100% lengkap, baik, baru, dan sesuai pesanan.",
      "totalNominal": 4350000,
      "itemsBarang": [
        {
          "id": "it-1",
          "namaBarang": "Kertas HVS PaperOne A4 75 gram",
          "spesifikasi": "Ukuran A4 210 x 297 mm, 75 gsm, 500 lembar/rim",
          "volume": 25,
          "satuan": "Rim",
          "hargaSatuan": 56000,
          "totalHarga": 1400000,
          "kondisi": "Baik"
        },
        {
          "id": "it-2",
          "namaBarang": "Kertas HVS Sinar Dunia (Sidu) F4 75 gram",
          "spesifikasi": "Ukuran Folio F4 215 x 330 mm, 75 gsm",
          "volume": 20,
          "satuan": "Rim",
          "hargaSatuan": 62000,
          "totalHarga": 1240000,
          "kondisi": "Baik"
        },
        {
          "id": "it-3",
          "namaBarang": "Tinta Printer Epson 003 Original (Hitam & Warna)",
          "spesifikasi": "Botol 65ml Original Epson (Black, Cyan, Magenta, Yellow)",
          "volume": 8,
          "satuan": "Botol",
          "hargaSatuan": 95000,
          "totalHarga": 760000,
          "kondisi": "Baik"
        },
        {
          "id": "it-4",
          "namaBarang": "Spidol Whiteboard Snowman Boardmarker",
          "spesifikasi": "Warna Hitam & Biru Tinta Non-Permanen",
          "volume": 40,
          "satuan": "Buah",
          "hargaSatuan": 10500,
          "totalHarga": 420000,
          "kondisi": "Baik"
        },
        {
          "id": "it-5",
          "namaBarang": "Tinta Refill Spidol Whiteboard Snowman",
          "spesifikasi": "Tinta botol isi ulang 20cc",
          "volume": 20,
          "satuan": "Botol",
          "hargaSatuan": 16500,
          "totalHarga": 330000,
          "kondisi": "Baik"
        },
        {
          "id": "it-6",
          "namaBarang": "Stopmap Folio Kertas & Binder Clip",
          "spesifikasi": "Map Biola Folio dan Klip Kertas Joyko No. 260",
          "volume": 4,
          "satuan": "Paket",
          "hargaSatuan": 50000,
          "totalHarga": 200000,
          "kondisi": "Lengkap & Sesuai"
        }
      ]
    },
    {
      "id": "npb-2",
      "buktiPengeluaranId": "bp-4",
      "noBuktiSpj": "KW-04/BOS/MTS/III/2026",
      "noSuratPesanan": "B.002/SP-BOS/MTs.21.07.03/III/2026",
      "tanggalPesanan": "2026-03-18",
      "noBast": "B.002/BAST-BOS/MTs.21.07.03/III/2026",
      "tanggalBast": "2026-03-20",
      "hariBast": "Kamis",
      "namaToko": "CV. Berkah Karya Mandiri",
      "namaPenyedia": "Ir. Muh. Syahrul, M.T.",
      "jabatanPenyedia": "Direktur Pelaksana",
      "alamatToko": "Jl. Poros Jeneponto - Makassar KM 72",
      "teleponToko": "0852-9988-1234",
      "namaPemesan": "Drs. H. Muhammad Idris, M.Pd.I",
      "nipPemesan": "19750812 200212 1 004",
      "jabatanPemesan": "Kepala MTs Swasta Bangkala / PPK",
      "keperluan": "Pekerjaan Pengecatan 4 Ruang Kelas dan Perbaikan Instalasi Sanitasi/Wudhu Madrasah",
      "waktuPenyerahan": "14 (empat belas) hari kalender terhitung sejak SP diterbitkan",
      "tempatPenyerahan": "Lokasi Gedung MTs Swasta Bangkala",
      "keteranganPemeriksaan": "Pekerjaan fisik pengecatan dan instalasi sanitasi telah diperiksa bersama tim pemeriksa barang madrasah dengan hasil 100% selesai dan berfungsi dengan baik.",
      "totalNominal": 14500000,
      "itemsBarang": [
        {
          "id": "it-201",
          "namaBarang": "Pengadaan Bahan Cat Tembok Interior & Eksterior (Dulux & Avitex)",
          "spesifikasi": "Pail 25 Kg Cat Tembok Dinding Warna Putih Bersih & Hijau Madrasah",
          "volume": 6,
          "satuan": "Pail",
          "hargaSatuan": 950000,
          "totalHarga": 5700000,
          "kondisi": "Baik"
        },
        {
          "id": "it-202",
          "namaBarang": "Perlengkapan Alat Kerja Cat & Finishing Dinding",
          "spesifikasi": "Roll Cat, Kuas 3\", Bak Cat, Dempul Plamir Tembok & Kertas Amplas",
          "volume": 1,
          "satuan": "Paket",
          "hargaSatuan": 1300000,
          "totalHarga": 1300000,
          "kondisi": "Baik"
        },
        {
          "id": "it-203",
          "namaBarang": "Bahan Pipa PVC, Keran Stainless & Aksesoris Tempat Wudhu Siswa",
          "spesifikasi": "Pipa PVC 3/4\" Rucika AW, Stop Keran Ondaline Stainless & Sambungan",
          "volume": 1,
          "satuan": "Paket",
          "hargaSatuan": 2500000,
          "totalHarga": 2500000,
          "kondisi": "Baik"
        },
        {
          "id": "it-204",
          "namaBarang": "Jasa Pemborongan Tenaga Kerja Pengecatan 4 Ruang Kelas & Plumbing Sanitasi",
          "spesifikasi": "Pekerjaan pembersihan dinding, plamir, pengecatan 2 lapis dan instalasi air bersih",
          "volume": 1,
          "satuan": "Paket",
          "hargaSatuan": 5000000,
          "totalHarga": 5000000,
          "kondisi": "Lengkap & Sesuai"
        }
      ]
    },
    {
      "id": "npb-3",
      "buktiPengeluaranId": "bp-5",
      "noBuktiSpj": "KW-05/BOS/MTS/IV/2026",
      "noSuratPesanan": "B.003/SP-BOS/MTs.21.07.03/IV/2026",
      "tanggalPesanan": "2026-04-09",
      "noBast": "B.003/BAST-BOS/MTs.21.07.03/IV/2026",
      "tanggalBast": "2026-04-12",
      "hariBast": "Sabtu",
      "namaToko": "Penerbit CV. Bina Prestasi Mandiri",
      "namaPenyedia": "H. Andi Baso Mallarangeng",
      "jabatanPenyedia": "Manajer Pemasaran & Distribusi Buku",
      "alamatToko": "Kawasan Percetakan & Penerbitan No. 29, Makassar",
      "teleponToko": "0811-4455-6677",
      "namaPemesan": "Drs. H. Muhammad Idris, M.Pd.I",
      "nipPemesan": "19750812 200212 1 004",
      "jabatanPemesan": "Kepala MTs Swasta Bangkala / PPK",
      "keperluan": "Pengadaan Buku Teks Pelajaran Kurikulum Merdeka Madrasah Kelas 7 & 8",
      "waktuPenyerahan": "5 (lima) hari kalender setelah pesanan diterbitkan",
      "tempatPenyerahan": "Perpustakaan MTs Swasta Bangkala",
      "keteranganPemeriksaan": "Buku teks utama telah dihitung jumlah eksemplar, diperiksa kelengkapan halaman dan judul sesuai Keputusan Menteri Agama RI dalam kondisi 100% baik.",
      "totalNominal": 7000000,
      "itemsBarang": [
        {
          "id": "it-301",
          "namaBarang": "Buku Teks Siswa: Al-Qur'an Hadis Kelas 7 & 8 MTs (Kurikulum Merdeka)",
          "spesifikasi": "Kementerian Agama RI Edisi 2024, Full Color, Cover Glossy",
          "volume": 60,
          "satuan": "Eksemplar",
          "hargaSatuan": 38000,
          "totalHarga": 2280000,
          "kondisi": "Sangat Baik"
        },
        {
          "id": "it-302",
          "namaBarang": "Buku Teks Siswa: Fikih & Akidah Akhlak Kelas 7 & 8 MTs",
          "spesifikasi": "Kementerian Agama RI Edisi 2024, Cover Art Carton 230gr",
          "volume": 60,
          "satuan": "Eksemplar",
          "hargaSatuan": 38000,
          "totalHarga": 2280000,
          "kondisi": "Sangat Baik"
        },
        {
          "id": "it-303",
          "namaBarang": "Buku Teks Siswa: Sejarah Kebudayaan Islam (SKI) & Bahasa Arab",
          "spesifikasi": "Kementerian Agama RI Edisi 2024, Kertas HVS 70gr",
          "volume": 50,
          "satuan": "Eksemplar",
          "hargaSatuan": 38000,
          "totalHarga": 1900000,
          "kondisi": "Sangat Baik"
        },
        {
          "id": "it-304",
          "namaBarang": "Buku Panduan Guru & Asesmen Capaian Pembelajaran",
          "spesifikasi": "Buku Pegangan Guru Madrasah Lengkap Kemenag",
          "volume": 12,
          "satuan": "Eksemplar",
          "hargaSatuan": 45000,
          "totalHarga": 540000,
          "kondisi": "Lengkap & Sesuai"
        }
      ]
    }
  ],
  "pejabat": {
    "namaKepala": "Drs. H. Muhammad Idris, M.Pd.I",
    "nipKepala": "19750812 200212 1 004",
    "namaBendahara": "Nurul Hidayati, S.Pd",
    "nipBendahara": "19880415 201403 2 002",
    "namaKetuaKomite": "H. Daeng Rahman, S.Sos",
    "tempatPembuatan": "Bangkala",
    "tanggalPengesahan": "2025-06-30"
  },
  "perjalananDinas": [
    {
      "id": "spd-1",
      "noSppd": "018/ST-SPPD/MTS.BK/III/2025",
      "tanggalSppd": "2025-03-12",
      "maksudPerjalanan": "Rapat Koordinasi Evaluasi Realisasi BOS & Penyusunan Laporan Operasional KRO 2",
      "namaPelaksana": "Nurul Hidayati, S.Pd",
      "nipPelaksana": "19880415 201403 2 002",
      "jabatanPelaksana": "Bendahara Madrasah / Pengelola Operasional",
      "kotaTujuan": "Kantor Kementerian Agama Kabupaten",
      "lamaHari": "2 (Dua) Hari",
      "totalBiaya": 1250000,
      "laporanHasil": "Telah mengikuti Rapat Koordinasi dengan Seksi Penmad Kemenag Kab. Bantaeng. Seluruh format pertanggungjawaban KRO 1 dan KRO 2 telah dinyatakan lengkap dan sesuai petunjuk teknis."
    },
    {
      "id": "spd-2",
      "noSppd": "024/ST-SPPD/MTS.BK/V/2025",
      "tanggalSppd": "2025-05-18",
      "maksudPerjalanan": "Konsultasi Verifikasi Berkas SPJ & Pajak PPh Satker di KPP Pratama",
      "namaPelaksana": "Drs. H. Muhammad Idris, M.Pd.I",
      "nipPelaksana": "19750812 200212 1 004",
      "jabatanPelaksana": "Kepala Madrasah / Kuasa Pengguna Anggaran",
      "kotaTujuan": "Kantor Pelayanan Pajak (KPP) Pratama",
      "lamaHari": "1 (Satu) Hari",
      "totalBiaya": 750000,
      "laporanHasil": "Penyelesaian verifikasi kewajiban perpajakan PPh 21 dan PPh 22 atas belanja operasional perkantoran KRO 2."
    }
  ],
  "honorSatker": [
    {
      "id": "h-1",
      "nama": "Drs. H. Muhammad Idris, M.Pd.I",
      "nip": "19750812 200212 1 004",
      "jabatan": "Kuasa Pengguna Anggaran (KPA) / Kepala Madrasah",
      "golonganPNS": "Golongan IV (15%)",
      "honorBruto": 3500000,
      "potonganPph": 525000,
      "jumlahNetto": 2975000,
      "noRekening": "Bank BSI - 7128491023"
    },
    {
      "id": "h-2",
      "nama": "Nurul Hidayati, S.Pd",
      "nip": "19880415 201403 2 002",
      "jabatan": "Bendahara Pengeluaran Pembantu Satker",
      "golonganPNS": "Golongan III (5%)",
      "honorBruto": 3000000,
      "potonganPph": 150000,
      "jumlahNetto": 2850000,
      "noRekening": "Bank BSI - 7192840192"
    },
    {
      "id": "h-3",
      "nama": "Mansyur, S.Kom",
      "nip": "19920310 201902 1 003",
      "jabatan": "Pejabat Pembuat Komitmen (PPK)",
      "golonganPNS": "Golongan III (5%)",
      "honorBruto": 3000000,
      "potonganPph": 150000,
      "jumlahNetto": 2850000,
      "noRekening": "Bank BSI - 7183920194"
    },
    {
      "id": "h-4",
      "nama": "Rahmawati, S.E",
      "nip": "-",
      "jabatan": "Staf Pengelola Keuangan & Layanan Administrasi",
      "golonganPNS": "Golongan I/II & Non-PNS (0%)",
      "honorBruto": 2500000,
      "potonganPph": 0,
      "jumlahNetto": 2500000,
      "noRekening": "Bank BSI - 7203948172"
    }
  ],
  "catatanTambahan": "Laporan ini disusun sesuai Petunjuk Teknis Pengelolaan Dana Bantuan Operasional Sekolah (BOS) pada Madrasah Direktorat Jenderal Pendidikan Islam Kementerian Agama Republik Indonesia."
};
