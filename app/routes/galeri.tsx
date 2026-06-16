import { useState } from "react";
import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";
import { useConfigurables } from "~/modules/configurables";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GaleriPage() {
  const { config, loading } = useConfigurables();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = loading ? [] : (config?.galleryImages || []);

  function openLightbox(i: number) {
    setLightboxIndex(i);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function prevImage() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  }

  function nextImage() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  }

  return (
    <Layout>
      <PageHeader
        title="Galeri Foto"
        subtitle="Momen berharga kegiatan sekolah kami"
        breadcrumbs={[{ label: "Galeri" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-gray-100">
            <ImageIcon size={64} className="mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-semibold text-gray-500">Galeri Kosong</h3>
            <p className="text-gray-400 text-sm mt-2 max-w-sm mx-auto">
              Belum ada foto yang diunggah. Foto kegiatan sekolah akan segera hadir.
            </p>
          </div>
        ) : (
          <>
            <p className="text-gray-500 text-sm mb-6">{images.length} foto</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <img
                    src={img}
                    alt={`Galeri ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ImageIcon
                      size={24}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && images[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <img
            src={images[lightboxIndex]}
            alt={`Galeri ${lightboxIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </Layout>
  );
}
