import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    quote:
      "The Nutella cheesecake is unreasonably good. Went for one slice, ordered a whole cake to take home.",
    name: "Layla A.",
    tag: "Regular",
  },
  {
    quote:
      "Cozy, calm, absurdly warm. It's the only café in Dubai where I actually put my phone away.",
    name: "Mateo R.",
    tag: "Google Review",
  },
  {
    quote:
      "Pistachio cheesecake tastes like something you'd find in a small Palermo pasticceria. Genuinely stunning.",
    name: "Sara K.",
    tag: "Solo diner",
  },
  {
    quote:
      "Their flat white is one of the best I've had in the city. And that's before you get to the desserts.",
    name: "Faisal M.",
    tag: "Google Review",
  },
  {
    quote:
      "A quiet hidden gem. Everything on the menu felt considered — nothing was there just to fill space.",
    name: "Nadia H.",
    tag: "Instagram",
  },
  {
    quote:
      "Went twice in one week. The acai bowl in the morning, cheesecake at night. No regrets, no notes.",
    name: "Omar T.",
    tag: "Regular",
  },
];

export function Reviews() {
  const doubled = [...REVIEWS, ...REVIEWS];
  return (
    <section className="relative overflow-hidden bg-[var(--color-espresso)] py-28 text-[var(--color-cream)] md:py-40">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.36em] text-[var(--color-caramel-soft)]">
                <span className="h-px w-10 bg-[var(--color-caramel-soft)]" />
                In their words
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-5xl font-light leading-[1] tracking-[-0.02em] md:text-7xl">
                Loved <em className="text-[var(--color-caramel-soft)]">locally.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-6xl text-[var(--color-caramel-soft)]">4.8</span>
              <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-cream)]/70">
                <div className="text-[var(--color-caramel-soft)]">★★★★★</div>
                <div className="mt-1">Across every platform</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="kd-marquee relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[var(--color-espresso)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[var(--color-espresso)] to-transparent" />
        <div className="kd-marquee-track flex w-max gap-6 px-6 md:gap-8 md:px-10">
          {doubled.map((r, i) => (
            <figure
              key={i}
              className="w-[86vw] max-w-[440px] shrink-0 rounded-[2px] border border-[var(--color-cream)]/12 bg-[var(--color-ink)]/60 p-8 backdrop-blur-sm md:p-10"
            >
              <div className="mb-5 text-[var(--color-caramel-soft)]">★★★★★</div>
              <blockquote className="font-display text-xl font-light leading-snug text-[var(--color-cream)] text-pretty md:text-2xl">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-[var(--color-cream)]/60">
                <span>{r.name}</span>
                <span>{r.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}