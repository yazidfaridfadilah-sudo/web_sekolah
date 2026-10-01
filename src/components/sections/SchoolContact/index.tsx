import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";

const mapSearch = "SMK Al-Muhadjirin 1 Bekasi";
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapSearch)}`;
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapSearch)}&output=embed`;

export default function SchoolContact() {
  return (
    <main className="bg-[#fffaf0]">
      <section className="relative isolate flex min-h-[340px] items-center overflow-hidden bg-stone-950 px-5 pb-12 pt-28 sm:min-h-[380px] sm:px-8 sm:pb-14 sm:pt-32">
        <img
          src="/images/SchoolProfile.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/85 via-stone-950/65 to-stone-950/35"
        />
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 sm:text-sm">
              Hubungi Kami
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:mt-4 sm:text-5xl">
              Kami siap menyambutmu
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:mt-5 sm:text-base sm:leading-8">
              Temukan lokasi sekolah atau hubungi kami untuk mendapatkan
              informasi lebih lanjut tentang SMK Al-Muhadjirin 1 Bekasi.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
          <div className="rounded-[1.75rem] border border-amber-200/70 bg-white p-6 shadow-[0_20px_60px_-42px_rgba(120,80,18,0.45)] sm:p-8 lg:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-800">
              Informasi Sekolah
            </p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-stone-900 sm:text-3xl">
              Mari terhubung dengan kami
            </h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              Silakan kunjungi sekolah atau kirim pesan melalui WhatsApp untuk
              bertanya mengenai sekolah dan program keahlian.
            </p>

            <div className="mt-7 space-y-3">
              <div className="flex gap-4 rounded-2xl bg-[#fff9e8] p-4 sm:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-200/70 text-amber-900">
                  <MapPin size={20} />
                </span>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-sm font-bold text-stone-900">Lokasi Sekolah</h3>
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    SMK Al-Muhadjirin 1, Bekasi
                  </p>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950"
                  >
                    Buka di Google Maps
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-[#fff9e8] p-4 sm:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-200/70 text-amber-900">
                  <MessageCircle size={20} />
                </span>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-sm font-bold text-stone-900">WhatsApp</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    +62 856-1831-850
                  </p>
                  <a
                    href="https://wa.me/628561831850"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950"
                  >
                    Kirim pesan
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-h-[420px] flex-col overflow-hidden rounded-[1.75rem] border border-amber-200/70 bg-white p-2 shadow-[0_20px_60px_-42px_rgba(120,80,18,0.45)] sm:min-h-[480px]">
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
              <div>
                <h2 className="text-sm font-bold text-stone-900 sm:text-base">
                  Temukan lokasi kami
                </h2>
                <p className="mt-1 text-xs text-stone-500 sm:text-sm">
                  Bekasi, Jawa Barat
                </p>
              </div>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buka lokasi sekolah di Google Maps"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-900 transition-colors hover:bg-amber-200"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
            <iframe
              title="Peta lokasi SMK Al-Muhadjirin 1 Bekasi"
              src={mapEmbedUrl}
              className="min-h-[340px] w-full flex-1 rounded-[1.25rem] sm:min-h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}
