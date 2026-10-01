import { motion } from "framer-motion";

const majors = [
  {
    name: "Rekayasa Perangkat Lunak",
    image: "/majors/software.jpg",
  },
  {
    name: "Teknik Instalasi Tenaga Listrik",
    image: "/majors/electrical.jpg",
  },
  {
    name: "Teknik Permesinan",
    image: "/majors/machining.jpg",
  },
  {
    name: "Teknik Komputer dan Jaringan",
    image: "/majors/computer-network.jpg",
  },
  {
    name: "Teknik Kendaraan Ringan",
    image: "/majors/light-vehicle.jpg",
  },
  {
    name: "Teknik Sepeda Motor",
    image: "/majors/motorcycle.jpg",
  },
];

export default function Ui() {
  return (
    <motion.div
      className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {majors.map((major, index) => (
        <motion.article
          key={major.name}
          variants={{
            hidden: {
              opacity: 0,
              y: 34,
              scale: 0.92,
              rotate: index % 2 === 0 ? -1.5 : 1.5,
              filter: "blur(8px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: 0,
              filter: "blur(0px)",
            },
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-amber-200/70 bg-[#fffefa] shadow-[0_14px_36px_-26px_rgba(120,80,18,0.45)] transition duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-900/10"
        >
          <span className="absolute right-4 top-4 z-10 rounded-full border border-amber-200 bg-white/90 px-2.5 py-1 text-xs font-bold tracking-widest text-amber-800 shadow-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex h-48 items-center justify-center bg-gradient-to-br from-[#fff0bb] via-yellow-100 to-amber-100 transition-colors duration-300 group-hover:from-yellow-200 group-hover:to-amber-200">
            <div className="flex h-36 w-36 items-center justify-center overflow-hidden rounded-2xl border border-amber-100 bg-white p-3 shadow-sm ring-4 ring-white/60">
              <img
                src={major.image}
                alt={`Logo ${major.name}`}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col bg-gradient-to-br from-white to-yellow-50/70 p-5">
            <h3 className="text-center text-base font-bold leading-snug text-slate-900">
              {major.name}
            </h3>
            <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 transition-all duration-300 group-hover:w-16" />
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
