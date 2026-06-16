import { Link, useParams } from "react-router";
import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";
import { useConfigurables } from "~/modules/configurables";
import { Bell, AlertCircle, ArrowLeft, Calendar, Tag } from "lucide-react";

export default function PengumumanDetailPage() {
  const { id } = useParams();
  const { config, loading } = useConfigurables();

  const announcements = loading ? [] : (config?.announcements || []);
  const sorted = [...announcements].sort(
    (a, b) => new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime()
  );

  const index = parseInt(id || "0", 10);
  const ann = sorted[index];

  function formatDate(dateStr: string) {
    try {
      return new Date(dateStr).toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  }

  if (!loading && !ann) {
    return (
      <Layout>
        <PageHeader
          title="Pengumuman"
          breadcrumbs={[{ label: "Pengumuman", href: "/pengumuman" }, { label: "Tidak Ditemukan" }]}
        />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <Bell size={64} className="mx-auto mb-4 text-gray-300" />
          <h2 className="text-xl font-bold text-gray-500">Pengumuman tidak ditemukan</h2>
          <Link to="/pengumuman" className="mt-4 inline-block text-[#2E7D32] hover:underline text-sm">
            Kembali ke daftar pengumuman
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        title="Pengumuman"
        breadcrumbs={[{ label: "Pengumuman", href: "/pengumuman" }, { label: ann?.judul || "..." }]}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link
          to="/pengumuman"
          className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-[#1B5E20] text-sm font-medium mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          Kembali ke Pengumuman
        </Link>

        {loading ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 animate-pulse">
            <div className="h-6 bg-gray-200 rounded mb-4 w-3/4" />
            <div className="h-4 bg-gray-200 rounded mb-8 w-1/2" />
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
              <div className="h-4 bg-gray-200 rounded w-4/6" />
            </div>
          </div>
        ) : ann ? (
          <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1A237E] to-[#283593] p-6 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {ann.penting && (
                  <div className="flex items-center gap-1 bg-[#F9A825] text-white text-xs font-bold px-2 py-0.5 rounded">
                    <AlertCircle size={10} />
                    Penting
                  </div>
                )}
                {ann.kategori && (
                  <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded">
                    {ann.kategori}
                  </span>
                )}
              </div>
              <h1 className="text-xl sm:text-2xl font-bold leading-snug">{ann.judul}</h1>
              <div className="flex items-center gap-4 mt-3 text-blue-200 text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {formatDate(ann.tanggal)}
                </span>
                {ann.kategori && (
                  <span className="flex items-center gap-1.5">
                    <Tag size={14} />
                    {ann.kategori}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="prose prose-sm max-w-none text-gray-700">
                {ann.isi.split("\n").map((paragraph, i) => (
                  <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  Diterbitkan oleh <strong className="text-gray-600">SMP Muhammadiyah 2 Surakarta</strong>
                </div>
                <Link
                  to="/pengumuman"
                  className="text-[#2E7D32] hover:text-[#1B5E20] text-sm font-medium flex items-center gap-1"
                >
                  <ArrowLeft size={14} />
                  Kembali
                </Link>
              </div>
            </div>
          </article>
        ) : null}
      </div>
    </Layout>
  );
}
