import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, mass: 0.3 });

  return (
    <motion.div
      style={{ scaleX: progress }}
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-[var(--color-caramel)]"
    />
  );
}
