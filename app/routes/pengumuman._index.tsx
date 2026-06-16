import { useState } from "react";
import { Link } from "react-router";
import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";
import { useConfigurables } from "~/modules/configurables";
import { Bell, AlertCircle, ChevronRight, Filter } from "lucide-react";

export default function PengumumanPage() {
  const { config, loading } = useConfigurables();
  const [selectedKategori, setSelectedKategori] = useState<string>("Semua");

  const announcements = loading ? [] : (config?.announcements || []);

  const sorted = [...announcements].sort(
    (a, b) => new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime()
  );

  const categories = ["Semua", ...Array.from(new Set(sorted.map((a) => a.kategori || "Umum")))];

  const filtered =
    selectedKategori === "Semua"
      ? sorted
      : sorted.filter((a) => (a.kategori || "Umum") === selectedKategori);

  function formatDate(dateStr: string) {
    try {
      return new Date(dateStr).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  }

  return (
    <Layout>
      <PageHeader
        title="Pengumuman"
        subtitle="Informasi terbaru dari SMP Muhammadiyah 2 Surakarta"
        breadcrumbs={[{ label: "Pengumuman" }]}
      />

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Filter */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
          <Filter size={16} className="text-gray-400 flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedKategori(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedKategori === cat
                  ? "bg-[#2E7D32] text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#2E7D32] hover:text-[#2E7D32]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <Bell size={64} className="mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-semibold text-gray-500">Tidak ada pengumuman</h3>
            <p className="text-gray-400 text-sm mt-1">Belum ada pengumuman untuk kategori ini.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((ann, i) => {
              const date = new Date(ann.tanggal);
              const day = date.getDate();
              const month = date.toLocaleDateString("id-ID", { month: "short" });
              const year = date.getFullYear();

              return (
                <Link
                  to={`/pengumuman/${i}`}
                  key={i}
                  className={`block bg-white rounded-xl shadow-sm border hover:shadow-md transition-all ${
                    ann.penting ? "border-[#F9A825]" : "border-gray-100"
                  }`}
                >
                  <div className="p-5 flex gap-4">
                    {/* Date */}
                    <div className="flex-shrink-0 w-14 h-16 bg-[#1A237E] rounded-xl flex flex-col items-center justify-center text-white">
                      <span className="text-xl font-bold leading-none">{day}</span>
                      <span className="text-xs uppercase">{month}</span>
                      <span className="text-xs opacity-70">{year}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        {ann.penting && (
                          <div className="flex items-center gap-1 text-[#F9A825]">
                            <AlertCircle size={12} />
                            <span className="text-xs font-medium">Penting</span>
                          </div>
                        )}
                        {ann.kategori && (
                          <span className="text-xs font-medium text-[#2E7D32] bg-green-50 px-2 py-0.5 rounded">
                            {ann.kategori}
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-gray-800 leading-snug mb-1.5 line-clamp-2">
                        {ann.judul}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                        {ann.isi}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-gray-400 text-xs">{formatDate(ann.tanggal)}</span>
                        <span className="text-[#2E7D32] text-xs flex items-center gap-0.5">
                          Baca selengkapnya <ChevronRight size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
