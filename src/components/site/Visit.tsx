import { Reveal } from "./Reveal";

const HOURS = [
  { d: "Sun", h: "9:00 — 01:00" },
  { d: "Mon", h: "9:00 — 01:00" },
  { d: "Tue", h: "9:00 — 01:00" },
  { d: "Wed", h: "9:00 — 01:00" },
  { d: "Thu", h: "9:00 — 02:00" },
  { d: "Fri", h: "9:00 — 02:00" },
  { d: "Sat", h: "9:00 — 02:00" },
];

export function Visit() {
  const todayIdx = new Date().getDay(); // Sun=0
  return (
    <section id="visit" className="relative bg-[var(--color-cream-warm)] py-28 md:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.36em] text-[var(--color-espresso)]/60">
              <span className="h-px w-10 bg-[var(--color-caramel)]" />
              Visit
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-5xl font-light leading-[1] tracking-[-0.02em] text-[var(--color-espresso)] md:text-7xl">
              Find the <em className="text-[var(--color-caramel)]">quiet corner.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 space-y-6 text-[var(--color-espresso)]/85">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-espresso)]/55">
                  Address
                </div>
                <p className="mt-2 text-lg leading-relaxed">
                  Nadd Al Hamar,
                  <br />
                  Dubai, United Arab Emirates
                </p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-espresso)]/55">
                  Hours
                </div>
                <ul className="mt-3 divide-y divide-[var(--color-espresso)]/12">
                  {HOURS.map((h, i) => (
                    <li
                      key={h.d}
                      className={`flex items-baseline justify-between py-2.5 font-mono text-sm ${
                        i === todayIdx
                          ? "text-[var(--color-espresso)]"
                          : "text-[var(--color-espresso)]/60"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {i === todayIdx && (
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-caramel)]" />
                        )}
                        {h.d}
                      </span>
                      <span className="tabular-nums">{h.h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Nadd+Al+Hamar+Dubai"
                target="_blank"
                rel="noreferrer"
                data-cursor="open"
                className="inline-flex items-center gap-3 rounded-full bg-[var(--color-espresso)] px-6 py-3.5 text-xs uppercase tracking-[0.24em] text-[var(--color-cream)] transition-colors hover:bg-[var(--color-caramel)] hover:text-[var(--color-ink)]"
              >
                Get Directions →
              </a>
              <a
                href="tel:+971000000000"
                data-cursor="call"
                className="inline-flex items-center gap-3 rounded-full border border-[var(--color-espresso)] px-6 py-3.5 text-xs uppercase tracking-[0.24em] text-[var(--color-espresso)] transition-colors hover:bg-[var(--color-espresso)] hover:text-[var(--color-cream)]"
              >
                Call Now
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="md:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] shadow-[0_40px_100px_-40px_rgba(42,24,16,0.5)] md:aspect-auto md:h-full md:min-h-[560px]">
            <iframe
              title="K Delish location map"
              src="https://www.google.com/maps?q=Nadd+Al+Hamar+Dubai&output=embed"
              loading="lazy"
              className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[0.95]"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}