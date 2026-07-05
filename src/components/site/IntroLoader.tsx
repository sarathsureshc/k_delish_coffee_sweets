import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.style.overflow = "hidden";

    const holdTime = prefersReduced ? 200 : 1500;
    const timer = window.setTimeout(() => setDone(true), holdTime);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!done) return;
    document.documentElement.style.overflow = "";
  }, [done]);

  if (!visible) return null;

  return (
    <AnimatePresence onExitComplete={() => setVisible(false)}>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--color-ink)]"
        >
          <motion.div
            exit={{ scale: 1.08, opacity: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col items-center gap-6"
          >
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: EASE }}
                className="block font-display text-3xl font-light tracking-[0.02em] text-[var(--color-cream)] md:text-4xl"
              >
                K Delish
              </motion.span>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
              className="h-px w-24 origin-left bg-[var(--color-caramel-soft)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
