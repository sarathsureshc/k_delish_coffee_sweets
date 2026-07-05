import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import amb from "@/assets/ambiance.jpg";
import { Reveal } from "./Reveal";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.28]);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative isolate flex min-h-[90svh] items-center overflow-hidden bg-[var(--color-ink)] text-[var(--color-cream)]"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img
          src={amb}
          alt="Cozy dim interior of K Delish café at dusk"
          className="h-full w-full object-cover"
          loading="lazy"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-[var(--color-ink)]/60" />
        <div className="grain absolute inset-0" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 py-32 text-center md:px-10">
        <Reveal>
          <div className="mb-8 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.36em] text-[var(--color-caramel-soft)]">
            <span className="h-px w-10 bg-[var(--color-caramel-soft)]" />
            The Experience
            <span className="h-px w-10 bg-[var(--color-caramel-soft)]" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display text-3xl font-light italic leading-[1.15] tracking-[-0.02em] text-balance md:text-6xl">
            "Low light, warm wood, the quiet clatter of ceramic on marble —
            <span className="text-[var(--color-caramel-soft)]"> a room built for lingering.</span>"
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 text-xs uppercase tracking-[0.32em] text-[var(--color-cream)]/70">
            Open daily · Nadd Al Hamar, Dubai
          </div>
        </Reveal>
      </div>
    </section>
  );
}