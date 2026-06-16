/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  primary: string;
  secondary: string;
  accent: string;
};

export type TSocialMedia = {
  facebook?: string;
  instagram?: string;
  youtube?: string;
};

export type TPPDBScheduleItem = {
  kegiatan: string;
  tanggal: string;
  keterangan?: string;
};

export type TExtracurricular = {
  nama: string;
  deskripsi?: string;
  icon?: string;
};

export type TAchievement = {
  judul: string;
  siswa?: string;
  tahun?: string;
  kategori?: string;
  tingkat?: string;
};

export type TStaffMember = {
  nama: string;
  jabatan: string;
  foto?: string;
  nip?: string;
};

export type TAnnouncement = {
  judul: string;
  tanggal: string;
  isi: string;
  kategori?: string;
  penting?: boolean;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  brandColor: TBrandColor;
  schoolTagline?: string;
  schoolDescription?: string;
  heroImage?: string;
  schoolAddress?: string;
  schoolPhone?: string;
  schoolEmail?: string;
  googleMapsEmbed?: string;
  accreditationStatus?: string;
  accreditationYear?: string;
  npsn?: string;
  foundedYear?: string;
  socialMedia?: TSocialMedia;
  schoolVision?: string;
  schoolMissions?: string[];
  schoolHistory?: string;
  ppdbRequirements?: string[];
  ppdbSchedule?: TPPDBScheduleItem[];
  ppdbProcedure?: string[];
  extracurriculars?: TExtracurricular[];
  galleryImages?: string[];
  achievements?: TAchievement[];
  staffMembers?: TStaffMember[];
  announcements?: TAnnouncement[];
  showPPDB?: boolean;
  ppdbIsOpen?: boolean;
  curriculum?: string;
  organizationStructureImage?: string;
  footerText?: string;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "SMP Muhammadiyah 2 Surakarta",
  logoUrl: "FILL_LOGO_URL_HERE",
  brandColor: {
    primary: "#2E7D32",
    secondary: "#1A237E",
    accent: "#F9A825",
  },
  schoolTagline: "Unggul dalam Prestasi, Islami dalam Perilaku",
  schoolDescription:
    "SMP Muhammadiyah 2 Surakarta adalah sekolah menengah pertama unggulan berbasis Islam di bawah naungan Persyarikatan Muhammadiyah, berkomitmen mencetak generasi yang cerdas, berakhlak mulia, dan berwawasan global.",
  heroImage: "",
  schoolAddress: "Jl. Slamet Riyadi No. XX, Surakarta, Jawa Tengah 57111",
  schoolPhone: "(0271) 000000",
  schoolEmail: "info@smpm2solo.sch.id",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.!2d110.8!3d-7.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzAnMDAuMCJTIDExMMKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1",
  accreditationStatus: "A",
  accreditationYear: "2022",
  npsn: "20328001",
  foundedYear: "1952",
  socialMedia: {
    facebook: "",
    instagram: "",
    youtube: "",
  },
  schoolVision:
    "Terwujudnya sekolah Islam yang unggul, bermutu, dan berdaya saing tinggi dalam ilmu pengetahuan, teknologi, dan keimanan.",
  schoolMissions: [
    "Menyelenggarakan pendidikan Islam yang berkualitas dan komprehensif",
    "Mengembangkan potensi siswa secara akademik, spiritual, dan sosial",
    "Membentuk karakter Islami yang berakhlak mulia dan bertanggung jawab",
    "Meningkatkan kompetensi tenaga pendidik secara berkelanjutan",
    "Menjalin kerjasama dengan orang tua dan masyarakat dalam pendidikan",
  ],
  schoolHistory:
    "SMP Muhammadiyah 2 Surakarta berdiri sejak tahun 1952 sebagai bagian dari gerakan pendidikan Persyarikatan Muhammadiyah di Kota Surakarta. Sejak awal berdirinya, sekolah ini berkomitmen untuk memberikan pendidikan berkualitas yang memadukan ilmu pengetahuan umum dengan nilai-nilai keislaman. Selama puluhan tahun, sekolah ini telah melahirkan ribuan alumni yang berkontribusi di berbagai bidang kehidupan.",
  ppdbRequirements: [
    "Ijazah/STTB SD/MI atau surat keterangan lulus",
    "Akta kelahiran asli dan fotokopi",
    "Kartu Keluarga (KK) asli dan fotokopi",
    "Foto berwarna ukuran 3x4 sebanyak 4 lembar",
    "Surat keterangan sehat dari dokter",
    "Mengisi formulir pendaftaran yang tersedia",
  ],
  ppdbSchedule: [
    {
      kegiatan: "Pendaftaran Online / Offline",
      tanggal: "1 - 15 Juni 2026",
      keterangan: "Setiap hari kerja, pukul 08.00 - 14.00 WIB",
    },
    {
      kegiatan: "Tes Seleksi Akademik",
      tanggal: "18 Juni 2026",
      keterangan: "Pukul 07.30 WIB di aula sekolah",
    },
    {
      kegiatan: "Pengumuman Hasil Seleksi",
      tanggal: "22 Juni 2026",
      keterangan: "Dapat dilihat di website dan papan pengumuman sekolah",
    },
    {
      kegiatan: "Daftar Ulang",
      tanggal: "23 - 27 Juni 2026",
      keterangan: "Setiap hari kerja, pukul 08.00 - 12.00 WIB",
    },
    {
      kegiatan: "Masa Pengenalan Lingkungan Sekolah (MPLS)",
      tanggal: "14 - 16 Juli 2026",
      keterangan: "",
    },
  ],
  ppdbProcedure: [
    "Datang ke sekolah atau kunjungi website untuk mendapatkan formulir pendaftaran",
    "Isi formulir pendaftaran dengan lengkap dan benar",
    "Lampirkan semua dokumen persyaratan yang dibutuhkan",
    "Serahkan berkas pendaftaran ke panitia PPDB",
    "Terima bukti pendaftaran dan simpan dengan baik",
    "Ikuti tes seleksi pada tanggal yang telah ditentukan",
    "Pantau pengumuman hasil seleksi melalui website atau datang langsung",
    "Lakukan daftar ulang jika dinyatakan diterima",
  ],
  extracurriculars: [
    { nama: "Pramuka", deskripsi: "Kegiatan kepramukaan untuk membentuk karakter dan kepemimpinan", icon: "⚜️" },
    { nama: "Tapak Suci", deskripsi: "Pencak silat perguruan Muhammadiyah", icon: "🥋" },
    { nama: "Hizbul Wathan", deskripsi: "Kepanduan Muhammadiyah", icon: "🏕️" },
    { nama: "Futsal", deskripsi: "Olahraga futsal untuk pengembangan fisik dan sportivitas", icon: "⚽" },
    { nama: "Badminton", deskripsi: "Olahraga bulu tangkis", icon: "🏸" },
    { nama: "Paduan Suara", deskripsi: "Seni musik dan vokal", icon: "🎵" },
    { nama: "PMR", deskripsi: "Palang Merah Remaja", icon: "🏥" },
    { nama: "KIR", deskripsi: "Karya Ilmiah Remaja", icon: "🔬" },
    { nama: "English Club", deskripsi: "Pengembangan kemampuan bahasa Inggris", icon: "🌐" },
    { nama: "Seni Kaligrafi", deskripsi: "Seni menulis Arab (kaligrafi) Islami", icon: "✍️" },
  ],
  galleryImages: [],
  achievements: [
    {
      judul: "Juara 1 Olimpiade Matematika Tingkat Kota",
      siswa: "Ahmad Farhan",
      tahun: "2025",
      kategori: "Akademik",
      tingkat: "Kota/Kabupaten",
    },
    {
      judul: "Juara 2 Lomba Karya Ilmiah Remaja",
      siswa: "Siti Rahmawati",
      tahun: "2025",
      kategori: "Ilmiah",
      tingkat: "Provinsi",
    },
    {
      judul: "Juara 1 Tapak Suci Tingkat Provinsi",
      siswa: "Muhammad Rizky",
      tahun: "2024",
      kategori: "Olahraga",
      tingkat: "Provinsi",
    },
    {
      judul: "Juara 3 Lomba Kaligrafi Tingkat Nasional",
      siswa: "Nur Aini",
      tahun: "2024",
      kategori: "Seni",
      tingkat: "Nasional",
    },
    {
      judul: "Juara 1 Futsal Antar SMP Se-Kota Solo",
      siswa: "Tim Futsal SMPM2",
      tahun: "2025",
      kategori: "Olahraga",
      tingkat: "Kota/Kabupaten",
    },
  ],
  staffMembers: [
    {
      nama: "Drs. H. Abdullah, M.Pd.",
      jabatan: "Kepala Sekolah",
      foto: "",
      nip: "",
    },
    {
      nama: "Hj. Siti Aminah, S.Pd.",
      jabatan: "Wakil Kepala Bidang Kurikulum",
      foto: "",
      nip: "",
    },
    {
      nama: "Budi Santoso, S.Pd.",
      jabatan: "Wakil Kepala Bidang Kesiswaan",
      foto: "",
      nip: "",
    },
    {
      nama: "Rina Wahyuni, S.Pd.",
      jabatan: "Guru Matematika",
      foto: "",
      nip: "",
    },
    {
      nama: "Ahmad Fauzi, S.Pd.",
      jabatan: "Guru IPA",
      foto: "",
      nip: "",
    },
    {
      nama: "Dewi Rahayu, S.Pd.",
      jabatan: "Guru Bahasa Indonesia",
      foto: "",
      nip: "",
    },
    {
      nama: "Ustad Khairul Anwar, S.Ag.",
      jabatan: "Guru Pendidikan Agama Islam",
      foto: "",
      nip: "",
    },
    {
      nama: "Eko Prasetyo, S.Pd.",
      jabatan: "Guru Bahasa Inggris",
      foto: "",
      nip: "",
    },
  ],
  announcements: [
    {
      judul: "Pengumuman Jadwal Ujian Semester Genap 2025/2026",
      tanggal: "2026-06-01",
      isi: "Dengan hormat, kami informasikan bahwa Ujian Akhir Semester Genap Tahun Pelajaran 2025/2026 akan dilaksanakan pada tanggal 16-21 Juni 2026. Siswa diharapkan hadir tepat waktu dan membawa perlengkapan ujian yang diperlukan. Informasi lengkap dapat dilihat pada papan pengumuman sekolah.",
      kategori: "Akademik",
      penting: true,
    },
    {
      judul: "Pendaftaran PPDB Tahun Pelajaran 2026/2027 Dibuka",
      tanggal: "2026-05-25",
      isi: "SMP Muhammadiyah 2 Surakarta membuka penerimaan peserta didik baru (PPDB) untuk Tahun Pelajaran 2026/2027. Pendaftaran dibuka mulai 1 Juni 2026. Segera daftarkan putra-putri Anda dan dapatkan pendidikan berkualitas berbasis Islam.",
      kategori: "PPDB",
      penting: true,
    },
    {
      judul: "Kegiatan Pesantren Kilat Ramadhan 1447 H",
      tanggal: "2026-03-10",
      isi: "Dalam rangka meningkatkan keimanan dan ketaqwaan siswa, sekolah akan menyelenggarakan kegiatan Pesantren Kilat selama bulan Ramadhan. Kegiatan ini wajib diikuti oleh seluruh siswa kelas VII, VIII, dan IX.",
      kategori: "Keagamaan",
      penting: false,
    },
    {
      judul: "Penerimaan Raport Semester Ganjil",
      tanggal: "2025-12-20",
      isi: "Penerimaan raport semester ganjil tahun pelajaran 2025/2026 akan dilaksanakan pada hari Sabtu, 20 Desember 2025. Orang tua/wali siswa diharapkan hadir langsung ke sekolah untuk mengambil raport.",
      kategori: "Akademik",
      penting: false,
    },
  ],
  showPPDB: true,
  ppdbIsOpen: true,
  curriculum:
    "SMP Muhammadiyah 2 Surakarta mengimplementasikan Kurikulum Merdeka yang dipadukan dengan kurikulum khas Muhammadiyah (Al-Islam, Kemuhammadiyahan, dan Bahasa Arab / ISMUBA). Pendekatan pembelajaran berpusat pada siswa (student-centered) dengan mengintegrasikan nilai-nilai keislaman dalam setiap mata pelajaran.",
  organizationStructureImage: "",
  footerText:
    "SMP Muhammadiyah 2 Surakarta — Unggul dalam Prestasi, Islami dalam Perilaku. Jl. Slamet Riyadi, Surakarta.",
};
