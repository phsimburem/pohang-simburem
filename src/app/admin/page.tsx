"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogOut, Shield } from "lucide-react";

type Order = {
  id: number;
  name: string;
  phone: string;
  serviceType: string;
  content: string;
  location: string;
  preferredAt: string | null;
  memo: string | null;
  status: string;
  createdAt: string;
};

const statusLabels: Record<string, string> = {
  new: "신규",
  progress: "진행중",
  done: "완료",
};

const statusColors: Record<string, string> = {
  new: "bg-teal-100 text-teal-700",
  progress: "bg-blue-100 text-blue-700",
  done: "bg-green-100 text-green-700",
};

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);

  async function fetchOrders() {
    const response = await fetch("/api/admin/orders");
    if (response.ok) {
      const data = await response.json();
      setOrders(data.orders);
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "로그인 실패");
      return;
    }

    await fetchOrders();
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setOrders([]);
    setPassword("");
  }

  async function updateStatus(id: number, status: string) {
    const response = await fetch("/api/admin/orders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });

    if (response.ok) {
      const data = await response.json();
      setOrders((prev) =>
        prev.map((order) => (order.id === id ? data.order : order)),
      );
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-surface">
        <p className="text-slate-500">로딩 중...</p>
      </main>
    );
  }

  if (!authenticated) {
    return (
      <main className="hero-mesh flex min-h-screen items-center justify-center px-4">
        <form onSubmit={handleLogin} className="glass-card w-full max-w-sm rounded-3xl p-8">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white">
            <Shield className="h-6 w-6" />
          </div>
          <h1 className="mb-6 text-2xl font-bold text-brand-900">관리자 로그인</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            className="input-field mb-4"
          />
          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
          <button type="submit" className="btn-primary w-full">
            로그인
          </button>
          <Link href="/" className="mt-4 block text-center text-sm text-slate-500 hover:text-brand-700">
            홈으로
          </Link>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-surface px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-brand-900">오더 관리</h1>
            <p className="mt-1 text-sm text-slate-500">총 {orders.length}건</p>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="text-sm text-slate-500 hover:text-brand-700">
              홈으로
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700"
            >
              <LogOut className="h-4 w-4" />
              로그아웃
            </button>
          </div>
        </div>

        {orders.length === 0 ? (
          <p className="rounded-2xl bg-white p-12 text-center text-slate-500 shadow-sm">
            아직 신청이 없습니다.
          </p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-bold text-brand-900">
                      #{order.id} {order.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {new Date(order.createdAt).toLocaleString("ko-KR")}
                    </p>
                  </div>
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order.id, e.target.value)}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold ${statusColors[order.status]}`}
                  >
                    {Object.entries(statusLabels).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  <p><strong>연락처:</strong> {order.phone}</p>
                  <p><strong>종류:</strong> {order.serviceType}</p>
                  <p className="sm:col-span-2"><strong>내용:</strong> {order.content}</p>
                  <p className="sm:col-span-2"><strong>장소:</strong> {order.location}</p>
                  <p><strong>희망시간:</strong> {order.preferredAt || "-"}</p>
                  <p><strong>메모:</strong> {order.memo || "-"}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
