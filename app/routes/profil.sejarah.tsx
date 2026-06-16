import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";
import { useConfigurables } from "~/modules/configurables";
import { BookOpen, Calendar, MapPin } from "lucide-react";

export default function SejarahPage() {
  const { config, loading } = useConfigurables();

  const appName = loading ? "SMP Muhammadiyah 2 Surakarta" : (config?.appName || "SMP Muhammadiyah 2 Surakarta");
  const history = loading ? "" : (config?.schoolHistory || "");
  const foundedYear = loading ? "" : (config?.foundedYear || "");
  const npsn = loading ? "" : (config?.npsn || "");
  const address = loading ? "" : (config?.schoolAddress || "");

  return (
    <Layout>
      <PageHeader
        title="Sejarah Sekolah"
        subtitle={`Perjalanan panjang ${appName}`}
        breadcrumbs={[{ label: "Profil Sekolah" }, { label: "Sejarah" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <BookOpen size={20} className="text-[#2E7D32]" />
                </div>
                <h2 className="text-xl font-bold text-[#1A237E]">Sejarah Singkat</h2>
              </div>

              {history ? (
                <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
                  {history.split("\n").map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 italic">Belum ada informasi sejarah.</p>
              )}

              {/* Islamic separator */}
              <div className="my-8 flex items-center gap-3">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#F9A825]/40" />
                <span className="text-[#F9A825] text-lg">✦</span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#F9A825]/40" />
              </div>

              <div className="bg-gradient-to-r from-[#1A237E]/5 to-[#2E7D32]/5 rounded-xl p-5 border border-[#1A237E]/10">
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  "Didirikan dengan semangat amar ma'ruf nahi munkar, {appName} terus berkomitmen
                  untuk mencetak generasi Muslim yang cerdas, berakhlak, dan berdaya saing."
                </p>
              </div>
            </div>
          </div>

          {/* Info sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-[#1A237E] mb-4 text-sm uppercase tracking-wide">
                Identitas Sekolah
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <BookOpen size={18} className="text-[#2E7D32] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500">Nama Sekolah</div>
                    <div className="text-sm font-medium text-gray-800">{appName}</div>
                  </div>
                </li>
                {foundedYear && (
                  <li className="flex gap-3">
                    <Calendar size={18} className="text-[#2E7D32] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-gray-500">Tahun Berdiri</div>
                      <div className="text-sm font-medium text-gray-800">{foundedYear}</div>
                    </div>
                  </li>
                )}
                {npsn && (
                  <li className="flex gap-3">
                    <div className="w-4.5 h-4.5 mt-0.5 flex-shrink-0">
                      <span className="text-[#2E7D32] text-sm font-bold">#</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">NPSN</div>
                      <div className="text-sm font-medium text-gray-800">{npsn}</div>
                    </div>
                  </li>
                )}
                {address && (
                  <li className="flex gap-3">
                    <MapPin size={18} className="text-[#2E7D32] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-gray-500">Alamat</div>
                      <div className="text-sm font-medium text-gray-800 leading-relaxed">{address}</div>
                    </div>
                  </li>
                )}
                <li className="flex gap-3">
                  <div className="w-4.5 h-4.5 mt-0.5 flex-shrink-0">
                    <span className="text-[#2E7D32] text-sm">🏫</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Naungan</div>
                    <div className="text-sm font-medium text-gray-800">Persyarikatan Muhammadiyah</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white rounded-2xl p-6">
              <p className="text-2xl mb-2">☀️</p>
              <h3 className="font-bold mb-1">Muhammadiyah</h3>
              <p className="text-green-100 text-xs leading-relaxed">
                Persyarikatan Muhammadiyah didirikan oleh K.H. Ahmad Dahlan pada 18 November 1912 di Yogyakarta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
