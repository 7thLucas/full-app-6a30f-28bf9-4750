import { useRef, useState } from "react";
import { Upload, X, Loader2 } from "lucide-react";

interface ImageUploaderProps {
  onUpload: (url: string) => void;
  className?: string;
  label?: string;
}

export default function ImageUploader({ onUpload, className = "", label = "Unggah Foto" }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setError(null);
    setUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/uploader/image", {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      if (data.success && data.data?.url) {
        onUpload(data.data.url);
      } else {
        setError(data.message || "Upload gagal.");
      }
    } catch (e) {
      setError("Terjadi kesalahan saat mengunggah.");
    } finally {
      setUploading(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) handleFile(file);
  }

  return (
    <div className={className}>
      <div
        className="border-2 border-dashed border-gray-300 hover:border-[#2E7D32] rounded-xl p-6 text-center cursor-pointer transition-colors"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {uploading ? (
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <Loader2 size={32} className="animate-spin text-[#2E7D32]" />
            <span className="text-sm">Mengunggah...</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <Upload size={32} />
            <span className="text-sm font-medium text-gray-600">{label}</span>
            <span className="text-xs">Klik atau seret file ke sini</span>
            <span className="text-xs">JPG, PNG, WEBP maks 20MB</span>
          </div>
        )}
      </div>
      {error && (
        <div className="mt-2 flex items-center gap-2 text-red-500 text-sm">
          <X size={14} />
          {error}
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
}
