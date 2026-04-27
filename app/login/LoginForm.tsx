"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          remember,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login gagal");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Terjadi kesalahan. Coba lagi.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Masukkan Email / No. HP"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-14 w-full rounded-2xl border border-[#cfe0f5] bg-white px-4 text-slate-700 outline-none transition focus:border-[#60a5fa] focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Kata sandi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-14 w-full rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 pr-14 text-slate-700 outline-none transition focus:border-[#60a5fa] focus:ring-4 focus:ring-blue-100"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500"
        >
          {showPassword ? "Tutup" : "Lihat"}
        </button>
      </div>

      <div className="flex items-center justify-between text-sm text-slate-500">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300"
          />
          Remember me
        </label>

        <a href="/mrpp/forgot-password" className="hover:text-[#2563eb]">
          Lupa kata sandi?
        </a>
      </div>

      {error && (
        <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="h-14 w-full rounded-full bg-[#0d74c7] font-semibold text-white shadow-md transition hover:bg-[#0b67b0] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Memproses..." : "MASUK"}
      </button>
    </form>
  );
}
