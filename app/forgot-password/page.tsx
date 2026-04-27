import Image from "next/image";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f6fb]">
      {/* <div className="absolute left-0 top-0 h-64 w-64 rounded-br-[120px] bg-[#e8eef6]" />
      <div className="absolute bottom-0 left-0 h-28 w-28 rounded-tr-[80px] bg-[#d9ecff]" />
      <div className="absolute right-0 top-24 h-48 w-20 rounded-l-full bg-[#f6f0de]" />

      <div className="absolute right-40 top-24 hidden h-32 w-80 grid-cols-8 gap-3 lg:grid">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-3 w-3 rounded-full bg-[#d9e7f7]" />
        ))}
      </div> */}

      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10">
        <div className="w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-2">
            <section className="flex items-center px-8 py-10 sm:px-12 lg:px-14">
              <div className="w-full">
                <div className="mb-8 text-center lg:text-left">
                  {/* <div className="mb-8 flex justify-center lg:justify-start">
                    <Image
                      src="/mrpp/assets/images/logo_mrpp.png"
                      alt="Merry Riana Positive Psychology"
                      width={180}
                      height={60}
                      className="h-auto w-auto"
                      priority
                    />
                  </div> */}

                  <h1 className="text-3xl font-bold text-slate-800">
                    Atur ulang kata sandi
                  </h1>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                    Tidak masalah. Masukkan alamat email atau no. handphone
                    Sobat dan kami akan mengirimkan instruksi untuk mengganti
                    kata sandi.
                  </p>
                </div>

                <ForgotPasswordForm />
              </div>
            </section>

            <section className="relative hidden items-center justify-center bg-[#fbfcfe] p-10 lg:flex">
              <Image
                src="/mrpp/assets/images/logo_mrpp.png"
                alt="Ilustrasi forgot password"
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
