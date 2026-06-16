import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";
import { useConfigurables } from "~/modules/configurables";
import { Users, GitBranch } from "lucide-react";

export default function StrukturOrganisasiPage() {
  const { config, loading } = useConfigurables();

  const orgImage = loading ? "" : (config?.organizationStructureImage || "");
  const staffMembers = loading ? [] : (config?.staffMembers || []);

  const leadership = staffMembers.filter((s) =>
    s.jabatan.toLowerCase().includes("kepala") ||
    s.jabatan.toLowerCase().includes("wakil") ||
    s.jabatan.toLowerCase().includes("koordinator")
  );

  return (
    <Layout>
      <PageHeader
        title="Struktur Organisasi"
        subtitle="Susunan kepemimpinan dan manajemen sekolah"
        breadcrumbs={[{ label: "Profil Sekolah" }, { label: "Struktur Organisasi" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {orgImage && !orgImage.startsWith("FILL_") ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-xl font-bold text-[#1A237E] mb-4 flex items-center gap-2">
              <GitBranch size={20} className="text-[#2E7D32]" />
              Bagan Struktur Organisasi
            </h2>
            <img
              src={orgImage}
              alt="Struktur Organisasi"
              className="w-full rounded-xl object-contain"
            />
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8 text-center">
            <GitBranch size={48} className="mx-auto mb-3 text-gray-300" />
            <p className="text-gray-500">Bagan struktur organisasi belum diunggah.</p>
            <p className="text-gray-400 text-sm mt-1">Upload melalui pengaturan konfigurasi sekolah.</p>
          </div>
        )}

        {/* Leadership Cards */}
        {leadership.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-5">
              <Users size={20} className="text-[#2E7D32]" />
              <h2 className="text-xl font-bold text-[#1A237E]">Pimpinan Sekolah</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {leadership.map((staff, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1A237E] to-[#2E7D32] flex items-center justify-center flex-shrink-0">
                    {staff.foto && !staff.foto.startsWith("FILL_") ? (
                      <img src={staff.foto} alt={staff.nama} className="w-14 h-14 rounded-full object-cover" />
                    ) : (
                      <span className="text-white font-bold text-lg">
                        {staff.nama.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{staff.nama}</div>
                    <div className="text-[#2E7D32] text-xs font-medium mt-0.5">{staff.jabatan}</div>
                    {staff.nip && (
                      <div className="text-gray-400 text-xs mt-0.5">NIP: {staff.nip}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hierarchy description */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-[#1A237E] mb-4">Garis Koordinasi</h3>
          <div className="space-y-3">
            {[
              { role: "Kepala Sekolah", desc: "Pimpinan tertinggi bertanggung jawab atas seluruh kegiatan sekolah" },
              { role: "Wakasek Kurikulum", desc: "Mengelola program pembelajaran dan pengembangan kurikulum" },
              { role: "Wakasek Kesiswaan", desc: "Membina kegiatan siswa, kedisiplinan, dan pengembangan karakter" },
              { role: "Wakasek Sarana Prasarana", desc: "Mengelola fasilitas dan sarana penunjang pembelajaran" },
              { role: "Guru dan Staff", desc: "Pelaksana teknis pembelajaran dan administrasi sekolah" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-7 h-7 rounded-full bg-[#1A237E] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{item.role}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
