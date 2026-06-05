import Link from "next/link";
import { CheckCircle2, Home, Phone } from "lucide-react";
import SectionBg from "@/components/SectionBg";
import { sectionImages } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export default function DonePage() {
  return (
    <SectionBg
      image={sectionImages.apply}
      overlay="bg-black/50"
      minHeight="min-h-screen"
    >
      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md rounded-3xl border border-white/25 bg-white/95 p-8 text-center shadow-2xl sm:p-10">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600 text-white shadow-lg">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">문의가 접수되었습니다</h1>
          <p className="mt-4 leading-7 text-slate-600">
            가능 여부와 예상 요금을 빠르게 안내드리겠습니다.
            <br />
            급하신 경우 아래 번호로 전화해 주세요.
          </p>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-violet-100 px-5 py-3 font-bold text-violet-700"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-sky-600 px-6 py-3 font-bold text-white shadow-lg"
          >
            <Home className="h-4 w-4" />
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    </SectionBg>
  );
}
