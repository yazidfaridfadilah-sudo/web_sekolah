import TanganIcon from "../../../assets/Tangan.png";
import MonitorIcon from "../../../assets/monitor.png";
import GedungIcon from "../../../assets/Gedung.png";
import OrangIcon from "../../../assets/Orang.png";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 30, scale: 0.97, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const features = [
  {
    title: "Fasilitas Lengkap",
    desc: "Sarana belajar yang mendukung kegiatan teori maupun praktik.",
    icon: MonitorIcon,
  },
  {
    title: "Lingkungan Nyaman",
    desc: "Suasana belajar yang aman, nyaman, dan mendukung perkembangan siswa.",
    icon: GedungIcon,
  },
  {
    title: "Pengajar Kompeten",
    desc: "Pembelajaran didampingi tenaga pendidik yang berpengalaman.",
    icon: OrangIcon,
  },
  {
    title: "Kerja Sama Luas",
    desc: "Membuka wawasan dan kesempatan untuk mengenal dunia kerja.",
    icon: TanganIcon,
  },
];

export default function WhyUs() {
  return (
    <section
      id="whyus"
      className="scroll-mt-20 bg-gradient-to-br from-[#fff8e5] via-[#fffdf7] to-amber-50/80 px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-4 inline-flex rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-900">
            Keunggulan Sekolah
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Bekal terbaik untuk{" "}
            <span className="text-amber-600">langkah berikutnya</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Kami mendukung siswa melalui lingkungan belajar dan pengalaman yang
            membantu mereka berkembang.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              variants={{
                hidden: {
                  opacity: 0,
                  x: index % 2 === 0 ? -32 : 32,
                  y: 24,
                  scale: 0.96,
                  filter: "blur(8px)",
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-[1.6rem] border border-amber-200/70 bg-gradient-to-br from-white via-white to-[#fff8e5] p-6 shadow-[0_12px_35px_-26px_rgba(120,80,18,0.4)] transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-900/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-200 to-amber-100 transition-colors group-hover:from-amber-300 group-hover:to-yellow-300">
                <img
                  src={feature.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <span className="text-xs font-bold tracking-widest text-amber-700">
                0{index + 1}
              </span>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {feature.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
