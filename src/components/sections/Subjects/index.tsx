import { BookOpen } from "lucide-react";
import { subjects } from "./subjectsData";

export default function Subjects() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#fff9e8,_#fffdf7_55%,_#f4f0e6)] px-5 pb-16 pt-28 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-300 text-stone-900 shadow-sm">
            <BookOpen size={23} strokeWidth={2} />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
              SMK Al-Muhadjirin 1 Bekasi
            </p>
            <h1 className="mt-1 text-2xl font-extrabold text-stone-900 sm:text-3xl">
              Mata Pelajaran
            </h1>
          </div>
        </header>

        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-[0_16px_40px_-30px_rgba(41,37,36,0.5)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead className="bg-stone-900 text-white">
                <tr>
                  <th scope="col" className="w-16 px-4 py-3 text-center font-bold">Kode</th>
                  <th scope="col" className="px-4 py-3 font-bold">Nama Mata Pelajaran</th>
                  <th scope="col" className="w-28 px-4 py-3 font-bold">Singkatan</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject) => (
                  <tr key={subject.code} className="border-t border-stone-200 even:bg-amber-50/50">
                    <th scope="row" className="px-4 py-2.5 text-center font-bold text-stone-700">
                      {subject.code}
                    </th>
                    <td className="px-4 py-2.5 text-stone-800">{subject.name}</td>
                    <td className="px-4 py-2.5 font-medium text-stone-700">{subject.abbreviation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}