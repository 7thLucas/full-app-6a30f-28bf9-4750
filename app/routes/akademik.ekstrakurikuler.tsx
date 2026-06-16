import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";
import SectionHeader from "~/components/SectionHeader";
import { useConfigurables } from "~/modules/configurables";
import { Star } from "lucide-react";

export default function EkstrakurikulerPage() {
  const { config, loading } = useConfigurables();

  const extracurriculars = loading ? [] : (config?.extracurriculars || []);

  return (
    <Layout>
      <PageHeader
        title="Ekstrakurikuler"
        subtitle="Wadah pengembangan bakat, minat, dan karakter siswa"
        breadcrumbs={[{ label: "Akademik" }, { label: "Ekstrakurikuler" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <SectionHeader
          title="Kegiatan Ekstrakurikuler"
          subtitle="Beragam pilihan kegiatan untuk mengembangkan potensi siswa"
        />

        {extracurriculars.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <Star size={48} className="mx-auto mb-3 text-gray-300" />
            <p>Belum ada data ekstrakurikuler.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {extracurriculars.map((ekskul, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-[#2E7D32]/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A237E]/10 to-[#2E7D32]/10 flex items-center justify-center flex-shrink-0 text-2xl">
                    {ekskul.icon || "🏆"}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A237E] mb-1">{ekskul.nama}</h3>
                    {ekskul.deskripsi && (
                      <p className="text-gray-500 text-sm leading-relaxed">{ekskul.deskripsi}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Benefits section */}
        <div className="mt-12 bg-gradient-to-r from-[#1A237E] to-[#2E7D32] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Mengapa Bergabung Ekstrakurikuler?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">
            Kegiatan ekstrakurikuler bukan hanya hiburan, tetapi sarana pengembangan diri yang terintegrasi dengan nilai-nilai Islam.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: "🧠", label: "Kecerdasan Emosional" },
              { icon: "🤝", label: "Kemampuan Sosial" },
              { icon: "🏅", label: "Prestasi & Pengakuan" },
              { icon: "💡", label: "Kreativitas & Inovasi" },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium text-white/90">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
