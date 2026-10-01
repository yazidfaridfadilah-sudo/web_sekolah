import { ArrowLeft, UsersRound } from "lucide-react";

const directoryPages = {
  guru: {
    title: "Guru",
    description: "Tenaga pendidik SMK Al-Muhadjirin 1 Bekasi.",
  },
  siswa: {
    title: "Siswa",
    description: "Informasi dan profil siswa SMK Al-Muhadjirin 1 Bekasi.",
  },
  "staff-tata-usaha": {
    title: "Staff Tata Usaha",
    description: "Tenaga administrasi dan pelayanan SMK Al-Muhadjirin 1 Bekasi.",
  },
} as const;

export type DirectoryPage = keyof typeof directoryPages;

export default function SchoolDirectory({
  page,
}: {
  page: DirectoryPage;
}) {
  const details = directoryPages[page];

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[radial-gradient(ellipse_at_top_right,_#fff0bd,_transparent_48%),linear-gradient(135deg,_#fff9e8,_#fffdf7_60%,_#fff4d2)] px-5 pb-20 pt-32 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-amber-800"
        >
          <ArrowLeft size={16} />
          Kembali ke beranda
        </a>

        <section className="mt-8 rounded-[2rem] border border-amber-200/70 bg-[#fffefa]/90 px-6 py-10 shadow-[0_24px_70px_-40px_rgba(120,80,18,0.45)] sm:px-10 sm:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <UsersRound size={26} strokeWidth={1.8} />
            </span>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
              Warga Sekolah
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {details.title}
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              {details.description}
            </p>
          </div>

          <div className="mx-auto mt-10 flex min-h-48 max-w-2xl flex-col items-center justify-center rounded-2xl border border-dashed border-amber-200 bg-amber-50/50 px-6 py-10 text-center">
            <h2 className="text-lg font-bold text-slate-900">
              Data {details.title} belum tersedia
            </h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
              Profil akan ditampilkan di halaman ini setelah data {details.title.toLowerCase()} ditambahkan.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
