import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.name} | 포항 청년 잔심부름 대행`,
  description: `${siteConfig.name}. 장보기, 택배, 서류, 대기 등 잔심부름을 빠르고 믿을 수 있게 도와드립니다. 기본 ${siteConfig.basePrice}원~`,
  keywords: ["포항 청년 잔심부름", "포항 잔심부름", "포항 청년 잔심부름센터", "심부름 대행", "포항"],
  openGraph: {
    title: `${siteConfig.name} | 포항 청년 잔심부름`,
    description: siteConfig.tagline,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSans.variable} h-full`}>
      <body className="min-h-full bg-cream font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
