import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Gift,
  Home,
  Mail,
  Car,
  MapPin,
  Navigation,
  Package,
  Phone,
  ShoppingBag,
  Stethoscope,
  User,
  Users,
  Wallet,
  Wrench,
  Share2,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrderForm from "@/components/OrderForm";
import SectionBg from "@/components/SectionBg";
import SectionHeading from "@/components/SectionHeading";
import { sectionImages, serviceImages } from "@/lib/images";
import { siteConfig } from "@/lib/site";

const serviceIcons = [
  ShoppingBag,
  Package,
  Mail,
  Stethoscope,
  Clock3,
  Gift,
  Wrench,
  Home,
  Sparkles,
];

const aboutFeatures = [
  { icon: User, text: "1:1 맞춤 배차" },
  { icon: Phone, text: "신청 후 빠른 상담 안내" },
  { icon: Share2, text: "진행 상황 수시 공유" },
  { icon: Wallet, text: "시작 전 요금 먼저 안내" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${sectionImages.hero}?v=6`}
            alt="아파트 입구에서 장보기를 전달하는 청년 생활 도우미"
            className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/55 to-slate-900/75" />
          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-28 text-center">
            <p className="mb-6 text-lg font-bold text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.9)] sm:text-xl">
              포항 생활심부름 · 장보기 · 물품전달
            </p>
            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-white [text-shadow:0_4px_16px_rgba(0,0,0,0.95)] sm:text-5xl lg:text-6xl">
              부탁하기 애매한 일,
              <br />
              청년이 대신 다녀옵니다
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.9)] sm:text-lg">
              장보기, 물품 전달, 병원·관공서 동행까지
              <br />
              포항에서 필요한 잔심부름을 빠르고 정직하게 도와드립니다
            </p>
            <div className="mt-10 flex w-full max-w-xl flex-col gap-4 sm:max-w-2xl sm:flex-row sm:gap-5">
              <a
                href="#apply"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-teal-500 px-10 py-5 text-lg font-extrabold text-white shadow-2xl shadow-teal-500/50 ring-2 ring-teal-300 transition hover:scale-[1.02] hover:bg-teal-600 sm:flex-1 sm:text-xl"
              >
                심부름 신청하기
                <ArrowRight className="h-6 w-6" />
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-extrabold text-sky-800 shadow-2xl ring-2 ring-white/80 transition hover:scale-[1.02] hover:bg-sky-50 sm:flex-1 sm:text-xl"
              >
                <Phone className="h-6 w-6 text-teal-500" />
                {siteConfig.phone}
              </a>
            </div>

            <div className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {[
                { icon: Clock3, label: "빠른 연락", value: "신청 시 10분 내 연락" },
                { icon: CheckCircle2, label: "기본 요금", value: `${siteConfig.basePrice}원~` },
                { icon: MapPin, label: "서비스 지역", value: "포항 전지역" },
                { icon: Users, label: "맞춤 진행", value: "1:1 맞춤 배차" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center rounded-2xl border border-white/30 bg-white/10 px-3 py-5 shadow-xl backdrop-blur-md transition hover:border-teal-300/50 hover:bg-white/15 sm:px-4"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-lg shadow-teal-500/30">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-bold tracking-wide text-teal-200">{item.label}</p>
                  <p className="mt-2 text-center text-sm font-extrabold leading-snug text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.85)] sm:text-[15px]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white px-4 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              label="소개"
              title="포항에서 믿고 맡기는 생활심부름"
              description="포항 청년 잔심부름 센터는 장보기, 물품 전달, 병원·관공서 동행 등 혼자 하기 번거로운 일을 직접 확인하고 책임감 있게 도와드립니다."
            />
            <div className="relative mx-auto h-72 max-w-2xl overflow-hidden rounded-3xl shadow-xl sm:h-96">
              <Image
                src="/images/about-grocery.jpg"
                alt="장보기 봉투를 건네는 청년 생활 도우미"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
              {aboutFeatures.map((item) => (
                <div
                  key={item.text}
                  className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-teal-50/60 p-5 shadow-md transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-lg"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-md shadow-teal-500/25 transition group-hover:scale-105">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-[15px] font-bold leading-snug text-slate-800">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-slate-50 px-4 py-24 text-center">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="서비스"
              title="이런 심부름을 도와드려요"
              description="장보기, 물품 전달, 우편·택배, 병원·관공서 동행까지 포항에서 필요한 생활심부름을 직접 확인하고 빠르게 도와드립니다."
            />
            <div className="mb-10 rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50 to-teal-50 px-6 py-6 text-center shadow-sm">
              <p className="text-lg font-bold text-slate-900">{siteConfig.servicesIntro.headline}</p>
              <p className="mt-2 text-xl font-extrabold text-teal-600">{siteConfig.servicesIntro.subline}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{siteConfig.servicesIntro.note}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.services.map((service, i) => {
                const Icon = serviceIcons[i] || MapPin;
                return (
                  <div
                    key={service.title}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={serviceImages[i]}
                        alt={service.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-lg">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-bold leading-snug text-white drop-shadow-md sm:text-lg">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col border-t border-teal-100 bg-gradient-to-br from-white to-teal-50/40 p-5 text-center">
                      <p className="text-sm leading-7 text-slate-600">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-white px-4 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto mb-12 max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold tracking-wide text-teal-700">
                요금
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                투명한 요금 안내
              </h2>
              <div className="mt-4 space-y-2 text-base leading-7 text-slate-600 sm:text-lg">
                {siteConfig.pricingIntro.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <div className="hidden overflow-hidden rounded-2xl border border-slate-200 shadow-lg md:block">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-sky-700 text-white">
                    <th className="px-6 py-4 text-sm font-semibold">항목</th>
                    <th className="px-6 py-4 text-sm font-semibold">요금</th>
                    <th className="px-6 py-4 text-sm font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody>
                  {siteConfig.pricing.map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 font-medium text-slate-900">{row.item}</td>
                      <td className="px-6 py-4 text-lg font-bold text-teal-600">{row.price}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid gap-4 md:hidden">
              {siteConfig.pricing.map((row) => (
                <div key={row.item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex justify-between gap-3">
                    <h3 className="font-bold text-slate-900">{row.item}</h3>
                    <span className="shrink-0 font-bold text-teal-600">{row.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">{row.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 text-center">
              <ul className="space-y-2 text-sm leading-7 text-slate-600">
                {siteConfig.pricingNotes.map((note) => (
                  <li key={note}>※ {note}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Area */}
        <SectionBg
          id="area"
          image={sectionImages.area}
          overlay="bg-slate-900/70"
          className="px-4 py-24"
        >
          <div className="mx-auto max-w-5xl text-center">
            <SectionHeading
              label="서비스 지역"
              title={siteConfig.areaSection.title}
              description={siteConfig.areaSection.description}
              dark
            />
            <p className="-mt-6 mb-8 text-base leading-7 text-white/85 sm:text-lg">
              {siteConfig.areaSection.note}
            </p>
            <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
              {siteConfig.areaSection.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm"
                >
                  {tag === "타지역 연계" ? (
                    <Car className="h-4 w-4 text-teal-300" />
                  ) : (
                    <MapPin className="h-4 w-4 text-teal-300" />
                  )}
                  {tag}
                </span>
              ))}
            </div>
            <div className="mb-10 grid gap-4 sm:grid-cols-3">
              {siteConfig.areaSection.cards.map((card, index) => {
                const CardIcon = [MapPin, Navigation, Car][index] ?? MapPin;
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-white/20 bg-white/10 px-5 py-6 text-center shadow-lg backdrop-blur-md"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-lg shadow-teal-500/30">
                      <CardIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-extrabold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/80">{card.description}</p>
                  </div>
                );
              })}
            </div>
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-teal-500/40 ring-2 ring-teal-300 transition hover:scale-[1.02] hover:bg-teal-600"
            >
              지역 문의하기
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </SectionBg>

        {/* FAQ */}
        <section id="faq" className="bg-slate-50 px-4 py-24 text-center">
          <div className="mx-auto max-w-3xl">
            <SectionHeading label="FAQ" title="자주 묻는 질문" />
            <div className="space-y-3">
              {siteConfig.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-slate-200 bg-white text-center shadow-sm transition open:border-teal-200 open:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none flex-col items-center gap-3 px-6 py-5 font-semibold text-slate-900 select-none [&::-webkit-details-marker]:hidden">
                    <span>{faq.q}</span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-600 transition-transform duration-200 group-open:rotate-180">
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </summary>
                  <div className="faq-answer border-t border-slate-100 px-6 pb-5 pt-4">
                    <p className="text-center text-sm leading-7 text-slate-600">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Apply */}
        <SectionBg
          id="apply"
          image={sectionImages.apply}
          overlay="bg-black/55"
          className="px-4 py-24"
        >
          <div className="mx-auto max-w-xl text-center">
            <SectionHeading
              label="문의하기"
              title="지금 바로 심부름 문의하기"
              description="내용을 남겨주시면 가능 여부와 예상 요금을 빠르게 안내드리겠습니다."
              dark
            />
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-4 rounded-2xl border border-white/30 bg-white/15 px-8 py-5 shadow-xl backdrop-blur-sm transition hover:bg-white/20"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500 text-white shadow-lg">
                <Phone className="h-7 w-7" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white/80">전화 문의</p>
                <p className="text-2xl font-extrabold tracking-wide text-white sm:text-3xl">
                  {siteConfig.phone}
                </p>
              </div>
            </a>
            <div className="mt-8 rounded-3xl bg-white p-6 text-left shadow-2xl sm:p-8">
              <OrderForm />
            </div>
          </div>
        </SectionBg>
      </main>

      <Footer />

      <a
        href="#apply"
        className="fixed bottom-5 right-5 z-40 rounded-full bg-teal-500 px-5 py-3 text-sm font-bold text-white shadow-xl md:hidden"
      >
        신청하기
      </a>
    </>
  );
}
