import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import s1 from "@/assets/story1.jpg";
import s2 from "@/assets/story2.jpg";
import s3 from "@/assets/story3.jpg";
import { Reveal } from "./Reveal";

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -120]);

  return (
    <section id="story" ref={ref} className="relative bg-[var(--color-cream)] py-28 md:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="md:col-span-5 md:pt-12">
          <Reveal>
            <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.36em] text-[var(--color-espresso)]/60">
              <span className="h-px w-10 bg-[var(--color-caramel)]" />
              Our Story
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-5xl font-light leading-[1] tracking-[-0.02em] text-[var(--color-espresso)] md:text-7xl">
              A small room, <em className="text-[var(--color-caramel)]">a large obsession.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-[var(--color-espresso)]/80 text-pretty">
              <p>
                K Delish began as a whispered address between friends — a hidden pocket of
                Nadd Al Hamar where the coffee arrived at a precise temperature and the
                cheesecake was cut with reverence.
              </p>
              <p>
                Today the recipes haven't wavered. Nutella still folds into silken
                cheesecake by hand. Pistachios are milled the morning of. Every espresso
                is pulled the way we drink it ourselves.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[var(--color-espresso)]/15 pt-8">
              <div>
                <div className="font-display text-4xl text-[var(--color-caramel)]">2019</div>
                <div className="mt-2 text-xs uppercase tracking-[0.28em] text-[var(--color-espresso)]/60">
                  Since
                </div>
              </div>
              <div>
                <div className="font-display text-4xl text-[var(--color-caramel)]">
                  12+
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.28em] text-[var(--color-espresso)]/60">
                  Signature desserts
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative col-span-1 h-[420px] sm:h-[520px] md:col-span-7 md:h-[720px]">
          <motion.div
            style={{ y: y1 }}
            className="absolute left-0 top-0 w-[62%] overflow-hidden rounded-[2px] shadow-[0_30px_80px_-30px_rgba(42,24,16,0.4)]"
          >
            <img
              src={s1}
              alt="Espresso and cheesecake on dark marble"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={1280}
            />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="absolute right-0 top-[22%] w-[48%] overflow-hidden rounded-[2px] shadow-[0_30px_80px_-30px_rgba(42,24,16,0.4)]"
          >
            <img
              src={s2}
              alt="Barista pouring milk into espresso"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={1280}
            />
          </motion.div>
          <motion.div
            style={{ y: y3 }}
            className="absolute bottom-0 left-[18%] w-[52%] overflow-hidden rounded-[2px] shadow-[0_30px_80px_-30px_rgba(42,24,16,0.4)]"
          >
            <img
              src={s3}
              alt="Pastry chef dusting powdered sugar on a cheesecake"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={1280}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}