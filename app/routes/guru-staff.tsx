import { useState } from "react";
import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";
import SectionHeader from "~/components/SectionHeader";
import { useConfigurables } from "~/modules/configurables";
import { Users, User, Search } from "lucide-react";

export default function GuruStaffPage() {
  const { config, loading } = useConfigurables();
  const [search, setSearch] = useState("");

  const staffMembers = loading ? [] : (config?.staffMembers || []);

  const leadership = staffMembers.filter((s) =>
    s.jabatan.toLowerCase().includes("kepala") ||
    s.jabatan.toLowerCase().includes("wakil kepala") ||
    s.jabatan.toLowerCase().includes("wakasek")
  );

  const teachers = staffMembers.filter((s) =>
    s.jabatan.toLowerCase().includes("guru")
  );

  const others = staffMembers.filter((s) =>
    !s.jabatan.toLowerCase().includes("kepala") &&
    !s.jabatan.toLowerCase().includes("guru")
  );

  const filtered = staffMembers.filter((s) =>
    s.nama.toLowerCase().includes(search.toLowerCase()) ||
    s.jabatan.toLowerCase().includes(search.toLowerCase())
  );

  function StaffCard({ staff }: { staff: typeof staffMembers[0] }) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col items-center text-center hover:shadow-md hover:border-[#2E7D32]/30 transition-all">
        {staff.foto && !staff.foto.startsWith("FILL_") ? (
          <img
            src={staff.foto}
            alt={staff.nama}
            className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-[#2E7D32]/20"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1A237E] to-[#2E7D32] flex items-center justify-center mb-3">
            <span className="text-white text-2xl font-bold">
              {staff.nama.split(" ").map((n: string) => n[0]).slice(0, 2).join("")}
            </span>
          </div>
        )}
        <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-1">{staff.nama}</h3>
        <span className="text-[#2E7D32] text-xs font-medium bg-green-50 px-2 py-0.5 rounded-full">
          {staff.jabatan}
        </span>
        {staff.nip && (
          <span className="text-gray-400 text-xs mt-1">NIP: {staff.nip}</span>
        )}
      </div>
    );
  }

  return (
    <Layout>
      <PageHeader
        title="Guru & Staff"
        subtitle="Tenaga pendidik dan kependidikan yang berdedikasi"
        breadcrumbs={[{ label: "Guru & Staff" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search */}
        <div className="relative max-w-md mb-8">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari nama atau jabatan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32]"
          />
        </div>

        {search ? (
          <div>
            <SectionHeader title={`Hasil Pencarian (${filtered.length})`} centered={false} />
            {filtered.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <User size={48} className="mx-auto mb-3 text-gray-300" />
                <p>Tidak ditemukan staff dengan nama atau jabatan tersebut.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filtered.map((staff, i) => (
                  <StaffCard key={i} staff={staff} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Leadership */}
            {leadership.length > 0 && (
              <div className="mb-10">
                <SectionHeader title="Pimpinan Sekolah" centered={false} />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {leadership.map((staff, i) => (
                    <StaffCard key={i} staff={staff} />
                  ))}
                </div>
              </div>
            )}

            {/* Teachers */}
            {teachers.length > 0 && (
              <div className="mb-10">
                <SectionHeader title="Dewan Guru" centered={false} />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {teachers.map((staff, i) => (
                    <StaffCard key={i} staff={staff} />
                  ))}
                </div>
              </div>
            )}

            {/* Others (TU, staff, etc.) */}
            {others.length > 0 && (
              <div className="mb-10">
                <SectionHeader title="Tenaga Kependidikan" centered={false} />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {others.map((staff, i) => (
                    <StaffCard key={i} staff={staff} />
                  ))}
                </div>
              </div>
            )}

            {staffMembers.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                <Users size={64} className="mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-semibold text-gray-500">Data belum tersedia</h3>
                <p className="text-gray-400 text-sm mt-1">Data guru dan staff belum diisi.</p>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
}
