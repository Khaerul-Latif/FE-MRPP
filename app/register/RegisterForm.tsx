"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  level: string;
  source: string;
  referral: string;
  captcha: string;
  agree: boolean;
};

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    level: "",
    source: "",
    referral: "",
    captcha: "",
    agree: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function validate() {
    const newErrors: Record<string, string> = {};

    if (!form.fullName.trim()) newErrors.fullName = "Nama lengkap wajib diisi";
    if (!form.phone.trim()) newErrors.phone = "No. HP wajib diisi";
    if (!form.email.trim()) newErrors.email = "Email wajib diisi";
    if (!form.password.trim()) newErrors.password = "Password wajib diisi";
    if (!form.level.trim()) newErrors.level = "Jenjang wajib dipilih";
    if (!form.source.trim()) newErrors.source = "Pilih sumber informasi";
    if (!form.captcha.trim()) newErrors.captcha = "Captcha wajib diisi";
    if (!form.agree) newErrors.agree = "Centang persetujuan terlebih dahulu";

    return newErrors;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);
    setSuccess("");

    if (Object.keys(newErrors).length > 0) return;

    setSuccess("Registrasi berhasil. Silakan lanjut login.");
  }

  function inputClass(name: string) {
    return `h-14 w-full rounded-xl border bg-[#f7f7f7] px-4 text-[17px] text-slate-700 outline-none transition focus:ring-4 ${
      errors[name]
        ? "border-red-400 focus:ring-red-100"
        : "border-transparent focus:border-[#60a5fa] focus:ring-blue-100"
    }`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          name="fullName"
          type="text"
          placeholder="Nama Lengkap"
          value={form.fullName}
          onChange={handleChange}
          className={inputClass("fullName")}
        />
        {errors.fullName && (
          <p className="mt-2 text-sm text-red-500">{errors.fullName}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <input
            name="phone"
            type="text"
            placeholder="No. HP"
            value={form.phone}
            onChange={handleChange}
            className={inputClass("phone")}
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan Password"
              value={form.password}
              onChange={handleChange}
              className={`${inputClass("password")} pr-14`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              aria-label={
                showPassword ? "Sembunyikan password" : "Lihat password"
              }
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-2 text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <div>
          <select
            name="level"
            value={form.level}
            onChange={handleChange}
            className={inputClass("level")}
          >
            <option value="">Jenjang</option>
            <option value="SMP">SMP</option>
            <option value="SMA">SMA</option>
            <option value="Mahasiswa">Mahasiswa</option>
            <option value="Umum">Umum</option>
          </select>
          {errors.level && (
            <p className="mt-2 text-sm text-red-500">{errors.level}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
        <div>
          <select
            name="source"
            value={form.source}
            onChange={handleChange}
            className={inputClass("source")}
          >
            <option value="">
              Dari mana kamu tau Merry Riana Positive Psychology?
            </option>
            <option value="Instagram">Instagram</option>
            <option value="TikTok">TikTok</option>
            <option value="Teman">Teman</option>
            <option value="Google">Google</option>
            <option value="Sekolah">Sekolah</option>
          </select>
          {errors.source && (
            <p className="mt-2 text-sm text-red-500">{errors.source}</p>
          )}
        </div>

        {/* <div>
          <input
            name="referral"
            type="text"
            placeholder="Punya referral code? (optional)"
            value={form.referral}
            onChange={handleChange}
            className={inputClass("referral")}
          />
        </div> */}
      </div>

      <div>
        <label className="flex items-start gap-3 text-[15px] leading-7 text-slate-600">
          <input
            name="agree"
            type="checkbox"
            checked={form.agree}
            onChange={handleChange}
            className="mt-1 h-5 w-5 rounded border-slate-300"
          />
          <span>
            Dengan membuat akun baru di Merry Riana Positive Psychology, saya
            telah menyetujui{" "}
            <a href="#" className="text-[#1d7de8] underline">
              Syarat & Ketentuan
            </a>{" "}
            dan{" "}
            <a href="#" className="text-[#1d7de8] underline">
              Kebijakan Privasi
            </a>
          </span>
        </label>
        {errors.agree && (
          <p className="mt-2 text-sm text-red-500">{errors.agree}</p>
        )}
      </div>

      {/* <div className="flex flex-col items-center">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-[140px] items-center justify-center rounded border border-slate-300 bg-white text-3xl font-black tracking-tight text-black">
            whltas
          </div>
          <button
            type="button"
            className="text-xl font-bold text-[#1d7de8]"
            aria-label="Refresh captcha"
          >
            ↻
          </button>
        </div>

        <div className="w-full">
          <input
            name="captcha"
            type="text"
            value={form.captcha}
            onChange={handleChange}
            className={inputClass("captcha")}
          />
          {errors.captcha && (
            <p className="mt-2 text-sm text-red-500">{errors.captcha}</p>
          )}
        </div>
      </div> */}

      {success && (
        <div className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
          {success}
        </div>
      )}

      <button
        type="submit"
        className="h-14 w-full rounded-full bg-[#1d7de8] text-base font-bold text-white shadow-[0_10px_20px_rgba(29,125,232,0.25)] transition hover:bg-[#176dcb]"
      >
        BUAT AKUN
      </button>

      <p className="pt-4 text-center text-[17px] text-slate-500">
        Sudah memiliki akun?{" "}
        <Link href="/login" className="font-semibold text-[#1d7de8] underline">
          Silahkan login disini.
        </Link>
      </p>
    </form>
  );
}
