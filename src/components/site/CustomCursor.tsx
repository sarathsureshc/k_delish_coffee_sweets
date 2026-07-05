import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 320, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 320, damping: 30, mass: 0.4 });
  const raf = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.documentElement.classList.add("kd-cursor-hide");

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
      });
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest?.(
        'a, button, [role="button"], input, textarea, select, [data-cursor]',
      ) as HTMLElement | null;
      if (interactive) {
        setHovering(true);
        const l = interactive.getAttribute("data-cursor");
        setLabel(l);
      } else {
        setHovering(false);
        setLabel(null);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("kd-cursor-hide");
      cancelAnimationFrame(raf.current);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden mix-blend-difference md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-cream)] text-[var(--color-espresso)]"
        animate={{
          width: label ? 72 : hovering ? 44 : 12,
          height: label ? 72 : hovering ? 44 : 12,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        {label && (
          <span className="flex h-full w-full items-center justify-center font-display text-[11px] uppercase tracking-[0.2em]">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}