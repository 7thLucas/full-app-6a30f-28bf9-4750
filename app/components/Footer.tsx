import { Link } from "react-router";
import { useConfigurables } from "~/modules/configurables";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const { config, loading } = useConfigurables();

  if (loading) return null;

  const appName = config?.appName || "SMP Muhammadiyah 2 Surakarta";
  const footerText = config?.footerText || "";
  const address = config?.schoolAddress || "";
  const phone = config?.schoolPhone || "";
  const email = config?.schoolEmail || "";
  const social = config?.socialMedia || {};
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A237E] text-white">
      {/* Islamic geometric top border */}
      <div className="h-1.5 bg-gradient-to-r from-[#2E7D32] via-[#F9A825] to-[#2E7D32]" />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-[#2E7D32] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">M2</span>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">{appName}</div>
                <div className="text-blue-200 text-xs">{config?.schoolTagline || ""}</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4 max-w-sm">
              {footerText || `${appName} — Sekolah Menengah Pertama berbasis Islam di bawah naungan Persyarikatan Muhammadiyah.`}
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F9A825] flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F9A825] flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              )}
              {social.youtube && (
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F9A825] flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[#F9A825] mb-4 text-sm uppercase tracking-wide">
              Tautan Cepat
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Beranda", href: "/" },
                { label: "Profil Sekolah", href: "/profil/sejarah" },
                { label: "PPDB", href: "/ppdb" },
                { label: "Pengumuman", href: "/pengumuman" },
                { label: "Akademik", href: "/akademik/kurikulum" },
                { label: "Prestasi", href: "/prestasi" },
                { label: "Galeri", href: "/galeri" },
                { label: "Kontak", href: "/kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-blue-200 hover:text-[#F9A825] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-[#F9A825] mb-4 text-sm uppercase tracking-wide">
              Kontak Kami
            </h3>
            <ul className="space-y-3">
              {address && (
                <li className="flex gap-2.5 text-blue-200 text-sm">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5 text-[#F9A825]" />
                  <span className="leading-relaxed">{address}</span>
                </li>
              )}
              {phone && (
                <li>
                  <a
                    href={`tel:${phone}`}
                    className="flex gap-2.5 text-blue-200 hover:text-[#F9A825] text-sm transition-colors"
                  >
                    <Phone size={16} className="flex-shrink-0 mt-0.5 text-[#F9A825]" />
                    <span>{phone}</span>
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="flex gap-2.5 text-blue-200 hover:text-[#F9A825] text-sm transition-colors"
                  >
                    <Mail size={16} className="flex-shrink-0 mt-0.5 text-[#F9A825]" />
                    <span>{email}</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-blue-300 text-xs text-center">
            &copy; {currentYear} {appName}. Hak Cipta Dilindungi.
          </p>
          <p className="text-blue-400 text-xs">
            Persyarikatan Muhammadiyah
          </p>
        </div>
      </div>
    </footer>
  );
}
