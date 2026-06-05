"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";

export default function OrderForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      phone: formData.get("phone"),
      content: formData.get("content"),
      location: formData.get("location"),
      preferredAt: formData.get("preferredAt"),
      agreed: formData.get("agreed") === "on",
    };

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "문의에 실패했습니다.");
      setLoading(false);
      return;
    }

    router.push("/done");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-slate-700">연락처 *</span>
        <input
          name="phone"
          required
          type="tel"
          className="input-field"
          placeholder="예: 010-0000-0000"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-slate-700">필요한 심부름 *</span>
        <textarea
          name="content"
          required
          rows={4}
          className="input-field resize-none"
          placeholder="예: 장보기, 물건 전달, 병원 동행 등 내용을 적어주세요"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-slate-700">지역/주소 *</span>
        <input
          name="location"
          required
          className="input-field"
          placeholder="예: 포항시 북구 장성동 / 상세주소는 상담 후 전달 가능"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-slate-700">희망 시간</span>
        <input
          name="preferredAt"
          className="input-field"
          placeholder="예: 오늘 오후 3시 / 가능한 빠르게"
        />
      </label>

      <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <input name="agreed" type="checkbox" required className="mt-1 h-4 w-4 accent-teal-600" />
        <span className="text-sm leading-6 text-slate-600">개인정보 수집·이용에 동의합니다.</span>
      </label>

      {error && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-teal-600 disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {loading ? "제출 중..." : "심부름 문의하기"}
      </button>
    </form>
  );
}
