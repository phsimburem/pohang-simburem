import { ReactNode } from "react";

type SectionBgProps = {
  id?: string;
  image: string;
  overlay: string;
  children: ReactNode;
  className?: string;
  minHeight?: string;
};

export default function SectionBg({
  id,
  image,
  overlay,
  children,
  className = "",
  minHeight = "min-h-0",
}: SectionBgProps) {
  return (
    <section
      id={id}
      className={`relative bg-cover bg-center bg-no-repeat ${minHeight} ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
