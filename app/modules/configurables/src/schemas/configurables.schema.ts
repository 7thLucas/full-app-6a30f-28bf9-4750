/* START: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */
export interface FieldSchemaType {
  fieldName?: string;
  type:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"
    | "color"
    | "url"
    | "enum"
    | "datetime"
    | "file"
    | "files";
  required?: boolean;
  label?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  options?: string[];
  fields?: FieldSchemaType[];
  item?: FieldSchemaType;
}
/* END: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */

export type ConfigurableSchemas = {
  formSchema: FieldSchemaType[];
};



export const configurableSchemas: ConfigurableSchemas = {
  formSchema: [
    {
      fieldName: "appName",
      type: "string",
      required: true,
      label: "Nama Sekolah",
    },
    {
      fieldName: "logoUrl",
      type: "url",
      required: true,
      label: "Logo URL",
    },
    {
      fieldName: "brandColor",
      type: "object",
      required: true,
      label: "Warna Brand",
      fields: [
        {
          fieldName: "primary",
          type: "color",
          required: true,
          label: "Warna Utama (Hijau)",
        },
        {
          fieldName: "secondary",
          type: "color",
          required: true,
          label: "Warna Sekunder (Biru Tua)",
        },
        {
          fieldName: "accent",
          type: "color",
          required: true,
          label: "Warna Aksen (Emas)",
        },
      ],
    },
    {
      fieldName: "schoolTagline",
      type: "string",
      required: false,
      label: "Tagline Sekolah",
    },
    {
      fieldName: "schoolDescription",
      type: "string",
      required: false,
      label: "Deskripsi Singkat Sekolah",
    },
    {
      fieldName: "heroImage",
      type: "file",
      required: false,
      label: "Foto Hero (Banner Utama)",
    },
    {
      fieldName: "schoolAddress",
      type: "string",
      required: false,
      label: "Alamat Sekolah",
    },
    {
      fieldName: "schoolPhone",
      type: "string",
      required: false,
      label: "Nomor Telepon",
    },
    {
      fieldName: "schoolEmail",
      type: "string",
      required: false,
      label: "Email Sekolah",
    },
    {
      fieldName: "googleMapsEmbed",
      type: "url",
      required: false,
      label: "URL Google Maps Embed",
    },
    {
      fieldName: "accreditationStatus",
      type: "string",
      required: false,
      label: "Status Akreditasi",
    },
    {
      fieldName: "accreditationYear",
      type: "string",
      required: false,
      label: "Tahun Akreditasi",
    },
    {
      fieldName: "npsn",
      type: "string",
      required: false,
      label: "NPSN",
    },
    {
      fieldName: "foundedYear",
      type: "string",
      required: false,
      label: "Tahun Berdiri",
    },
    {
      fieldName: "socialMedia",
      type: "object",
      required: false,
      label: "Media Sosial",
      fields: [
        {
          fieldName: "facebook",
          type: "url",
          required: false,
          label: "Facebook",
        },
        {
          fieldName: "instagram",
          type: "url",
          required: false,
          label: "Instagram",
        },
        {
          fieldName: "youtube",
          type: "url",
          required: false,
          label: "YouTube",
        },
      ],
    },
    {
      fieldName: "schoolVision",
      type: "string",
      required: false,
      label: "Visi Sekolah",
    },
    {
      fieldName: "schoolMissions",
      type: "array",
      required: false,
      label: "Misi Sekolah",
      item: {
        type: "string",
        required: true,
      },
    },
    {
      fieldName: "schoolHistory",
      type: "string",
      required: false,
      label: "Sejarah Sekolah",
    },
    {
      fieldName: "ppdbRequirements",
      type: "array",
      required: false,
      label: "Persyaratan PPDB",
      item: {
        type: "string",
        required: true,
      },
    },
    {
      fieldName: "ppdbSchedule",
      type: "array",
      required: false,
      label: "Jadwal PPDB",
      item: {
        type: "object",
        fields: [
          { fieldName: "kegiatan", type: "string", required: true, label: "Kegiatan" },
          { fieldName: "tanggal", type: "string", required: true, label: "Tanggal" },
          { fieldName: "keterangan", type: "string", required: false, label: "Keterangan" },
        ],
      },
    },
    {
      fieldName: "ppdbProcedure",
      type: "array",
      required: false,
      label: "Prosedur Pendaftaran PPDB",
      item: {
        type: "string",
        required: true,
      },
    },
    {
      fieldName: "extracurriculars",
      type: "array",
      required: false,
      label: "Kegiatan Ekstrakurikuler",
      item: {
        type: "object",
        fields: [
          { fieldName: "nama", type: "string", required: true, label: "Nama Ekstrakurikuler" },
          { fieldName: "deskripsi", type: "string", required: false, label: "Deskripsi" },
          { fieldName: "icon", type: "string", required: false, label: "Icon (emoji)" },
        ],
      },
    },
    {
      fieldName: "galleryImages",
      type: "files",
      required: false,
      label: "Foto Galeri",
    },
    {
      fieldName: "achievements",
      type: "array",
      required: false,
      label: "Prestasi Siswa",
      item: {
        type: "object",
        fields: [
          { fieldName: "judul", type: "string", required: true, label: "Judul Prestasi" },
          { fieldName: "siswa", type: "string", required: false, label: "Nama Siswa" },
          { fieldName: "tahun", type: "string", required: false, label: "Tahun" },
          { fieldName: "kategori", type: "string", required: false, label: "Kategori" },
          { fieldName: "tingkat", type: "string", required: false, label: "Tingkat (Lokal/Nasional/Internasional)" },
        ],
      },
    },
    {
      fieldName: "staffMembers",
      type: "array",
      required: false,
      label: "Guru & Staff",
      item: {
        type: "object",
        fields: [
          { fieldName: "nama", type: "string", required: true, label: "Nama" },
          { fieldName: "jabatan", type: "string", required: true, label: "Jabatan / Mata Pelajaran" },
          { fieldName: "foto", type: "url", required: false, label: "URL Foto" },
          { fieldName: "nip", type: "string", required: false, label: "NIP" },
        ],
      },
    },
    {
      fieldName: "announcements",
      type: "array",
      required: false,
      label: "Pengumuman",
      item: {
        type: "object",
        fields: [
          { fieldName: "judul", type: "string", required: true, label: "Judul" },
          { fieldName: "tanggal", type: "string", required: true, label: "Tanggal" },
          { fieldName: "isi", type: "string", required: true, label: "Isi Pengumuman" },
          { fieldName: "kategori", type: "string", required: false, label: "Kategori" },
          { fieldName: "penting", type: "boolean", required: false, label: "Pengumuman Penting?" },
        ],
      },
    },
    {
      fieldName: "showPPDB",
      type: "boolean",
      required: false,
      label: "Tampilkan Halaman PPDB",
    },
    {
      fieldName: "ppdbIsOpen",
      type: "boolean",
      required: false,
      label: "PPDB Sedang Dibuka",
    },
    {
      fieldName: "curriculum",
      type: "string",
      required: false,
      label: "Informasi Kurikulum",
    },
    {
      fieldName: "organizationStructureImage",
      type: "file",
      required: false,
      label: "Foto Struktur Organisasi",
    },
    {
      fieldName: "footerText",
      type: "string",
      required: false,
      label: "Teks Footer",
    },
  ],
};
