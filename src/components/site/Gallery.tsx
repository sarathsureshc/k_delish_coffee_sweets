import g1 from "@/assets/gallery1.jpg";
import g2 from "@/assets/gallery2.jpg";
import g3 from "@/assets/gallery3.jpg";
import nutella from "@/assets/nutella.jpg";
import acai from "@/assets/acai.jpg";
import coffee from "@/assets/coffee.jpg";
import cakebites from "@/assets/cakebites.jpg";
import { Reveal } from "./Reveal";

const IMGS = [nutella, g1, cakebites, g2, coffee, g3, acai];

export function Gallery() {
  return (
    <section className="relative bg-[var(--color-cream)] py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.36em] text-[var(--color-espresso)]/60">
                <span className="h-px w-10 bg-[var(--color-caramel)]" />
                @kdelish
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl font-light leading-[1] tracking-[-0.02em] text-[var(--color-espresso)] md:text-6xl">
                Frames from the counter.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="follow"
              className="hidden shrink-0 text-xs uppercase tracking-[0.28em] text-[var(--color-espresso)]/70 underline-offset-4 hover:text-[var(--color-caramel)] hover:underline md:inline"
            >
              Follow on Instagram →
            </a>
          </Reveal>
        </div>
      </div>

      <div className="scrollbar-none overflow-x-auto">
        <div className="flex w-max gap-4 px-6 md:gap-6 md:px-10">
          {IMGS.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="view"
              className="group block overflow-hidden rounded-[2px]"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className={`${
                  i % 2 === 0 ? "h-[380px] md:h-[520px]" : "h-[320px] md:h-[440px]"
                } w-auto object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}