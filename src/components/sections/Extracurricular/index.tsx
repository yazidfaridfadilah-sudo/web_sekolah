import BasketImage from "./Basket.jpg";
import futsalImage from "./futsal.jpg";
import HadrohImage from "./Hadroh.jpg";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 30, scale: 0.97, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
};

const activities = [
  {
    name: "Basket",
    year: "2020",
    image: BasketImage,
  },
  {
    name: "Futsal",
    year: "2021",
    image: futsalImage,
  },
  {
    name: "Hadroh",
    year: "2022",
    image: HadrohImage,
  },
];

export default function Extracurricular() {
  return (
    <section
      id="eskul"
      className="scroll-mt-20 bg-gradient-to-br from-[#fffdf7] via-[#fff6dc] to-amber-50/80 px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-4 inline-flex rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-900">
            Di Luar Kelas
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Ruang untuk{" "}
            <span className="text-amber-600">mengembangkan diri</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Temukan minat, bangun kebersamaan, dan kembangkan keterampilan
            melalui kegiatan ekstrakurikuler.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {activities.map((activity, index) => (
            <motion.article
              key={activity.name}
              variants={{
                hidden: {
                  opacity: 0,
                  x: index === 1 ? 0 : index === 0 ? -34 : 34,
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
              className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-amber-200/70 bg-[#fffefa] shadow-[0_14px_36px_-26px_rgba(120,80,18,0.45)] transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-900/10"
            >
              <div className="overflow-hidden bg-amber-50">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
                  Kegiatan siswa
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900">
                  {activity.name}
                </h3>
                <p className="mt-auto border-t border-amber-100 pt-4 text-xs font-medium text-slate-500">
                  Dibentuk pada {activity.year}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
