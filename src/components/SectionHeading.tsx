type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-12 max-w-2xl ${alignClass}`}>
      <span
        className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold tracking-wide ${
          dark
            ? "bg-white/15 text-white"
            : "bg-teal-100 text-teal-700"
        }`}
      >
        {label}
      </span>
      <h2
        className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            dark ? "text-white/80" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
