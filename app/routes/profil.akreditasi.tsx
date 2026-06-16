import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";
import { useConfigurables } from "~/modules/configurables";
import { Award, CheckCircle2, Shield, Star } from "lucide-react";

export default function AkreditasiPage() {
  const { config, loading } = useConfigurables();

  const status = loading ? "" : (config?.accreditationStatus || "A");
  const year = loading ? "" : (config?.accreditationYear || "");
  const appName = loading ? "SMP Muhammadiyah 2 Surakarta" : (config?.appName || "SMP Muhammadiyah 2 Surakarta");

  const criteria = [
    "Standar Isi",
    "Standar Proses",
    "Standar Kompetensi Lulusan",
    "Standar Pendidik dan Tenaga Kependidikan",
    "Standar Sarana dan Prasarana",
    "Standar Pengelolaan",
    "Standar Pembiayaan",
    "Standar Penilaian Pendidikan",
  ];

  return (
    <Layout>
      <PageHeader
        title="Akreditasi Sekolah"
        subtitle="Pengakuan atas kualitas dan standar pendidikan"
        breadcrumbs={[{ label: "Profil Sekolah" }, { label: "Akreditasi" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Akreditasi badge */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full text-center">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#F9A825] to-[#F57F17] flex items-center justify-center mx-auto shadow-lg">
                  <div className="text-center text-white">
                    <Award size={24} className="mx-auto mb-1" />
                    <div className="text-5xl font-black leading-none">{status || "A"}</div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center">
                  <Star size={14} className="text-white fill-white" />
                </div>
              </div>
              <h3 className="font-bold text-[#1A237E] text-xl mb-1">
                Akreditasi {status || "A"}
              </h3>
              {year && (
                <p className="text-gray-500 text-sm">Tahun {year}</p>
              )}
              <p className="text-gray-500 text-sm mt-2">
                Badan Akreditasi Nasional<br />Sekolah/Madrasah (BAN-S/M)
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white rounded-2xl p-6 w-full mt-4 text-center">
              <Shield size={32} className="mx-auto mb-3 text-[#F9A825]" />
              <h3 className="font-bold mb-2">Terakreditasi</h3>
              <p className="text-green-100 text-xs leading-relaxed">
                Akreditasi merupakan bentuk pengakuan pemerintah atas kualitas {appName} dalam memberikan layanan pendidikan.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#1A237E] mb-2">Apa itu Akreditasi?</h2>
              <div className="h-1 w-10 bg-[#F9A825] rounded mb-4" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Akreditasi sekolah adalah proses penilaian secara komprehensif terhadap kelayakan dan kinerja satuan pendidikan yang hasilnya diwujudkan dalam bentuk pengakuan dan peringkat kelayakan.
              </p>
              <p className="text-gray-600 leading-relaxed">
                {appName} mendapatkan nilai akreditasi <strong className="text-[#2E7D32]">{status || "A"}</strong>, yang mencerminkan komitmen kami dalam menjaga dan meningkatkan mutu pendidikan secara berkelanjutan.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#1A237E] mb-2">8 Standar Nasional Pendidikan</h2>
              <div className="h-1 w-10 bg-[#F9A825] rounded mb-5" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {criteria.map((c, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#2E7D32] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
