import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import { CountUp } from "./CountUp";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = ["Dubai's", "Sweetest", "Secret"];

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-[var(--color-ink)] text-[var(--color-cream)]"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <motion.img
          src={heroImg}
          alt="A slice of Nutella cheesecake with hazelnut crumble and glossy chocolate drip"
          className="h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 8, ease: "easeOut" }}
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ink)]/70 via-[var(--color-ink)]/25 to-[var(--color-ink)]/85" />
        <div
          aria-hidden
          className="kd-orb-a absolute -left-24 top-[10%] h-[380px] w-[380px] rounded-full bg-[var(--color-caramel)]/20 blur-[100px]"
        />
        <div
          aria-hidden
          className="kd-orb-b absolute -right-16 bottom-[5%] h-[320px] w-[320px] rounded-full bg-[var(--color-pistachio)]/15 blur-[110px]"
        />
        <div className="grain absolute inset-0" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.36em] text-[var(--color-caramel-soft)]"
        >
          <span className="h-px w-10 bg-[var(--color-caramel-soft)]" />
          Nadd Al Hamar · Dubai
        </motion.div>

        <h1 className="font-display text-[clamp(3.25rem,10vw,10rem)] font-light leading-[1.02] tracking-[-0.03em] text-balance">
          {words.map((w, i) => (
            <span key={i} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.15, ease: EASE, delay: 0.35 + i * 0.12 }}
                className={`inline-block ${i === 1 ? "italic text-[var(--color-caramel-soft)]" : ""}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.9 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-cream)]/80 text-pretty md:text-xl"
        >
          Cheesecake composed like couture. Espresso pulled with intention. A quiet
          corner of Dubai where indulgence takes its time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#order"
            data-cursor="order"
            className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-caramel)] px-7 py-4 text-sm uppercase tracking-[0.24em] text-[var(--color-ink)] transition-all duration-500 hover:bg-[var(--color-caramel-soft)] hover:shadow-[0_20px_60px_-20px_rgba(201,151,74,0.7)]"
          >
            Order Online
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#menu"
            data-cursor="view menu"
            className="inline-flex items-center gap-3 rounded-full border border-[var(--color-cream)]/60 px-7 py-4 text-sm uppercase tracking-[0.24em] transition-all duration-500 hover:border-[var(--color-cream)] hover:bg-[var(--color-cream)]/10"
          >
            View Menu
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="mt-14 flex items-end justify-between border-t border-[var(--color-cream)]/15 pt-6"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-display text-5xl leading-none text-[var(--color-caramel-soft)]">
              <CountUp to={4.8} decimals={1} />
            </span>
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-cream)]/70">
              <div className="flex gap-0.5 text-[var(--color-caramel-soft)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + i * 0.08 }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <div className="mt-1">Rated by our community</div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="hidden text-xs uppercase tracking-[0.32em] text-[var(--color-cream)]/60 sm:block"
          >
            <span className="mr-3">Scroll</span>
            <span className="inline-block h-8 w-px bg-[var(--color-caramel-soft)] align-middle" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}