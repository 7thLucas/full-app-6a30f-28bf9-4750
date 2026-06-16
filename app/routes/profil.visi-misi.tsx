import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";
import { useConfigurables } from "~/modules/configurables";
import { Eye, Target, CheckCircle2 } from "lucide-react";

export default function VisiMisiPage() {
  const { config, loading } = useConfigurables();

  const vision = loading ? "" : (config?.schoolVision || "");
  const missions = loading ? [] : (config?.schoolMissions || []);

  return (
    <Layout>
      <PageHeader
        title="Visi & Misi"
        subtitle="Landasan cita-cita dan arah perjuangan sekolah"
        breadcrumbs={[{ label: "Profil Sekolah" }, { label: "Visi & Misi" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        {/* Bismillah */}
        <div className="text-center">
          <p className="text-[#2E7D32] text-2xl font-arabic">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
        </div>

        {/* Visi */}
        <div className="bg-gradient-to-br from-[#1A237E] to-[#283593] rounded-2xl p-8 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <Eye size={22} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Visi</h2>
              <p className="text-blue-200 text-sm">Cita-cita yang ingin diraih</p>
            </div>
          </div>
          <div className="border-l-4 border-[#F9A825] pl-5">
            <p className="text-lg leading-relaxed text-white/95 italic font-medium">
              "{vision || "Visi sekolah belum diisi."}"
            </p>
          </div>
        </div>

        {/* Misi */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
              <Target size={22} className="text-[#2E7D32]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1A237E]">Misi</h2>
              <p className="text-gray-500 text-sm">Langkah-langkah mewujudkan visi</p>
            </div>
          </div>

          {missions.length > 0 ? (
            <ol className="space-y-4">
              {missions.map((misi, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2E7D32] text-white flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className="flex gap-2 items-start pt-1">
                    <CheckCircle2 size={16} className="text-[#F9A825] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{misi}</p>
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-gray-400 italic">Misi belum diisi.</p>
          )}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "📖", title: "Ilmu", desc: "Mengutamakan pendidikan berkualitas dan pengembangan ilmu pengetahuan" },
            { icon: "🕌", title: "Iman", desc: "Membangun karakter Islami yang kuat berdasarkan Al-Qur'an dan Sunnah" },
            { icon: "💪", title: "Amal", desc: "Mendorong siswa untuk aktif berkontribusi bagi masyarakat dan bangsa" },
          ].map((val) => (
            <div key={val.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl mb-3">{val.icon}</div>
              <h3 className="font-bold text-[#1A237E] mb-2">{val.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
