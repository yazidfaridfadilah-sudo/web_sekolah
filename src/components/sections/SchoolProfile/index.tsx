import { ArrowRight } from "lucide-react";

export default function SchoolProfile() {
  return (
    <section
      id="tentang-kami"
      className="scroll-mt-20 bg-gradient-to-br from-[#fffdf7] via-amber-50/80 to-[#fff3cf] px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 h-2/3 w-2/3 rounded-[2rem] bg-gradient-to-br from-yellow-300 via-amber-300 to-amber-500 shadow-xl shadow-amber-800/15" />
            <img
              src="/images/SchoolProfile.jpg"
              alt="Suasana dan lingkungan SMK Al-Muhadjirin 1"
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[0_24px_60px_-24px_rgba(105,75,21,0.45)] ring-4 ring-white/80"
            />
            <div className="absolute -right-3 -top-3 rounded-2xl border border-amber-100 bg-[#fffdf7] px-5 py-4 shadow-lg shadow-amber-950/10 sm:right-5 sm:top-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Berlokasi di
              </p>
              <p className="mt-1 text-sm font-bold text-slate-900">Bekasi</p>
            </div>
          </div>

          <div>
            <span className="mb-4 inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
              Tentang Kami
            </span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Tumbuh, belajar, dan{" "}
              <span className="text-amber-600">mempersiapkan masa depan</span>
            </h2>
            <h3 className="mt-6 text-lg font-bold text-slate-900">
              Sambutan Kepala Sekolah
              <span className="mt-1 block text-sm font-medium text-slate-500">
                SMK Al-Muhadjirin 1 Bekasi
              </span>
            </h3>
            <p className="mt-5 leading-7 text-slate-600">
              Sekolah adalah tempat mencetak penerus bangsa yang berkualitas,
              berprestasi di berbagai bidang, dan siap menghadapi tantangan
              masa depan. Di SMK Al-Muhadjirin 1 Bekasi, kami percaya bahwa
              setiap siswa memiliki potensi yang dapat terus tumbuh melalui
              pendidikan, pengalaman, dan bimbingan yang tepat.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Kami berkomitmen mendukung setiap siswa dalam mengikuti
              pembelajaran yang bermakna, mengembangkan keterampilan sesuai
              minat, serta membangun karakter yang disiplin, mandiri, dan
              bertanggung jawab. Bekal pengetahuan dan keterampilan tersebut
              diharapkan dapat membantu mereka melangkah dengan percaya diri
              menuju dunia kerja maupun jenjang pendidikan berikutnya.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Bersama guru, orang tua, dan lingkungan sekitar, kami ingin
              menciptakan suasana belajar yang mendorong siswa untuk berani
              mencoba, terus belajar, dan meraih prestasi. Semoga pengalaman
              belajar di sekolah ini menjadi langkah yang berarti untuk
              mempersiapkan masa depan yang lebih baik.
            </p>
            <a
              href="/jurusan"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 transition hover:-translate-y-0.5 hover:shadow-amber-500/30"
            >
              Kenali program kami
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
