import { useState } from "react";
import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";
import SectionHeader from "~/components/SectionHeader";
import { useConfigurables } from "~/modules/configurables";
import { Trophy, Medal, Filter, Star } from "lucide-react";

export default function PrestasiPage() {
  const { config, loading } = useConfigurables();
  const [selectedKategori, setSelectedKategori] = useState("Semua");
  const [selectedTingkat, setSelectedTingkat] = useState("Semua");

  const achievements = loading ? [] : (config?.achievements || []);

  const categories = ["Semua", ...Array.from(new Set(achievements.map((a) => a.kategori || "Umum")))];
  const levels = ["Semua", ...Array.from(new Set(achievements.map((a) => a.tingkat || "Lokal")))];

  const filtered = achievements.filter((a) => {
    const matchCat = selectedKategori === "Semua" || (a.kategori || "Umum") === selectedKategori;
    const matchLevel = selectedTingkat === "Semua" || (a.tingkat || "Lokal") === selectedTingkat;
    return matchCat && matchLevel;
  });

  const tingkatColors: Record<string, string> = {
    "Internasional": "bg-purple-100 text-purple-700",
    "Nasional": "bg-red-100 text-red-700",
    "Provinsi": "bg-orange-100 text-orange-700",
    "Kota/Kabupaten": "bg-blue-100 text-blue-700",
    "Lokal": "bg-gray-100 text-gray-700",
  };

  const kategoriColors: Record<string, string> = {
    "Akademik": "bg-blue-50 text-blue-700",
    "Olahraga": "bg-green-50 text-green-700",
    "Seni": "bg-pink-50 text-pink-700",
    "Ilmiah": "bg-purple-50 text-purple-700",
    "Keagamaan": "bg-yellow-50 text-yellow-700",
  };

  return (
    <Layout>
      <PageHeader
        title="Prestasi Siswa"
        subtitle="Kebanggaan kami, harapan bangsa"
        breadcrumbs={[{ label: "Prestasi" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Prestasi", value: achievements.length, icon: Trophy, color: "text-[#F9A825]" },
            { label: "Tingkat Nasional", value: achievements.filter(a => a.tingkat === "Nasional" || a.tingkat === "Internasional").length, icon: Medal, color: "text-red-500" },
            { label: "Tingkat Provinsi", value: achievements.filter(a => a.tingkat === "Provinsi").length, icon: Star, color: "text-orange-500" },
            { label: "Tingkat Kota", value: achievements.filter(a => a.tingkat === "Kota/Kabupaten").length, icon: Trophy, color: "text-blue-500" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center">
              <stat.icon size={24} className={`mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-[#1A237E]">{stat.value}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <SectionHeader title="Daftar Prestasi" subtitle="Pencapaian membanggakan siswa-siswi kami" />

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <Filter size={14} className="text-gray-400 flex-shrink-0" />
            <span className="text-xs text-gray-500 flex-shrink-0">Kategori:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedKategori(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedKategori === cat
                    ? "bg-[#2E7D32] text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#2E7D32]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs text-gray-500 flex-shrink-0">Tingkat:</span>
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedTingkat(level)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedTingkat === level
                    ? "bg-[#1A237E] text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#1A237E]"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <Trophy size={64} className="mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-semibold text-gray-500">Belum ada prestasi</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((ach, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F9A825] to-[#F57F17] flex items-center justify-center flex-shrink-0">
                    <Trophy size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-2">
                      {ach.judul}
                    </h3>
                    {ach.siswa && (
                      <p className="text-gray-600 text-xs mb-2">
                        <span className="font-medium">Oleh:</span> {ach.siswa}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5">
                      {ach.tahun && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          {ach.tahun}
                        </span>
                      )}
                      {ach.kategori && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${kategoriColors[ach.kategori] || "bg-gray-100 text-gray-600"}`}>
                          {ach.kategori}
                        </span>
                      )}
                      {ach.tingkat && (
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tingkatColors[ach.tingkat] || "bg-gray-100 text-gray-600"}`}>
                          {ach.tingkat}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
