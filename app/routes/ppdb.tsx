import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";
import SectionHeader from "~/components/SectionHeader";
import { useConfigurables } from "~/modules/configurables";
import { CheckCircle2, Calendar, FileText, ArrowRight, AlertCircle, Clock } from "lucide-react";

export default function PPDBPage() {
  const { config, loading } = useConfigurables();

  const showPPDB = !loading && config?.showPPDB !== false;
  const ppdbOpen = !loading && config?.ppdbIsOpen;
  const requirements = loading ? [] : (config?.ppdbRequirements || []);
  const schedule = loading ? [] : (config?.ppdbSchedule || []);
  const procedure = loading ? [] : (config?.ppdbProcedure || []);

  if (!loading && !showPPDB) {
    return (
      <Layout>
        <PageHeader
          title="PPDB"
          subtitle="Penerimaan Peserta Didik Baru"
          breadcrumbs={[{ label: "PPDB" }]}
        />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <AlertCircle size={64} className="mx-auto mb-4 text-gray-300" />
          <h2 className="text-xl font-bold text-gray-500">PPDB Belum Dibuka</h2>
          <p className="text-gray-400 mt-2">Informasi PPDB akan segera tersedia. Pantau terus website kami.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        title="PPDB 2026/2027"
        subtitle="Penerimaan Peserta Didik Baru Tahun Pelajaran 2026/2027"
        breadcrumbs={[{ label: "PPDB" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Status Banner */}
        {ppdbOpen ? (
          <div className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] text-white rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 size={24} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#F9A825] text-white text-xs font-bold px-2 py-0.5 rounded">SEDANG DIBUKA</span>
              </div>
              <h2 className="font-bold text-lg">PPDB Tahun Pelajaran 2026/2027 Sedang Berlangsung!</h2>
              <p className="text-green-100 text-sm mt-1">
                Segera daftarkan putra-putri Anda dan bergabung bersama keluarga besar SMP Muhammadiyah 2 Surakarta.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-[#1A237E] to-[#283593] text-white rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Clock size={24} className="text-white" />
            </div>
            <div>
              <h2 className="font-bold text-lg">PPDB Akan Segera Dibuka</h2>
              <p className="text-blue-200 text-sm mt-1">
                Persiapkan dokumen Anda dan pantau jadwal pendaftaran di bawah ini.
              </p>
            </div>
          </div>
        )}

        {/* Requirements */}
        {requirements.length > 0 && (
          <div>
            <SectionHeader
              title="Persyaratan Pendaftaran"
              subtitle="Dokumen yang perlu disiapkan calon peserta didik baru"
              centered={false}
            />
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-5">
                <FileText size={20} className="text-[#2E7D32]" />
                <h3 className="font-semibold text-gray-800">Berkas yang Diperlukan</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#2E7D32] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Schedule */}
        {schedule.length > 0 && (
          <div>
            <SectionHeader
              title="Jadwal PPDB"
              subtitle="Rangkaian kegiatan penerimaan peserta didik baru"
              centered={false}
            />
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-2 p-5 border-b border-gray-100">
                <Calendar size={20} className="text-[#2E7D32]" />
                <h3 className="font-semibold text-gray-800">Timeline Kegiatan</h3>
              </div>
              <div className="divide-y divide-gray-50">
                {schedule.map((item, i) => (
                  <div key={i} className="p-5 flex flex-col sm:flex-row sm:items-center gap-2 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3 sm:flex-1">
                      <div className="w-8 h-8 rounded-full bg-[#1A237E] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 text-sm">{item.kegiatan}</div>
                        {item.keterangan && (
                          <div className="text-gray-500 text-xs mt-0.5">{item.keterangan}</div>
                        )}
                      </div>
                    </div>
                    <div className="ml-11 sm:ml-0">
                      <span className="inline-block bg-[#1A237E]/10 text-[#1A237E] text-xs font-medium px-3 py-1.5 rounded-full">
                        {item.tanggal}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Procedure */}
        {procedure.length > 0 && (
          <div>
            <SectionHeader
              title="Prosedur Pendaftaran"
              subtitle="Langkah-langkah mendaftarkan diri ke sekolah kami"
              centered={false}
            />
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="space-y-4">
                {procedure.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {i < procedure.length - 1 && (
                        <ArrowRight size={14} className="text-[#F9A825] flex-shrink-0" />
                      )}
                      {i === procedure.length - 1 && (
                        <CheckCircle2 size={14} className="text-[#2E7D32] flex-shrink-0" />
                      )}
                      <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#F9A825] to-[#F57F17] rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Informasi Lebih Lanjut</h2>
          <p className="text-yellow-100 mb-6 text-sm max-w-lg mx-auto">
            Untuk pertanyaan dan informasi lebih lanjut mengenai PPDB, silakan hubungi atau kunjungi langsung kantor panitia PPDB kami.
          </p>
          <a
            href="/kontak"
            className="inline-flex items-center gap-2 bg-white text-[#F9A825] hover:bg-yellow-50 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Hubungi Kami
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </Layout>
  );
}
