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
    <article className={`group relative overflow-hidden ${className}`}>
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-x-0 bottom-0 bg-white/65 px-3 py-2 text-center backdrop-blur-[1px]">
        <h3 className="text-sm font-semibold leading-tight text-black md:text-base">
          {title}
        </h3>
        <p className="mt-0.5 text-[10px] leading-tight text-neutral-600 md:text-xs">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function Gallery() {
  return (
    <section className="bg-[#fff500] px-4 py-10 sm:px-8 md:py-0">
      <div className="mx-auto flex min-h-[550px] max-w-[850px] flex-col items-center justify-center bg-[#fff500] px-5 py-12 sm:px-10">
        <h2 className="mb-5 text-center text-2xl font-bold leading-snug text-black md:text-[25px]">
          Foto Dokumentasi Kegiatan
          <br />
          Smk Almuhadjirin Bekasi
        </h2>

        <div className="grid w-full max-w-[493px] grid-cols-1 gap-4 sm:grid-cols-[184px_1fr]">
          <GalleryCard
            image="/images/dhuha.png"
            title="Kegiatan Dhuha"
            description="Masjid AL-Muhadjirin"
            className="h-[310px]"
          />

          <div className="grid h-[310px] grid-rows-2 gap-3">
            <GalleryCard
              image="/images/silat.png"
              title="Ekskul Pencak silat"
              description="Lapangan Smk Almuhadjirin"
            />
            <GalleryCard
              image="/images/rpl.png"
              title="Kejurusan Rpl"
              description="Lab Smk almuhadjirin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
