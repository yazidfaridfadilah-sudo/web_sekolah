import Ui from "./Ui";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Majors() {
  return (
    <section
      id="jurusan"
      className="scroll-mt-20 bg-gradient-to-b from-yellow-100/80 via-amber-50/80 to-white px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-amber-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-800 shadow-sm shadow-amber-900/5">
            Program Keahlian
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Temukan jurusan yang{" "}
            <span className="text-amber-600">sesuai minatmu</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Pilihan program keahlian di SMK Al-Muhadjirin 1 Bekasi untuk
            membekali siswa dengan keterampilan yang siap digunakan di dunia
            kerja.
          </p>
        </motion.div>
        <Ui />
      </div>
    </section>
  );
}
