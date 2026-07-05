import { motion } from "motion/react";
import nutella from "@/assets/nutella.jpg";
import pistachio from "@/assets/pistachio.jpg";
import cakebites from "@/assets/cakebites.jpg";
import kinder from "@/assets/kinder.jpg";
import acai from "@/assets/acai.jpg";
import coffee from "@/assets/coffee.jpg";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    n: "01",
    name: "Nutella Cheesecake",
    desc: "Rich Nutella folded through silken cheesecake, finished with toasted hazelnut crumble and a glossy chocolate veil.",
    img: nutella,
    tall: true,
  },
  {
    n: "02",
    name: "Pistachio Cheesecake",
    desc: "Sicilian pistachios milled that morning, layered into a velvet cheesecake with the faintest whisper of orange blossom.",
    img: pistachio,
  },
  {
    n: "03",
    name: "Cake Bites",
    desc: "An edited box of small compositions — caramel, chocolate, rose, pistachio. One bite each, no compromises.",
    img: cakebites,
  },
  {
    n: "04",
    name: "Kinder Cookies",
    desc: "Slow-baked, still-warm centers with pockets of Kinder chocolate that melt into the crumb.",
    img: kinder,
    tall: true,
  },
  {
    n: "05",
    name: "Acai Bowl",
    desc: "Deep-purple acai crowned with fresh berries, banana, coconut, and a scatter of edible flowers.",
    img: acai,
  },
  {
    n: "06",
    name: "Specialty Coffee & Tea",
    desc: "Single-origin espresso, matcha whisked to a jade foam, and a rotating shelf of ceremonial teas.",
    img: coffee,
  },
];

export function Menu() {
  return (
    <section id="menu" className="relative bg-[var(--color-cream-warm)] py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.36em] text-[var(--color-espresso)]/60">
                <span className="h-px w-10 bg-[var(--color-caramel)]" />
                Signature Menu
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-5xl font-light leading-[1] tracking-[-0.02em] text-[var(--color-espresso)] md:text-7xl">
                Composed with <em className="text-[var(--color-caramel)]">care.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-[var(--color-espresso)]/70">
              A small, deliberate menu. Every item earns its place — no filler, no
              afterthoughts.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
          {ITEMS.map((it, i) => {
            const layoutClass =
              i === 0
                ? "md:col-span-7"
                : i === 1
                  ? "md:col-span-5 md:mt-24"
                  : i === 2
                    ? "md:col-span-4"
                    : i === 3
                      ? "md:col-span-8"
                      : i === 4
                        ? "md:col-span-6"
                        : "md:col-span-6 md:mt-16";
            return (
              <Reveal key={it.n} delay={0.05 * (i % 3)} className={layoutClass}>
                <MenuCard {...it} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MenuCard({
  n,
  name,
  desc,
  img,
  tall,
}: {
  n: string;
  name: string;
  desc: string;
  img: string;
  tall?: boolean;
}) {
  return (
    <motion.a
      href="#order"
      data-cursor="taste"
      className="group block"
      whileHover="hover"
    >
      <div
        className={`relative overflow-hidden rounded-[3px] bg-[var(--color-espresso)] ${
          tall ? "aspect-[4/5]" : "aspect-[5/6]"
        }`}
      >
        <motion.img
          src={img}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
          variants={{ hover: { scale: 1.06 } }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/85 via-[var(--color-ink)]/20 to-transparent"
          variants={{ hover: { opacity: 1 } }}
          initial={{ opacity: 0.75 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-[var(--color-cream)] md:inset-x-8 md:bottom-8">
          <div className="max-w-[80%]">
            <div className="font-display text-xs uppercase tracking-[0.32em] text-[var(--color-caramel-soft)]">
              {n}
            </div>
            <h3 className="mt-2 font-display text-2xl leading-tight md:text-3xl">
              {name}
            </h3>
            <motion.p
              className="mt-3 text-sm leading-relaxed text-[var(--color-cream)]/80 md:text-base"
              initial={{ opacity: 0, y: 10 }}
              variants={{ hover: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {desc}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.a>
  );
}