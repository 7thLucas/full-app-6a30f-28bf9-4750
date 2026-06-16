import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";
import { useConfigurables } from "~/modules/configurables";
import { BookOpen, CheckCircle2, Layers } from "lucide-react";

export default function KurikulumPage() {
  const { config, loading } = useConfigurables();

  const curriculum = loading ? "" : (config?.curriculum || "");

  const subjects = [
    { name: "Pendidikan Agama Islam & Budi Pekerti", category: "Wajib A" },
    { name: "Pendidikan Pancasila", category: "Wajib A" },
    { name: "Bahasa Indonesia", category: "Wajib A" },
    { name: "Matematika", category: "Wajib A" },
    { name: "Ilmu Pengetahuan Alam (IPA)", category: "Wajib A" },
    { name: "Ilmu Pengetahuan Sosial (IPS)", category: "Wajib A" },
    { name: "Bahasa Inggris", category: "Wajib A" },
    { name: "Pendidikan Jasmani & Olahraga", category: "Wajib B" },
    { name: "Seni Budaya", category: "Wajib B" },
    { name: "Informatika", category: "Wajib B" },
    { name: "Al-Islam & Kemuhammadiyahan", category: "Muatan Lokal" },
    { name: "Bahasa Arab", category: "Muatan Lokal" },
    { name: "Bahasa Jawa", category: "Muatan Lokal" },
  ];

  const categoryColors: Record<string, string> = {
    "Wajib A": "bg-blue-50 text-blue-700",
    "Wajib B": "bg-green-50 text-green-700",
    "Muatan Lokal": "bg-yellow-50 text-yellow-700",
  };

  return (
    <Layout>
      <PageHeader
        title="Kurikulum"
        subtitle="Program pembelajaran yang diterapkan di sekolah kami"
        breadcrumbs={[{ label: "Akademik" }, { label: "Kurikulum" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        {/* Curriculum description */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
              <Layers size={20} className="text-[#2E7D32]" />
            </div>
            <h2 className="text-xl font-bold text-[#1A237E]">Tentang Kurikulum</h2>
          </div>
          {curriculum ? (
            <div className="text-gray-600 leading-relaxed">
              {curriculum.split("\n").map((p, i) => (
                <p key={i} className="mb-3">{p}</p>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 italic">Informasi kurikulum belum tersedia.</p>
          )}
        </div>

        {/* Kurikulum Merdeka highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: "🎯",
              title: "Berpusat pada Murid",
              desc: "Pembelajaran dirancang untuk memenuhi kebutuhan dan potensi setiap siswa secara individual",
            },
            {
              icon: "🔗",
              title: "Profil Pelajar Pancasila",
              desc: "Membentuk karakter beriman, mandiri, bernalar kritis, kreatif, bergotong-royong, dan berkebhinekaan",
            },
            {
              icon: "📚",
              title: "Integrasi ISMUBA",
              desc: "Al-Islam, Kemuhammadiyahan, dan Bahasa Arab terintegrasi dalam setiap aspek pembelajaran",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-[#1A237E] mb-2 text-sm">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Subjects */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <BookOpen size={20} className="text-[#2E7D32]" />
            <h2 className="text-xl font-bold text-[#1A237E]">Mata Pelajaran</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {subjects.map((subj, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#2E7D32] flex-shrink-0" />
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-gray-700 text-sm">{subj.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[subj.category] || "bg-gray-100 text-gray-600"}`}>
                      {subj.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
