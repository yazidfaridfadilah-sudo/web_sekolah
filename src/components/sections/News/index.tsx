import { ArrowUpRight, CalendarDays } from "lucide-react";

interface NewsItem {
  date: string;
  title: string;
  author: string;
  image: string;
}

const news: NewsItem[] = [
  {
    date: "29 Juli 2026",
    title:
      "Safety Campaign: Membangun Budaya Tertib Berlalu Lintas di Lingkungan Sekolah",
    author: "Admin",
    image: "/images/Rectangle 36.jpg",
  },
  {
    date: "29 Juli 2026",
    title: "SMK Al-Muhadjirin 1 Bekasi Perkuat Kerja Sama dengan Dunia Industri",
    author: "Admin",
    image: "/images/Rectangle 42.jpg",
  },
  {
    date: "29 Juli 2026",
    title: "Aksi Peduli Lingkungan dan Bakti Sosial Siswa",
    author: "Admin",
    image: "/images/Rectangle 43.jpg",
  },
  {
    date: "29 Juli 2025",
    title: "Upacara Bendera sebagai Wujud Disiplin dan Nasionalisme",
    author: "Admin",
    image: "/images/Rectangle 45.jpg",
  },
  {
    date: "26 Juli 2026",
    title: "Pembagian Rapor Semester Tahun Ajaran 2026/2027",
    author: "Admin",
    image: "/images/Rectangle 52.jpg",
  },
  {
    date: "29 Juli 2026",
    title: "Penerimaan Peserta Didik Baru SMK Al-Muhadjirin 1 Bekasi",
    author: "Admin",
    image: "/images/Rectangle 53.jpg",
  },
  {
    date: "20 Juli 2026",
    title: "Pelaksanaan Uji Kompetensi Keahlian Berjalan Lancar",
    author: "Admin",
    image: "/images/Rectangle 55.jpg",
  },
  {
    date: "29 Juli 2026",
    title: "Peringatan Hari Santri Nasional di SMK Al-Muhadjirin 1 Bekasi",
    author: "Admin",
    image: "/images/Rectangle 56.jpg",
  },
];

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article     className="group overflow-hidden rounded-[1.6rem] border border-amber-200/70 bg-[#fffefa] shadow-[0_14px_36px_-26px_rgba(120,80,18,0.45)] transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-900/10">
      <div className="overflow-hidden bg-amber-50">
        <img
          src={item.image}
          alt=""
          className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex min-h-52 flex-col p-5">
        <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <CalendarDays size={14} className="text-amber-600" />
          {item.date}
        </span>
        <h3 className="mt-3 text-base font-bold leading-snug text-slate-900">
          {item.title}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-xs text-slate-500">Oleh {item.author}</span>
          <ArrowUpRight
            size={18}
            aria-hidden="true"
            className="text-amber-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </article>
  );
}

export default function NewsSection() {
  return (
    <section
      id="berita"
      className="scroll-mt-20 bg-gradient-to-br from-[#fff3cf] via-[#fff9e9] to-[#fffdf7] px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-amber-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
              Informasi Sekolah
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Kabar terbaru{" "}
              <span className="text-amber-600">sekolah</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Ikuti kegiatan, informasi, dan kabar terbaru dari SMK
              Al-Muhadjirin 1 Bekasi.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item) => (
            <NewsCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
