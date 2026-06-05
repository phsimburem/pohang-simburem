"use client";

import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "#about", label: "소개" },
  { href: "#services", label: "서비스" },
  { href: "#pricing", label: "요금" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-md">
            <Zap className="h-4 w-4" />
          </span>
          <span className="text-base font-bold text-slate-900 sm:text-lg">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#apply"
            className="rounded-full bg-teal-600 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-teal-500/40 ring-2 ring-teal-300 transition hover:scale-105 hover:bg-teal-700"
          >
            신청하기
          </a>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-sky-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="메뉴"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="rounded-full bg-teal-600 py-3.5 text-center text-sm font-extrabold text-white shadow-lg shadow-teal-500/40 ring-2 ring-teal-300"
            >
              신청하기
            </a>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
