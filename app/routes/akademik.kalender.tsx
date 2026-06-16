import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";
import { Calendar, Info } from "lucide-react";

export default function KalenderAkademikPage() {
  const academicEvents = [
    { bulan: "Juli 2025", kegiatan: "MPLS (Masa Pengenalan Lingkungan Sekolah)", keterangan: "Kelas VII" },
    { bulan: "Juli 2025", kegiatan: "Awal Tahun Pelajaran 2025/2026", keterangan: "Semua kelas" },
    { bulan: "Agustus 2025", kegiatan: "Peringatan HUT RI ke-80", keterangan: "Upacara Bendera" },
    { bulan: "September 2025", kegiatan: "Penilaian Tengah Semester Ganjil", keterangan: "Kelas VII-IX" },
    { bulan: "Oktober 2025", kegiatan: "Peringatan Maulid Nabi Muhammad SAW", keterangan: "Kegiatan keagamaan" },
    { bulan: "November 2025", kegiatan: "Pekan Olahraga dan Seni Sekolah", keterangan: "Semua kelas" },
    { bulan: "Desember 2025", kegiatan: "Penilaian Akhir Semester Ganjil", keterangan: "Kelas VII-IX" },
    { bulan: "Desember 2025", kegiatan: "Penerimaan Rapor Semester Ganjil", keterangan: "Semua kelas" },
    { bulan: "Januari 2026", kegiatan: "Awal Semester Genap", keterangan: "Semua kelas" },
    { bulan: "Maret 2026", kegiatan: "Pesantren Kilat Ramadhan", keterangan: "Kegiatan keagamaan wajib" },
    { bulan: "Maret 2026", kegiatan: "Penilaian Tengah Semester Genap", keterangan: "Kelas VII-IX" },
    { bulan: "April 2026", kegiatan: "Ujian Sekolah Kelas IX", keterangan: "Kelas IX" },
    { bulan: "Mei 2026", kegiatan: "Wisuda Kelas IX", keterangan: "Kelas IX" },
    { bulan: "Juni 2026", kegiatan: "Penilaian Akhir Semester Genap", keterangan: "Kelas VII-IX" },
    { bulan: "Juni 2026", kegiatan: "Penerimaan Rapor Kenaikan Kelas", keterangan: "Semua kelas" },
    { bulan: "Juni–Juli 2026", kegiatan: "PPDB Tahun Pelajaran 2026/2027", keterangan: "Calon siswa baru" },
  ];

  const months = [...new Set(academicEvents.map((e) => e.bulan.split(" ")[1]))];

  const colorByMonth: Record<string, string> = {
    "2025": "bg-[#1A237E]",
    "2026": "bg-[#2E7D32]",
  };

  return (
    <Layout>
      <PageHeader
        title="Kalender Akademik"
        subtitle="Jadwal kegiatan sekolah tahun pelajaran 2025/2026"
        breadcrumbs={[{ label: "Akademik" }, { label: "Kalender Akademik" }]}
      />

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Info note */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3 mb-8">
          <Info size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-blue-700 text-sm">
            Kalender akademik ini bersifat umum dan dapat berubah sewaktu-waktu sesuai kebijakan sekolah atau dinas pendidikan.
            Pantau pengumuman resmi sekolah untuk informasi terkini.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <Calendar size={20} className="text-[#2E7D32]" />
            <h2 className="text-xl font-bold text-[#1A237E]">Agenda Kegiatan 2025/2026</h2>
          </div>

          <div className="divide-y divide-gray-50">
            {academicEvents.map((event, i) => {
              const year = event.bulan.split(" ")[1];
              const bgColor = colorByMonth[year] || "bg-gray-700";

              return (
                <div key={i} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 hover:bg-gray-50 transition-colors">
                  <div className={`flex-shrink-0 inline-flex items-center gap-1.5 ${bgColor} text-white text-xs font-medium px-3 py-1.5 rounded-full w-fit`}>
                    <Calendar size={12} />
                    {event.bulan}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 text-sm">{event.kegiatan}</div>
                    {event.keterangan && (
                      <div className="text-gray-500 text-xs mt-0.5">{event.keterangan}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
