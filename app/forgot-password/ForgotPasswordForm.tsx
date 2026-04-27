"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordForm() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<{
    emailOrPhone?: string;
    captcha?: string;
  }>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors: {
      emailOrPhone?: string;
      captcha?: string;
    } = {};

    if (!emailOrPhone.trim()) {
      newErrors.emailOrPhone = "Tidak boleh kosong!";
    }

    if (!captcha.trim()) {
      newErrors.captcha = "Bidang ini diperlukan.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-green-100 bg-green-50 p-6">
        <h2 className="text-lg font-semibold text-green-700">
          Instruksi berhasil dikirim
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Kami telah mengirimkan instruksi reset password ke:
        </p>
        <p className="mt-2 font-semibold text-slate-800">{emailOrPhone}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => {
              setSent(false);
              setCaptcha("");
            }}
            className="rounded-full bg-[#1d7de8] px-6 py-3 text-sm font-semibold text-white"
          >
            Kirim ulang
          </button>

          <Link
            href="/login"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700"
          >
            Kembali ke login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Email atau No. HP"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className={`h-14 w-full rounded-2xl border bg-[#f8fafc] px-4 text-slate-700 outline-none transition focus:ring-4 ${
            errors.emailOrPhone
              ? "border-red-400 focus:ring-red-100"
              : "border-slate-200 focus:border-[#60a5fa] focus:ring-blue-100"
          }`}
        />
        {errors.emailOrPhone && (
          <p className="mt-2 text-center text-sm text-red-500">
            {errors.emailOrPhone}
          </p>
        )}
      </div>

      {/* <div className="flex flex-col items-center">
        <div className="mb-3 flex h-16 w-[140px] items-center justify-center rounded border border-slate-300 bg-white text-3xl font-black tracking-tight text-black">
          dhoriol
        </div>

        <button type="button" className="text-sm font-medium text-[#1d7de8]">
          Muat ulang captcha
        </button>
      </div> */}

      {/* <div>
        <input
          type="text"
          placeholder=""
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
          className={`h-14 w-full rounded-2xl border bg-white px-4 text-slate-700 outline-none transition focus:ring-4 ${
            errors.captcha
              ? "border-red-400 focus:ring-red-100"
              : "border-slate-200 focus:border-[#60a5fa] focus:ring-blue-100"
          }`}
        />
        {errors.captcha && (
          <p className="mt-2 text-center text-sm text-red-500">
            {errors.captcha}
          </p>
        )}
      </div> */}

      <button
        type="submit"
        className="mt-2 h-14 w-full rounded-full bg-[#1d7de8] font-semibold text-white shadow-md transition hover:bg-[#176dcb]"
      >
        KIRIM
      </button>

      <div className="pt-2 text-center">
        <Link
          href="/login"
          className="text-sm text-slate-500 hover:text-[#1d7de8]"
        >
          Kembali ke halaman login
        </Link>
      </div>
    </form>
  );
}
