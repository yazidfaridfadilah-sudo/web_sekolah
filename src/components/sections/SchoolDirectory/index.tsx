import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Search,
  UsersRound,
  UserRound,
} from "lucide-react";
import { majorNames, students, teachers } from "./directoryData";

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
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setQuery("");
    setFilter("all");
    setCurrentPage(1);
  }, [page]);

  const pageSize = 8;
  const isStudentPage = page === "siswa";
  const isTeacherPage = page === "guru";
  const availableFilters = isStudentPage
    ? Object.keys(majorNames)
    : isTeacherPage
      ? [...new Set(teachers.map((teacher) => teacher.position))]
      : [];

  const members = useMemo(() => {
    if (isStudentPage) {
      return students
        .filter((student) => filter === "all" || student.major === filter)
        .filter((student) => student.name.toLocaleLowerCase("id").includes(query.toLocaleLowerCase("id")))
        .map((student) => ({
          name: student.name,
          detail: `${student.major} / B`,
          description: majorNames[student.major],
        }));
    }

    if (isTeacherPage) {
      return teachers
        .filter((teacher) => filter === "all" || teacher.position === filter)
        .filter((teacher) =>
          `${teacher.name} ${teacher.position}`
            .toLocaleLowerCase("id")
            .includes(query.toLocaleLowerCase("id")),
        )
        .map((teacher) => ({
          name: teacher.name,
          detail: teacher.position,
          description: "SMK Al-Muhadjirin 1 Bekasi",
        }));
    }

    return [];
  }, [filter, isStudentPage, isTeacherPage, query]);

  const totalPages = Math.ceil(members.length / pageSize);
  const visibleMembers = members.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const updateQuery = (value: string) => {
    setQuery(value);
    setCurrentPage(1);
  };

  const updateFilter = (value: string) => {
    setFilter(value);
    setCurrentPage(1);
  };

  return (
    <main className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_#fff0bd,_transparent_48%),linear-gradient(135deg,_#fff9e8,_#fffdf7_60%,_#fff4d2)] px-5 pb-16 pt-24 sm:px-8 sm:pt-28">
      <div className="pointer-events-none absolute -left-16 top-20 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-0 h-48 w-48 rounded-full bg-yellow-200/35 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white/70 hover:text-amber-800"
        >
          <ArrowLeft size={16} />
          Kembali ke beranda
        </a>

        <section className="mt-3">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-sm shadow-amber-900/5">
              <UsersRound size={26} strokeWidth={1.8} />
            </span>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
              Warga Sekolah
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {isStudentPage ? "Siswa Kelas 12 B" : details.title}
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              {isStudentPage
                ? "Kenali siswa kelas 12 dari program TITL, TKJ, dan RPL."
                : details.description}
            </p>
          </div>

          {isStudentPage || isTeacherPage ? (
            <>
              <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
                <label className="relative min-w-0 flex-1">
                  <Search
                    aria-hidden="true"
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => updateQuery(event.target.value)}
                    placeholder={isStudentPage ? "Cari nama siswa..." : "Cari nama guru..."}
                    aria-label={isStudentPage ? "Cari nama siswa" : "Cari nama guru"}
                    className="h-12 w-full rounded-full border border-slate-200 bg-white/90 pl-11 pr-4 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                  />
                </label>
                <label className="relative sm:w-56">
                  <select
                    value={filter}
                    onChange={(event) => updateFilter(event.target.value)}
                    aria-label={isStudentPage ? "Filter jurusan" : "Filter jabatan"}
                    className="h-12 w-full appearance-none rounded-full border border-slate-200 bg-white/90 px-5 pr-10 text-sm font-semibold text-slate-700 shadow-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                  >
                    <option value="all">{isStudentPage ? "Semua Jurusan" : "Semua Jabatan"}</option>
                    {availableFilters.map((item) => (
                      <option key={item} value={item}>
                        {isStudentPage ? `${item} - ${majorNames[item]}` : item}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                    <ChevronRight size={16} className="rotate-90" />
                  </span>
                </label>
              </div>

              <div className="mb-4 mt-7 flex items-center justify-between text-sm text-slate-600">
                <p>
                  <span className="font-bold text-slate-900">{members.length}</span>{" "}
                  {isStudentPage ? "siswa" : "guru"}
                </p>
              </div>

              {visibleMembers.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {visibleMembers.map((member) => (
                    <article
                      key={`${member.name}-${member.detail}`}
                      className="group relative min-h-40 overflow-hidden rounded-xl border border-amber-200/80 bg-white/85 p-4 shadow-[0_12px_30px_-24px_rgba(91,64,12,0.5)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_34px_-22px_rgba(91,64,12,0.35)]"
                    >
                      <span className="absolute -left-2 -top-2 h-8 w-8 rotate-45 bg-amber-300/80" />
                      <span className="absolute -bottom-7 -right-5 h-16 w-16 rotate-45 bg-yellow-200/80 transition group-hover:bg-amber-200" />
                      <div className="relative flex min-h-[104px] items-center gap-3">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-100 text-slate-800 ring-4 ring-amber-50">
                          <UserRound size={29} strokeWidth={1.7} />
                        </span>
                        <div className="min-w-0">
                          <h2 className="break-words text-sm font-extrabold leading-5 text-slate-900">
                            {member.name}
                          </h2>
                          <p className="mt-2 inline-flex max-w-full rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold leading-4 text-amber-900">
                            {member.detail}
                          </p>
                        </div>
                      </div>
                      <p className="relative mt-3 border-t border-slate-100 pt-3 text-xs leading-5 text-slate-500">
                        {member.description}
                      </p>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-amber-300 bg-white/60 px-6 py-12 text-center text-sm text-slate-600">
                  Data tidak ditemukan. Coba ubah kata pencarian atau filter.
                </div>
              )}

              {totalPages > 1 && (
                <nav aria-label="Halaman daftar" className="mt-7 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    aria-label="Halaman sebelumnya"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((value) => value - 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-amber-300 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <button
                      key={pageNumber}
                      type="button"
                      aria-label={`Halaman ${pageNumber}`}
                      aria-current={currentPage === pageNumber ? "page" : undefined}
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`h-9 min-w-9 rounded-full px-3 text-sm font-bold transition ${
                        currentPage === pageNumber
                          ? "bg-amber-400 text-slate-950 shadow-sm"
                          : "bg-white text-slate-700 hover:bg-amber-100"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}
                  <button
                    type="button"
                    aria-label="Halaman berikutnya"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((value) => value + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-amber-300 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronRight size={18} />
                  </button>
                </nav>
              )}
            </>
          ) : (
            <div className="mx-auto mt-10 flex min-h-48 max-w-2xl flex-col items-center justify-center rounded-2xl border border-dashed border-amber-200 bg-amber-50/50 px-6 py-10 text-center">
              <h2 className="text-lg font-bold text-slate-900">
                Data {details.title} belum tersedia
              </h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                Profil akan ditampilkan di halaman ini setelah data {details.title.toLowerCase()} ditambahkan.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
