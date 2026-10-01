import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";

const heroImages = [
  "/images/fotoSekolah.jpg",
  "/images/lapangan.jpg",
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.16]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative isolate flex min-h-[680px] h-[100svh] max-h-[920px] scroll-mt-20 items-center overflow-hidden bg-stone-950 px-5 pb-20 pt-28 sm:px-8"
    >
      {heroImages.map((image, index) => (
        <motion.img
          key={image}
          src={image}
          alt=""
          aria-hidden="true"
          fetchPriority={index === 0 ? "high" : "auto"}
          style={
            shouldReduceMotion
              ? undefined
              : { y: imageY, scale: imageScale }
          }
          className={`absolute inset-0 -z-20 h-full w-full object-cover object-center transition-opacity duration-[1200ms] motion-reduce:transition-none ${
            activeImage === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,17,12,0.88)_0%,rgba(20,17,12,0.68)_48%,rgba(20,17,12,0.24)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-950/55 via-transparent to-stone-950/35"
      />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          className="max-w-3xl"
          style={shouldReduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { delayChildren: 0.15, staggerChildren: 0.14 },
            },
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-200/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-200 shadow-sm backdrop-blur-sm"
          >
            <GraduationCap size={16} />
            Sekolah vokasi unggulan di Bekasi
          </motion.span>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Siapkan masa depan
            <span className="mt-2 block text-amber-300">
              SMK Al-Muhadjirin 1
            </span>
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(7px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg"
          >
            Ruang belajar untuk bertumbuh, mengasah keterampilan, dan meraih
            masa depan yang lebih percaya diri.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="/jurusan"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 px-7 py-3.5 text-sm font-bold text-stone-950 shadow-lg shadow-amber-950/25 transition hover:-translate-y-0.5 hover:shadow-amber-400/30"
            >
              Jelajahi Jurusan
              <ArrowRight size={18} />
            </a>
            <a
              href="/profil-sekolah"
              className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-amber-200 hover:bg-white/20"
            >
              Tentang Sekolah
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4 sm:bottom-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <p className="flex items-center gap-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            <span className="h-px w-8 bg-amber-300/80" />
            Belajar hari ini, berkarya untuk masa depan
            <span className="h-px w-8 bg-amber-300/80" />
          </p>
          <div
            role="group"
            aria-label="Pilih foto sorotan"
            className="flex items-center gap-2"
          >
            {heroImages.map((image, index) => (
              <button
                key={image}
                type="button"
                aria-label={`Tampilkan foto ${index + 1}`}
                aria-pressed={activeImage === index}
                onClick={() => setActiveImage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeImage === index
                    ? "w-7 bg-amber-300"
                    : "w-2 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-1px] left-1/2 h-14 w-[115%] -translate-x-1/2 rounded-[50%_50%_0_0] border-t border-amber-200/35 bg-[#fff8e5] shadow-[0_-12px_35px_rgba(255,220,130,0.12)] sm:h-20"
      />
    </section>
  );
}
