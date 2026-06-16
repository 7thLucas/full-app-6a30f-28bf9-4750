interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1A237E]">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div
        className={`mt-3 h-1 w-14 rounded bg-[#F9A825] ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
