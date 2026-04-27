// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-500">
              Error 404
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Halaman tidak ditemukan
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
              Maaf, halaman yang kamu cari mungkin sudah dipindahkan,
              dihapus, atau URL yang dimasukkan kurang tepat.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Kembali ke Beranda
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Hubungi Kami
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
                <p className="text-sm font-semibold text-yellow-700">
                  Cek kembali URL
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Pastikan alamat halaman sudah benar.
                </p>
              </div>

              <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
                <p className="text-sm font-semibold text-green-700">
                  Gunakan menu utama
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Kembali ke halaman utama untuk navigasi yang lebih mudah.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-white">
              <div className="absolute inset-0 rounded-full border-[14px] border-red-400" />
              <div className="absolute inset-4 rounded-full border-[14px] border-yellow-400" />
              <div className="absolute inset-8 rounded-full border-[14px] border-green-400" />
              <div className="absolute inset-12 rounded-full border-[14px] border-blue-400" />

              <div className="relative z-10 rounded-full bg-white px-6 py-8 text-center shadow-md">
                <p className="text-7xl font-extrabold leading-none text-slate-900">
                  404
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Not Found
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}