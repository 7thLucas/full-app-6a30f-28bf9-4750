import { Link } from "react-router";
import Layout from "~/components/Layout";
import SectionHeader from "~/components/SectionHeader";
import { useConfigurables } from "~/modules/configurables";
import {
  BookOpen,
  Award,
  Users,
  Bell,
  Image,
  Phone,
  ChevronRight,
  Star,
  Calendar,
  GraduationCap,
  AlertCircle,
} from "lucide-react";

function AnnouncementCard({
  judul,
  tanggal,
  isi,
  kategori,
  penting,
}: {
  judul: string;
  tanggal: string;
  isi: string;
  kategori?: string;
  penting?: boolean;
}) {
  const date = new Date(tanggal);
  const day = date.getDate();
  const month = date.toLocaleDateString("id-ID", { month: "short" });
  const year = date.getFullYear();

  return (
    <div className={`bg-white rounded-xl shadow-sm border ${penting ? "border-[#F9A825]" : "border-gray-100"} p-5 flex gap-4 hover:shadow-md transition-shadow`}>
      {/* Date badge */}
      <div className="flex-shrink-0 w-14 h-16 bg-[#1A237E] rounded-lg flex flex-col items-center justify-center text-white">
        <span className="text-xl font-bold leading-none">{day}</span>
        <span className="text-xs uppercase">{month}</span>
        <span className="text-xs opacity-70">{year}</span>
      </div>
      <div className="min-w-0">
        {penting && (
          <div className="flex items-center gap-1 mb-1">
            <AlertCircle size={12} className="text-[#F9A825]" />
            <span className="text-xs text-[#F9A825] font-medium">Penting</span>
          </div>
        )}
        {kategori && (
          <span className="inline-block text-xs font-medium text-[#2E7D32] bg-green-50 px-2 py-0.5 rounded mb-1">
            {kategori}
          </span>
        )}
        <h3 className="font-semibold text-gray-800 text-sm leading-snug line-clamp-2 mb-1">
          {judul}
        </h3>
        <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">{isi}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const { config, loading } = useConfigurables();

  const appName = loading ? "SMP Muhammadiyah 2 Surakarta" : (config?.appName || "SMP Muhammadiyah 2 Surakarta");
  const tagline = loading ? "" : (config?.schoolTagline || "Unggul dalam Prestasi, Islami dalam Perilaku");
  const description = loading ? "" : (config?.schoolDescription || "");
  const heroImage = loading ? "" : (config?.heroImage || "");
  const announcements = loading ? [] : (config?.announcements || []);
  const achievements = loading ? [] : (config?.achievements || []);
  const extracurriculars = loading ? [] : (config?.extracurriculars || []);
  const ppdbOpen = !loading && config?.ppdbIsOpen;
  const showPPDB = !loading && config?.showPPDB !== false;

  const latestAnnouncements = [...announcements]
    .sort((a, b) => new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime())
    .slice(0, 4);

  const quickLinks = [
    { icon: BookOpen, label: "Profil Sekolah", href: "/profil/sejarah", color: "bg-blue-50 text-blue-700" },
    { icon: GraduationCap, label: "PPDB", href: "/ppdb", color: "bg-green-50 text-green-700" },
    { icon: Bell, label: "Pengumuman", href: "/pengumuman", color: "bg-yellow-50 text-yellow-700" },
    { icon: Award, label: "Prestasi", href: "/prestasi", color: "bg-purple-50 text-purple-700" },
    { icon: Image, label: "Galeri", href: "/galeri", color: "bg-pink-50 text-pink-700" },
    { icon: Users, label: "Guru & Staff", href: "/guru-staff", color: "bg-indigo-50 text-indigo-700" },
    { icon: Calendar, label: "Akademik", href: "/akademik/kurikulum", color: "bg-orange-50 text-orange-700" },
    { icon: Phone, label: "Kontak", href: "/kontak", color: "bg-teal-50 text-teal-700" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        {heroImage && !heroImage.startsWith("FILL_") ? (
          <img
            src={heroImage}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] via-[#2E7D32] to-[#1A237E]" />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Islamic geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F9A825' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31.5v4H0v-4zm20 0h20v4H20v-4zM0 56h40v4H0v-4zm63.5 14h20v4h-20v-4zm0-8h20v4h-20v-4zm0-8h20v4h-20v-4zm0-8h20v4h-20v-4z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Bismillah */}
          <p className="text-[#F9A825] text-lg mb-3 font-arabic opacity-90">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {appName}
          </h1>
          {tagline && (
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 font-medium">
              {tagline}
            </p>
          )}
          {description && (
            <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/profil/sejarah"
              className="inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Tentang Kami
              <ChevronRight size={18} />
            </Link>
            {showPPDB && (
              <Link
                to="/ppdb"
                className="inline-flex items-center gap-2 bg-[#F9A825] hover:bg-[#F57F17] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Info PPDB
                {ppdbOpen && <span className="bg-white text-[#F9A825] text-xs px-2 py-0.5 rounded-full font-bold">BUKA</span>}
              </Link>
            )}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 28C840 36 960 40 1080 38C1200 36 1320 28 1380 24L1440 20V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#F5F5F5"/>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white shadow-sm -mt-1">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: "Tahun Berdiri", value: config?.foundedYear || "1952" },
              { label: "Akreditasi", value: config?.accreditationStatus || "A" },
              { label: "Pengajar", value: `${(config?.staffMembers || []).length || "20"}+` },
              { label: "Ekstrakurikuler", value: `${(extracurriculars).length || "10"}+` },
            ].map((stat) => (
              <div key={stat.label} className="py-2">
                <div className="text-2xl sm:text-3xl font-bold text-[#2E7D32]">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <SectionHeader title="Menu Utama" subtitle="Temukan informasi yang Anda butuhkan" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickLinks.map((ql) => (
            <Link
              key={ql.href}
              to={ql.href}
              className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#2E7D32]/30 transition-all flex flex-col items-center text-center gap-3"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${ql.color} group-hover:scale-110 transition-transform`}>
                <ql.icon size={22} />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-[#2E7D32]">
                {ql.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PPDB Banner */}
      {showPPDB && (
        <section className="max-w-7xl mx-auto px-4 pb-4">
          <div className={`rounded-2xl overflow-hidden ${ppdbOpen ? "bg-gradient-to-r from-[#2E7D32] to-[#388E3C]" : "bg-gradient-to-r from-[#1A237E] to-[#283593]"} text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4`}>
            <div>
              <div className="flex items-center gap-2 mb-1">
                {ppdbOpen ? (
                  <span className="bg-[#F9A825] text-white text-xs font-bold px-2 py-0.5 rounded">DIBUKA</span>
                ) : (
                  <span className="bg-white/20 text-white text-xs font-medium px-2 py-0.5 rounded">INFO</span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-1">
                Penerimaan Peserta Didik Baru (PPDB)
              </h2>
              <p className="text-white/80 text-sm">
                {ppdbOpen
                  ? "PPDB sedang dibuka. Segera daftarkan putra-putri Anda!"
                  : "Informasi lengkap mengenai persyaratan dan prosedur pendaftaran."}
              </p>
            </div>
            <Link
              to="/ppdb"
              className="flex-shrink-0 bg-[#F9A825] hover:bg-[#F57F17] text-white px-6 py-3 rounded-lg font-semibold transition-colors text-sm whitespace-nowrap inline-flex items-center gap-2"
            >
              Lihat Info PPDB
              <ChevronRight size={16} />
            </Link>
          </div>
        </section>
      )}

      {/* Latest Announcements */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader title="Pengumuman Terbaru" centered={false} />
          <Link
            to="/pengumuman"
            className="text-[#2E7D32] hover:text-[#1B5E20] text-sm font-medium flex items-center gap-1 flex-shrink-0"
          >
            Semua Pengumuman
            <ChevronRight size={16} />
          </Link>
        </div>
        {latestAnnouncements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {latestAnnouncements.map((ann, i) => (
              <AnnouncementCard key={i} {...ann} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12 bg-white rounded-xl border border-gray-100">
            <Bell size={48} className="mx-auto mb-3 text-gray-300" />
            <p>Belum ada pengumuman.</p>
          </div>
        )}
      </section>

      {/* Achievements Preview */}
      {achievements.length > 0 && (
        <section className="bg-[#1A237E] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Prestasi Siswa</h2>
              <p className="text-blue-200 text-sm mt-2">Kebanggaan kami, harapan bangsa</p>
              <div className="mt-3 h-1 w-14 rounded bg-[#F9A825] mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {achievements.slice(0, 3).map((ach, i) => (
                <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F9A825] flex items-center justify-center flex-shrink-0">
                      <Star size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm leading-snug mb-1">
                        {ach.judul}
                      </h3>
                      {ach.siswa && (
                        <p className="text-blue-200 text-xs">{ach.siswa}</p>
                      )}
                      <div className="flex gap-2 mt-2">
                        {ach.tahun && (
                          <span className="text-xs bg-white/10 text-blue-100 px-2 py-0.5 rounded">
                            {ach.tahun}
                          </span>
                        )}
                        {ach.tingkat && (
                          <span className="text-xs bg-[#F9A825]/20 text-[#F9A825] px-2 py-0.5 rounded">
                            {ach.tingkat}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/prestasi"
                className="inline-flex items-center gap-2 bg-[#F9A825] hover:bg-[#F57F17] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Lihat Semua Prestasi
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Extracurriculars Preview */}
      {extracurriculars.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <SectionHeader
            title="Kegiatan Ekstrakurikuler"
            subtitle="Pengembangan bakat dan minat siswa di luar akademik"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
            {extracurriculars.slice(0, 10).map((ekskul, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center hover:border-[#2E7D32]/30 hover:shadow-md transition-all"
              >
                {ekskul.icon && (
                  <div className="text-2xl mb-2">{ekskul.icon}</div>
                )}
                <div className="text-sm font-semibold text-gray-700">{ekskul.nama}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/akademik/ekstrakurikuler"
              className="inline-flex items-center gap-2 border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white px-6 py-2.5 rounded-lg font-semibold transition-colors text-sm"
            >
              Semua Ekstrakurikuler
              <ChevronRight size={16} />
            </Link>
          </div>
        </section>
      )}
    </Layout>
  );
}
