
interface NewsItem {
  date: string;
  title: string;
  author: string;
  image: string;
}

const news: NewsItem[] = [
  {
    date: "29 Juli 2026",
    title: "Safety Campaign: Membangun Budaya Tertib Berlalu Lintas di Lingkungan sekolah",
    author: "admin jirin",
    image: "images/Rectangle 36.jpg",
  },
  {
    date: "29 Juli 2026",
    title: "SMK Al Muhadjirin 1 Bekasi Perkuat Kerja Sama dengan Dunia Industri",
    author: "admin jirin",
    image: "images/Rectangle 42.jpg",
  },
  {
    date: "29 Juli 2026",
    title: "Aksi Peduli Lingkungan dan Bakti Sosial Siswa SMK Al Muhadjirin",
    author: "admin jirin",
    image: "images/Rectangle 43.jpg",
  },
  {
    date: "29 Juli 2025",
    title: "Upacara Bendera Sebagai Wujud Disiplin dan Nasionalisme",
    author: "admin jirin",
    image: "images/Rectangle 45.jpg",
  },
  {
    date: "26 Juli 2026",
    title: "Pembagian Rapor Semester Tahun Ajaran 2026/2027",
    author: "admin jirin",
    image: "images/Rectangle 52.jpg",
  },
  {
    date: "29 Juli 2026",
    title: "Penerimaan Peserta Didik Baru (PPDB) SMK Al Muhadjirin 1 Bekasi Dibuka",
    author: "admin jirin",
    image: "images/Rectangle 53.jpg",
  },
  {
    date: "20 Juli 2026",
    title: "Pelaksanaan Uji Kompetensi Keahlian Berjalan Lancar",
    author: "admin jirin",
    image: "images/Rectangle 55.jpg",
  },
  {
    date: "29 Juli 2026",
    title: "Peringatan Hari Santri Nasional di SMK Al Muhadjirin 1 Bekasi",
    author: "admin jirin",
    image: "images/Rectangle 56.jpg",
  },
];

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-36 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <span className="text-xs text-gray-400">{item.date}</span>
        <h3 className="text-sm font-bold text-[#1a1a1a] leading-snug line-clamp-3">
          {item.title}
        </h3>
        <span className="text-xs text-gray-400">By : {item.author}</span>
        <a
          href="#"
          className="text-xs font-semibold text-[#2b2fa3] hover:underline mt-1"
        >
          Baca Selengkapnya
        </a>
      </div>
    </div>
  );
}

export default function BeritaSection() {
  return (
    <div className="min-h-screen bg-[#f9e814] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] leading-snug">
            Berita Terbaru Di SMK
            <br />
            Al Muhadjirin 1 Bekasi
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#8a7f1a]">
            Berita Terbaru Tentang SMK Al Muhadjirin 1 Bekasi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {news.map((item) => (
            <NewsCard key={item.title} item={item} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-[#2b2fa3] text-white text-sm font-semibold px-8 py-3 rounded-lg hover:bg-[#23268a] transition-colors">
            Semua Berita
          </button>
        </div>
      </div>
    </div>
  );
}