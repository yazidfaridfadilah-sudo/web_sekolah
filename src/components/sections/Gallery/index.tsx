type GalleryCardProps = {
  image: string;
  title: string;
  description: string;
  className?: string;
};

function GalleryCard({
  image,
  title,
  description,
  className = "",
}: GalleryCardProps) {
  return (
    <article
      className={`group relative min-h-56 overflow-hidden rounded-2xl bg-slate-200 ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-base font-bold text-white">{title}</h3>
        <p className="mt-1 text-xs text-white/80">{description}</p>
      </div>
    </article>
  );
}

export default function Gallery() {
  return (
    <section
      id="galeri"
      className="scroll-mt-20 bg-gradient-to-br from-white via-white to-yellow-50/80 px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <span className="mb-4 inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
            Galeri Sekolah
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Cerita dalam{" "}
            <span className="text-amber-600">setiap kegiatan</span>
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Dokumentasi kegiatan belajar dan aktivitas siswa SMK Al-Muhadjirin
            1 Bekasi.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <GalleryCard
            image="/images/dhuha.png"
            title="Kegiatan Dhuha"
            description="Masjid Al-Muhadjirin"
            className="min-h-[420px] sm:row-span-2"
          />
          <GalleryCard
            image="/images/silat.png"
            title="Ekstrakurikuler Pencak Silat"
            description="Kegiatan siswa"
            className="min-h-64"
          />
          <GalleryCard
            image="/images/rpl.png"
            title="Praktik Rekayasa Perangkat Lunak"
            description="Laboratorium komputer"
            className="min-h-64"
          />
        </div>
      </div>
    </section>
  );
}
