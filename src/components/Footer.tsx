import { MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-slate-900 px-4 py-14 text-slate-300">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-2xl font-bold text-white">{siteConfig.name}</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400">
          포항 청년 잔심부름 전문. 빠른 연락, 정확한 진행.
        </p>
        <div className="mt-5 flex flex-col items-center gap-2 text-sm">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-teal-400" />
            서비스 지역: {siteConfig.area}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-teal-400" />
            {siteConfig.phone}
          </p>
        </div>
        <div className="mt-8 text-sm text-slate-500">
          <a href="/admin" className="transition hover:text-white">관리자</a>
          <p className="mt-4 text-xs">© {new Date().getFullYear()} {siteConfig.name}</p>
        </div>
      </div>
    </footer>
  );
}
