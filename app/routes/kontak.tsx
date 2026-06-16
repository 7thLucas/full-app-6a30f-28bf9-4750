import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";
import { useConfigurables } from "~/modules/configurables";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

export default function KontakPage() {
  const { config, loading } = useConfigurables();

  const address = loading ? "" : (config?.schoolAddress || "");
  const phone = loading ? "" : (config?.schoolPhone || "");
  const email = loading ? "" : (config?.schoolEmail || "");
  const mapsEmbed = loading ? "" : (config?.googleMapsEmbed || "");
  const social = loading ? {} : (config?.socialMedia || {});
  const appName = loading ? "SMP Muhammadiyah 2 Surakarta" : (config?.appName || "SMP Muhammadiyah 2 Surakarta");

  return (
    <Layout>
      <PageHeader
        title="Kontak Kami"
        subtitle="Kami siap membantu pertanyaan dan kebutuhan Anda"
        breadcrumbs={[{ label: "Kontak" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-5">
            {/* Address */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-[#1A237E] mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                <MapPin size={16} className="text-[#2E7D32]" />
                Lokasi
              </h3>
              {address ? (
                <p className="text-gray-600 text-sm leading-relaxed">{address}</p>
              ) : (
                <p className="text-gray-400 text-sm italic">Alamat belum diisi.</p>
              )}
            </div>

            {/* Phone & Email */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
              <h3 className="font-bold text-[#1A237E] mb-2 text-sm uppercase tracking-wide">
                Hubungi Kami
              </h3>
              {phone && (
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
                    <Phone size={16} className="text-[#2E7D32]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Telepon</div>
                    <a href={`tel:${phone}`} className="text-sm font-medium text-gray-800 hover:text-[#2E7D32] transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>
              )}
              {email && (
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                    <Mail size={16} className="text-[#1A237E]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Email</div>
                    <a href={`mailto:${email}`} className="text-sm font-medium text-gray-800 hover:text-[#1A237E] transition-colors break-all">
                      {email}
                    </a>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-yellow-50 flex items-center justify-center">
                  <Clock size={16} className="text-[#F9A825]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Jam Operasional</div>
                  <div className="text-sm font-medium text-gray-800">Sen–Jum: 07.00–15.00 WIB</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            {(social.facebook || social.instagram || social.youtube) && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-[#1A237E] mb-4 text-sm uppercase tracking-wide">
                  Media Sosial
                </h3>
                <div className="space-y-3">
                  {social.facebook && (
                    <a
                      href={social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-[#1A237E] transition-colors"
                    >
                      <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                        <Facebook size={16} className="text-blue-600" />
                      </div>
                      <span className="text-sm">Facebook</span>
                    </a>
                  )}
                  {social.instagram && (
                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-[#1A237E] transition-colors"
                    >
                      <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center">
                        <Instagram size={16} className="text-pink-600" />
                      </div>
                      <span className="text-sm">Instagram</span>
                    </a>
                  )}
                  {social.youtube && (
                    <a
                      href={social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-[#1A237E] transition-colors"
                    >
                      <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
                        <Youtube size={16} className="text-red-600" />
                      </div>
                      <span className="text-sm">YouTube</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Map + message */}
          <div className="lg:col-span-2 space-y-6">
            {/* Google Maps */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100 flex items-center gap-2">
                <MapPin size={18} className="text-[#2E7D32]" />
                <h3 className="font-bold text-[#1A237E]">Lokasi di Peta</h3>
              </div>
              {mapsEmbed && !mapsEmbed.startsWith("FILL_") ? (
                <div className="relative h-72 sm:h-96">
                  <iframe
                    src={mapsEmbed}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Lokasi ${appName}`}
                  />
                </div>
              ) : (
                <div className="h-72 flex flex-col items-center justify-center text-gray-400 bg-gray-50">
                  <MapPin size={48} className="mb-3 text-gray-300" />
                  <p className="text-sm">Peta belum dikonfigurasi.</p>
                  <p className="text-xs text-gray-400 mt-1">Masukkan URL embed Google Maps di pengaturan.</p>
                </div>
              )}
            </div>

            {/* Quick message card */}
            <div className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Butuh Bantuan?</h3>
                  <p className="text-green-100 text-xs">Kami siap menjawab pertanyaan Anda</p>
                </div>
              </div>
              <p className="text-green-100 text-sm mb-4 leading-relaxed">
                Untuk informasi lebih lanjut mengenai sekolah, PPDB, atau hal lainnya, silakan hubungi kami melalui telepon, email, atau datang langsung ke sekolah.
              </p>
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-2 bg-white text-[#2E7D32] hover:bg-green-50 px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                >
                  <Phone size={16} />
                  Hubungi {phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
