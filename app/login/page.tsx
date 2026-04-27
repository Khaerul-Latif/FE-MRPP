import Image from "next/image";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f6fb]">
      {/* <div className="absolute left-0 top-0 h-64 w-64 rounded-br-[120px] bg-[#e8eef6]" />

      <div className="absolute right-20 top-24 hidden h-40 w-40 grid-cols-5 gap-3 lg:grid">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="h-3 w-3 rounded-full bg-[#d9e7f7]" />
        ))}
      </div> */}

      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10">
        <div className="w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-2">
            {/* kiri */}
            <section className="flex items-center px-8 py-10 sm:px-12 lg:px-14">
              <div className="w-full">
                <div className="mb-8 text-center lg:text-left">
                  <h1 className="text-3xl font-bold text-slate-800">
                    Selamat Datang di
                  </h1>
                  <h1 className="text-2xl font-bold text-slate-500">
                    Merry Riana Positive Psychology
                  </h1>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Silahkan masukkan email dan password Anda untuk masuk
                    sekarang
                  </p>
                </div>

                <LoginForm />

                <p className="mt-6 text-center text-sm text-slate-500 lg:text-left">
                  Belum memiliki akun?{" "}
                  <a
                    href="/mrpp/register"
                    className="font-semibold text-[#2563eb]"
                  >
                    Silahkan registrasi di sini.
                  </a>
                </p>
              </div>
            </section>

            {/* kanan */}
            <section className="relative hidden items-center justify-center bg-[#fbfcfe] p-10 lg:flex">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#f4f8fd]" />
              <Image
                src="/mrpp/assets/images/logo_mrpp.png"
                alt="Ilustrasi login"
                width={560}
                height={620}
                className="relative z-10 h-auto max-h-[560px] w-auto object-contain"
                priority
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
