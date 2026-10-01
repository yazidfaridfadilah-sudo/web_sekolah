import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollExperience() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  if (shouldReduceMotion) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-600 shadow-[0_0_16px_rgba(251,191,36,0.75)]"
        style={{ scaleX: progress }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="h-20 w-px bg-gradient-to-b from-transparent via-amber-500/70 to-transparent" />
        <span className="[writing-mode:vertical-rl] text-[9px] font-bold uppercase tracking-[0.35em] text-amber-900/45">
          Explore
        </span>
        <span className="h-20 w-px bg-gradient-to-b from-transparent via-amber-500/70 to-transparent" />
      </div>
    </>
  );
}
