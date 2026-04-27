import Image from "next/image";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f6fb]">
      {/* ornamen */}
      {/* <div className="absolute left-0 top-0 h-64 w-64 rounded-br-[120px] bg-[#e8eef6]" />
      <div className="absolute bottom-0 left-0 h-28 w-28 rounded-tr-[80px] bg-[#1d7de8]" />
      <div className="absolute right-0 top-24 h-52 w-20 rounded-l-full bg-[#f7f1df]" />
      <div className="absolute bottom-0 right-10 h-28 w-28 opacity-70">
        <div className="absolute bottom-0 left-10 h-20 w-1 rotate-12 rounded bg-[#9ecaf3]" />
        <div className="absolute bottom-5 left-5 h-16 w-1 -rotate-12 rounded bg-[#9ecaf3]" />
        <div className="absolute bottom-2 left-16 h-14 w-1 rotate-45 rounded bg-[#9ecaf3]" />
      </div> */}

      {/* <div className="absolute right-60 top-24 hidden h-10 grid-cols-8 gap-4 lg:grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="h-3 w-3 rounded-full bg-[#d9e7f7]" />
        ))}
      </div> */}

      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-8">
        <div className="w-full max-w-6xl rounded-[28px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          {/* <div className="px-8 pt-8 text-center">
            <Image
              src="/logo-akupintar.png"
              alt="Merry Riana Positive Psychology"
              width={220}
              height={70}
              className="mx-auto h-auto w-auto"
              priority
            />
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">
            {/* kiri */}
            <section className="flex flex-col justify-between border-r border-slate-200 px-8 py-10">
              <div>
                <h1 className="text-4xl font-bold leading-tight text-[#1565b2]">
                  Halo,
                  <br />
                  Sobat
                </h1>

                <p className="mt-8 max-w-[220px] text-[18px] leading-9 text-slate-600">
                  Ayo daftar sekarang juga, Bersama Merry Riana Positive
                  Psychology untuk mendapatkan pengalaman yang mengesankan.
                </p>
              </div>

              {/* <div className="mt-10 flex justify-center lg:justify-start">
                <Image
                  src="/register-boy.png"
                  alt="Ilustrasi registrasi"
                  width={220}
                  height={260}
                  className="h-auto w-auto object-contain"
                />
              </div> */}
            </section>

            {/* kanan */}
            <section className="px-8 py-10">
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-slate-800">
                  Selamat Datang di
                </h2>
                <h2 className="text-3xl font-bold text-slate-800"></h2>
                <p className="mt-4 text-[18px] text-slate-700">
                  Masuk dan Mulai Petualanganmu Sekarang
                </p>
              </div>

              <RegisterForm />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
