import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, X } from "lucide-react";

const alumni = [
  {
    name: "Fardhu Rify ST",
    year: "Angkatan 2027",
    description: "Rekayasa Perangkat Lunak",
    image: "/fardhu-rify.jpg",
    alt: "Fardhu Rify",
    imagePosition: "object-center",
  },
  {
    name: "Rafka Umar",
    year: "Angkatan 2027",
    description: "Rekayasa Perangkat Lunak",
    image: "/rafka-umar.jpeg",
    alt: "Rafka Umar",
    imagePosition: "object-center",
  },
  {
    name: "Anisa Chairani",
    year: "Angkatan 2027",
    description: "Rekayasa Perangkat Lunak",
    image: "/anisa-chairani.jpeg",
    alt: "Anisa Chairani",
    imagePosition: "object-center",
  },
  {
    name: "Allmira Hilda Yanti",
    year: "Angkatan 2027",
    image: "/allmira-hilda-yanti.jpeg",
    description: "Rekayasa Perangkat Lunak",
    alt: "Allmira Hilda Yanti",
    imagePosition: "object-center",
  },
  {
    name: "Yazid Farid Fadhilla",
    year: "Angkatan 2027",
    image: "/yazid-farid-fadhilla.jpeg",
    description: "Rekayasa Perangkat Lunak",
    alt: "Yazid Farid Fadhilla",
    imagePosition: "object-center",
  },
  {
    name: "Rayyan Ammar Wafiq Yasar",
    year: "Angkatan 2027",
    image: "/rayyan-ammar-wafiq-yasar.jpeg",
    description: "Rekayasa Perangkat Lunak",
    alt: "Rayyan Ammar Wafiq Yasar",
    imagePosition: "object-center",
  },
];

const yearbooks = ["2024/2027", "2027/2030"] as const;

export default function Alumni() {
  const [selectedYearbook, setSelectedYearbook] = useState<
    (typeof yearbooks)[number] | null
  >(null);
  const [selectedAlumni, setSelectedAlumni] =
    useState<(typeof alumni)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const yearbookPhotos = selectedYearbook === "2024/2027" ? alumni : [];

  useEffect(() => {
    if (selectedAlumni && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [selectedAlumni]);

  return (
    <section
      id="buku-tahunan"
      className="scroll-mt-20 bg-gradient-to-br from-[#fff8e5] via-amber-50/70 to-[#fffdf7] px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-amber-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
            Buku Tahunan
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Kenangan satu{" "}
            <span className="text-amber-700">angkatan</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Pilih buku tahunan angkatan untuk melihat foto kelulusan siswa SMK
            Al-Muhadjirin 1 Bekasi.
          </p>
        </div>

        {selectedYearbook ? (
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedYearbook(null)}
                  aria-label="Kembali ke pilihan buku tahunan"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-200 bg-white text-stone-800 transition hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-amber-600"
                >
                  <ArrowLeft size={18} />
                </button>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-800">
                    Angkatan {selectedYearbook}
                  </p>
                  <h3 className="text-lg font-extrabold text-stone-900">
                    Foto kelulusan
                  </h3>
                </div>
              </div>
              <span className="text-sm font-medium text-stone-600">
                {yearbookPhotos.length} foto
              </span>
            </div>

            {yearbookPhotos.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {yearbookPhotos.map((person) => (
                <article
                  key={person.name}
                  className="group h-full overflow-hidden rounded-xl border border-amber-200/70 bg-[#fffefa] shadow-[0_14px_36px_-26px_rgba(120,80,18,0.45)] transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-900/10"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedAlumni(person)}
                    aria-label={`Lihat foto ${person.name}`}
                    className="flex h-full w-full flex-col text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                  >
                    <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-yellow-100 via-amber-100/70 to-[#fff8e5] p-5">
                      <div className="aspect-[4/5] h-full max-w-48 overflow-hidden rounded-lg bg-white">
                        <img
                          src={person.image}
                          alt={person.alt}
                          className={`block h-full w-full object-cover ${person.imagePosition}`}
                        />
                      </div>
                    </div>
                    <div className="flex min-h-36 w-full flex-1 flex-col items-center p-5">
                      <h4 className="text-base font-bold leading-snug text-slate-900">
                        {person.name}
                      </h4>
                      {person.year && (
                        <span className="mt-2 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                          {person.year}
                        </span>
                      )}
                      {person.description && (
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {person.description}
                        </p>
                      )}
                      <span className="mx-auto mt-auto pt-4 text-xs font-semibold text-amber-700 transition-colors group-hover:text-amber-900">
                        Lihat foto
                      </span>
                    </div>
                  </button>
                </article>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-amber-300 bg-white/60 px-6 py-12 text-center">
                <BookOpen size={28} className="mx-auto text-amber-700" />
                <p className="mt-3 text-base font-bold text-stone-900">
                  Foto angkatan ini belum tersedia
                </p>
                <p className="mt-1 text-sm text-stone-600">
                  Buku tahunan {selectedYearbook} belum memiliki foto kelulusan.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="mx-auto grid w-full max-w-4xl gap-4 sm:grid-cols-2">
            {yearbooks.map((yearbook) => (
              <button
                key={yearbook}
                type="button"
                onClick={() => setSelectedYearbook(yearbook)}
                aria-label={`Buka buku tahunan angkatan ${yearbook}`}
                className="group flex min-h-64 flex-col items-center justify-center rounded-xl border-2 border-amber-300/70 bg-stone-900 px-6 py-10 text-center text-white shadow-[0_20px_50px_-28px_rgba(41,37,36,0.75)] transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 sm:min-h-80"
              >
                <BookOpen
                  size={36}
                  strokeWidth={1.5}
                  className="mb-5 text-amber-300 transition-transform duration-300 group-hover:-rotate-6"
                />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
                  Buku Tahunan
                </span>
                <span className="mt-2 text-4xl font-extrabold sm:text-5xl">
                  {yearbook}
                </span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors group-hover:text-white">
                  Buka foto kelulusan
                  <ArrowRight size={17} />
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedAlumni && (
        <dialog
          ref={dialogRef}
          aria-labelledby="alumni-dialog-title"
          aria-describedby="alumni-dialog-description"
          onClose={() => setSelectedAlumni(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              dialogRef.current?.close();
            }
          }}
          className="m-auto w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-3xl bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/60"
        >
          <div className="relative grid sm:grid-cols-[0.9fr_1.1fr]">
            <div className="flex min-h-64 items-center justify-center bg-amber-100/70 p-6 sm:min-h-[26rem]">
              <img
                src={selectedAlumni.image}
                alt={selectedAlumni.alt}
                className={`max-h-[24rem] w-full rounded-xl object-contain ${selectedAlumni.imagePosition}`}
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <button
                type="button"
                aria-label="Tutup profil siswa"
                onClick={() => dialogRef.current?.close()}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition hover:bg-amber-50 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-amber-600"
              >
                <X size={20} />
              </button>
              <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                Buku Tahunan {selectedYearbook}
              </span>
              <h2
                id="alumni-dialog-title"
                className="mt-4 text-2xl font-extrabold leading-tight"
              >
                {selectedAlumni.name}
              </h2>
              {selectedAlumni.year && (
                <p className="mt-3 text-sm font-semibold text-amber-800">
                  {selectedAlumni.year}
                </p>
              )}
              <p
                id="alumni-dialog-description"
                className="mt-5 text-sm leading-7 text-slate-600"
              >
                {selectedAlumni.description
                  ? `Siswa program ${selectedAlumni.description}.`
                  : "Siswa SMK Al-Muhadjirin 1 Bekasi."}
              </p>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
