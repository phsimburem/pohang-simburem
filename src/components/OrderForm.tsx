"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function formatPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

const TIME_PRESETS_ROW1 = ["가능한 빨리", "오늘 오전", "오늘 오후"] as const;
const TIME_PRESETS_ROW2 = ["오늘 저녁", "내일", "시간 협의"] as const;

export default function OrderForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const [timePreset, setTimePreset] = useState<string>("");
  const [timeCustom, setTimeCustom] = useState("");
  const [showCustomTime, setShowCustomTime] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const preferredAt = showCustomTime
      ? timeCustom.trim()
      : timePreset;

    const payload = {
      phone: formData.get("phone"),
      content: formData.get("content"),
      location: formData.get("location"),
      preferredAt,
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
          value={phone}
          onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
          className="input-field"
          placeholder="예: 010-0000-0000"
          maxLength={13}
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

      <div className="block">
        <span className="mb-2 block text-sm font-semibold text-slate-700">희망 시간</span>
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2">
            {TIME_PRESETS_ROW1.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  setShowCustomTime(false);
                  setTimePreset(preset);
                  setTimeCustom("");
                }}
                className={`rounded-xl border px-2 py-3 text-sm font-semibold transition ${
                  !showCustomTime && timePreset === preset
                    ? "border-teal-500 bg-teal-50 text-teal-700"
                    : "border-slate-200 bg-white text-slate-700 hover:border-teal-300"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {TIME_PRESETS_ROW2.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  setShowCustomTime(false);
                  setTimePreset(preset);
                  setTimeCustom("");
                }}
                className={`rounded-xl border px-2 py-3 text-sm font-semibold transition ${
                  !showCustomTime && timePreset === preset
                    ? "border-teal-500 bg-teal-50 text-teal-700"
                    : "border-slate-200 bg-white text-slate-700 hover:border-teal-300"
                }`}
              >
                {preset}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setShowCustomTime(true);
                setTimePreset("");
              }}
              className={`rounded-xl border px-2 py-3 text-sm font-semibold transition ${
                showCustomTime
                  ? "border-teal-500 bg-teal-50 text-teal-700"
                  : "border-slate-200 bg-white text-slate-700 hover:border-teal-300"
              }`}
            >
              직접 선택
            </button>
          </div>
        </div>
        {showCustomTime && (
          <input
            value={timeCustom}
            onChange={(e) => setTimeCustom(e.target.value)}
            className="input-field mt-3"
            placeholder="예: 이번 주 토요일 오후 / 다음 주 월요일"
          />
        )}
        <span className="mt-1.5 block text-xs text-slate-500">
          버튼 한 번만 누르면 됩니다. 선택 안 해도 괜찮아요
        </span>
      </div>

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
        className="flex w-full items-center justify-center rounded-xl bg-teal-500 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-teal-600 disabled:opacity-60"
      >
        {loading ? "제출 중..." : "심부름 문의하기"}
      </button>
    </form>
  );
}
