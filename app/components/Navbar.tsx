import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { useConfigurables } from "~/modules/configurables";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    href: "/profil",
    children: [
      { label: "Sejarah", href: "/profil/sejarah" },
      { label: "Visi & Misi", href: "/profil/visi-misi" },
      { label: "Akreditasi", href: "/profil/akreditasi" },
      { label: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
    ],
  },
  { label: "PPDB", href: "/ppdb" },
  { label: "Pengumuman", href: "/pengumuman" },
  {
    label: "Akademik",
    href: "/akademik",
    children: [
      { label: "Kurikulum", href: "/akademik/kurikulum" },
      { label: "Kalender Akademik", href: "/akademik/kalender" },
      { label: "Ekstrakurikuler", href: "/akademik/ekstrakurikuler" },
    ],
  },
  { label: "Prestasi", href: "/prestasi" },
  { label: "Galeri", href: "/galeri" },
  { label: "Guru & Staff", href: "/guru-staff" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const { config, loading } = useConfigurables();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const appName = loading ? "SMPM2 Solo" : (config?.appName || "SMP Muhammadiyah 2 Surakarta");
  const logoUrl = loading ? "" : config?.logoUrl || "";

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[#1A237E] text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-end gap-6">
          {!loading && config?.schoolPhone && (
            <a href={`tel:${config.schoolPhone}`} className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
              <Phone size={12} />
              <span>{config.schoolPhone}</span>
            </a>
          )}
          {!loading && config?.schoolEmail && (
            <a href={`mailto:${config.schoolEmail}`} className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
              <Mail size={12} />
              <span>{config.schoolEmail}</span>
            </a>
          )}
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Name */}
            <Link to="/" className="flex items-center gap-3 min-w-0">
              {logoUrl && !logoUrl.startsWith("FILL_") ? (
                <img
                  src={logoUrl}
                  alt="Logo"
                  className="h-10 w-10 object-contain flex-shrink-0"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-[#2E7D32] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">M2</span>
                </div>
              )}
              <div className="min-w-0">
                <div className="font-bold text-[#2E7D32] text-sm leading-tight line-clamp-1">
                  {appName}
                </div>
                <div className="text-[10px] text-[#1A237E] font-medium leading-tight hidden sm:block">
                  Surakarta
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  {link.children ? (
                    <>
                      <button
                        className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                          location.pathname.startsWith(link.href)
                            ? "text-[#2E7D32] bg-green-50"
                            : "text-gray-700 hover:text-[#2E7D32] hover:bg-green-50"
                        }`}
                      >
                        {link.label}
                        <ChevronDown size={14} />
                      </button>
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`block px-4 py-2.5 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg ${
                              location.pathname === child.href
                                ? "text-[#2E7D32] bg-green-50 font-medium"
                                : "text-gray-700 hover:text-[#2E7D32] hover:bg-green-50"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                        location.pathname === link.href
                          ? "text-[#2E7D32] bg-green-50"
                          : "text-gray-700 hover:text-[#2E7D32] hover:bg-green-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.href ? null : link.href)
                        }
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          location.pathname.startsWith(link.href)
                            ? "text-[#2E7D32] bg-green-50"
                            : "text-gray-700"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            openDropdown === link.href ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === link.href && (
                        <div className="ml-4 mt-1 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                                location.pathname === child.href
                                  ? "text-[#2E7D32] bg-green-50 font-medium"
                                  : "text-gray-600 hover:text-[#2E7D32] hover:bg-green-50"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === link.href
                          ? "text-[#2E7D32] bg-green-50"
                          : "text-gray-700 hover:text-[#2E7D32] hover:bg-green-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              {/* Mobile contact info */}
              {!loading && config?.schoolPhone && (
                <a
                  href={`tel:${config.schoolPhone}`}
                  className="flex items-center gap-2 px-3 py-2.5 text-sm text-[#1A237E] font-medium"
                >
                  <Phone size={14} />
                  {config.schoolPhone}
                </a>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
