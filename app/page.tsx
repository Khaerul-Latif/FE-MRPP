"use client"; // Add this line at the top of your file

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    new Array(10).fill(""),
  );
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState<boolean>(false);
  // const [psychologyResult, setPsychologyResult] = useState<string>("");

  // Handle selection of answers
  const handleSelection = (questionIndex: number, value: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = value;
    setSelectedAnswers(updatedAnswers);
  };

  // Handle the display of the result
  const handleShowResult = () => {
    calculatePsychologyResult();
    setIsResultModalOpen(true);
    setIsModalOpen(false);
  };

  const selectedStyles: Record<string, string> = {
    "Tidak Cocok": "bg-red-500 text-white",
    "Kurang Cocok": "bg-red-300 text-white",
    Cocok: "bg-green-300 text-white",
    "Sangat Cocok": "bg-green-500 text-white",
  };

  const isAllAnswered = selectedAnswers.every((answer) => answer !== "");

  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { name: "Beranda", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Sekolah Dan Kampus", href: "/sekolah-kampus" },
    { name: "Belajar", href: "/belajar" },
    { name: "Tes Minat Bakat", href: "/tes-minat-bakat" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "FAQ", href: "/faq" },
  ];
  type ResultType = "extrovert" | "introvert" | "analytical" | "";

  type QuestionType = {
    text: string;
    weights: {
      extrovert?: number;
      introvert?: number;
      analytical?: number;
    };
  };

  const [psychologyResult, setPsychologyResult] = useState<ResultType>("");

  const questions: QuestionType[] = [
    {
      text: "Saya memahami mengapa saya percaya & berperilaku sedemikian rupa.",
      weights: { analytical: 1 },
    },
    {
      text: "Saya mudah merasa cemas dalam situasi sosial.",
      weights: { introvert: 1 },
    },
    {
      text: "Saya lebih suka menghabiskan waktu sendiri daripada berkumpul dengan banyak orang.",
      weights: { introvert: 1 },
    },
    {
      text: "Saya merasa bahagia ketika berbicara dengan orang baru.",
      weights: { extrovert: 1 },
    },
    {
      text: "Saya sering merasa tidak nyaman dalam keramaian.",
      weights: { introvert: 1 },
    },
    {
      text: "Saya cenderung lebih fokus pada analisis daripada perasaan dalam mengambil keputusan.",
      weights: { analytical: 1 },
    },
    {
      text: "Saya lebih suka bekerja secara mandiri daripada dalam tim.",
      weights: { introvert: 0.7, analytical: 0.3 },
    },
    {
      text: "Saya cenderung menyukai rutinitas dan stabilitas.",
      weights: { analytical: 1 },
    },
    {
      text: "Saya memiliki banyak ide dan mudah beradaptasi dengan perubahan.",
      weights: { extrovert: 1 },
    },
    {
      text: "Saya lebih suka mengikuti instruksi daripada merancang sendiri.",
      weights: { analytical: 1 },
    },
  ];

  const resultDetails: Record<
    Exclude<ResultType, "">,
    {
      title: string;
      image: string;
      bgColor: string;
      badgeColor: string;
      description: string;
    }
  > = {
    extrovert: {
      title: "Ekstrovert",
      image: "/mrpp/assets/images/results/extrovert.png",
      bgColor: "bg-yellow-50",
      badgeColor: "bg-yellow-500",
      description:
        "Anda cenderung aktif, hangat, mudah bersosialisasi, dan merasa berenergi saat berinteraksi dengan banyak orang.",
    },
    introvert: {
      title: "Introvert",
      image: "/mrpp/assets/images/results/introvert.png",
      bgColor: "bg-blue-50",
      badgeColor: "bg-blue-500",
      description:
        "Anda cenderung tenang, reflektif, nyaman dengan suasana yang lebih hening, dan lebih suka interaksi yang mendalam.",
    },
    analytical: {
      title: "Analitis",
      image: "/mrpp/assets/images/results/analytical.png",
      bgColor: "bg-green-50",
      badgeColor: "bg-green-500",
      description:
        "Anda cenderung logis, teliti, dan fokus pada data serta pertimbangan rasional saat mengambil keputusan.",
    },
  };

  const currentResult =
    psychologyResult && resultDetails[psychologyResult]
      ? resultDetails[psychologyResult]
      : resultDetails.analytical;

  const calculatePsychologyResult = () => {
    const answerScore: Record<string, number> = {
      "Tidak Cocok": 1,
      "Kurang Cocok": 2,
      Cocok: 3,
      "Sangat Cocok": 4,
    };

    const scores = {
      extrovert: 0,
      introvert: 0,
      analytical: 0,
    };

    selectedAnswers.forEach((answer, index) => {
      const value = answerScore[answer] || 0;
      const weights = questions[index].weights;

      if (weights.extrovert) {
        scores.extrovert += value * weights.extrovert;
      }

      if (weights.introvert) {
        scores.introvert += value * weights.introvert;
      }

      if (weights.analytical) {
        scores.analytical += value * weights.analytical;
      }
    });

    if (
      scores.extrovert >= scores.introvert &&
      scores.extrovert >= scores.analytical
    ) {
      setPsychologyResult("extrovert");
    } else if (
      scores.introvert >= scores.extrovert &&
      scores.introvert >= scores.analytical
    ) {
      setPsychologyResult("introvert");
    } else {
      setPsychologyResult("analytical");
    }
  };
  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo kiri */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/mrpp/assets/images/logo_mrpp.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 sm:h-14 w-auto"
              priority
            />
          </Link>

          {/* Menu desktop kanan */}
          <div className="hidden items-center gap-8 lg:flex">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
              >
                {menu.name}
              </Link>
            ))}

            <Link
              href="/register"
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Registration
            </Link>

            <Link
              href="/login"
              className="rounded-lg border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
            >
              Login
            </Link>
          </div>

          {/* Button mobile */}
          <button
            type="button"
            className="flex items-center justify-center rounded-md p-2 text-gray-700 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Menu mobile */}
        {isOpen && (
          <div className="border-t border-gray-200 bg-white lg:hidden">
            <div className="space-y-1 px-4 py-4">
              {menus.map((menu) => (
                <Link
                  key={menu.name}
                  href={menu.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {menu.name}
                </Link>
              ))}

              <Link
                href="/follow-us"
                className="mt-3 block rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Follow Us
              </Link>

              <Link
                href="/login"
                className="mt-2 block rounded-lg border border-blue-600 px-4 py-2 text-center text-sm font-semibold text-blue-600 hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </header>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between pb-10 sm:pb-12 pt-4 sm:pt-6 px-6 sm:px-0  bg-white sm:items-start">
        {/* Personal Info Modal */}
        {isModalOpen && (
          <div className="modal fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-md">
            <div className="modal-content bg-white p-8 rounded-lg shadow-lg w-96">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-black font-medium mb-2"
                >
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Nama"
                  className="modal-input w-full px-4 py-2 mb-4 border border-black rounded text-black bg-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-black font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="modal-input w-full px-4 py-2 mb-4 border border-black rounded text-black bg-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-black font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  className="modal-input w-full px-4 py-2 mb-4 border border-black rounded text-black bg-white"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {/* Close Button */}
              <button
                className="w-full px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 mb-4"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
              {/* Result Button (only shows if all inputs are filled) */}
              {name && email && phone && (
                <button
                  className="w-full px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                  onClick={handleShowResult}
                >
                  Result
                </button>
              )}
            </div>
          </div>
        )}

        {/* Result Modal */}
        {isResultModalOpen && (
          <div className="modal fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center z-50 px-4">
            <div
              className={`modal-content w-full max-w-md rounded-2xl shadow-xl p-6 sm:p-8 text-center ${currentResult.bgColor}`}
            >
              <div
                className={`inline-block rounded-full px-4 py-1 text-sm font-semibold text-white mb-4 ${currentResult.badgeColor}`}
              >
                Hasil Tes Psikologi
              </div>

              <div className="flex justify-center mb-5">
                <Image
                  src={currentResult.image}
                  alt={currentResult.title}
                  width={160}
                  height={160}
                  className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                  priority
                />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#424A4C] mb-2">
                Halo, {name}!
              </h2>

              <p className="text-lg sm:text-xl font-semibold text-[#424A4C] mb-3">
                Anda memiliki kecenderungan kepribadian{" "}
                <span className="text-blue-600">{currentResult.title}</span>
              </p>

              <p className="text-sm sm:text-base leading-6 text-[#424A4C] mb-6">
                {currentResult.description}
              </p>

              <button
                className="w-full px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Tutup
              </button>
            </div>
          </div>
        )}
        {/* Question Section */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold leading-10 text-[#424A4C]">
            Tes Psikologi
          </h1>
          <p className="mt-2 text-lg text-[#424A4C]">
            Jawablah pertanyaan berikut ini sesuai dengan tingkat kecocokan
            berdasarkan kondisi saat ini.
          </p>

          {/* Questions */}
          {questions.map((question, index) => (
            <div key={index} className="mt-10 text-center">
              <p className="text-base sm:text-xl text-[#424A4C]">
                <span className="font-bold">{index + 1}.</span> {question.text}
              </p>

              <div className="flex justify-between items-center mt-5 gap-4">
                <p className="mt-2 text-base sm:text-xl text-[#424A4C]">
                  Tidak cocok
                </p>

                {["Tidak Cocok", "Kurang Cocok", "Cocok", "Sangat Cocok"].map(
                  (option) => (
                    <div
                      key={option}
                      className={`w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full cursor-pointer transition-all ${
                        selectedAnswers[index] === option
                          ? selectedStyles[option]
                          : "bg-gray-200 text-black"
                      }`}
                      onClick={() => handleSelection(index, option)}
                    />
                  ),
                )}

                <p className="text-base sm:text-xl text-[#424A4C]">Cocok</p>
              </div>
            </div>
          ))}

          {/* Submit Button (to open modal) */}
          {/* Submit Button */}
          <button
            type="button"
            disabled={!isAllAnswered}
            className={`mt-8 w-full px-6 py-2 rounded-full text-white transition ${
              isAllAnswered
                ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={() => {
              if (isAllAnswered) {
                setIsModalOpen(true);
              }
            }}
          >
            Submit
          </button>

          {!isAllAnswered && (
            <p className="mt-3 text-sm text-red-600">
              Semua pertanyaan harus diisi terlebih dahulu.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
