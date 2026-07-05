import { Reveal } from "./Reveal";

export function FooterCta() {
  return (
    <footer
      id="order"
      className="relative isolate overflow-hidden bg-[var(--color-ink)] text-[var(--color-cream)]"
    >
      <div className="kd-gradient-anim pointer-events-none absolute inset-0 -z-10 opacity-70 bg-[radial-gradient(80%_60%_at_20%_10%,rgba(201,151,74,0.35),transparent_60%),radial-gradient(60%_50%_at_90%_90%,rgba(168,183,154,0.18),transparent_60%),linear-gradient(180deg,#151210,#2A1810_60%,#151210)]" />
      <div className="grain pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <Reveal>
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.36em] text-[var(--color-caramel-soft)]">
            <span className="h-px w-10 bg-[var(--color-caramel-soft)]" />
            Come hungry, leave slower
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-5xl font-display text-6xl font-light leading-[0.95] tracking-[-0.03em] text-balance md:text-[9rem]">
            A cheesecake is <em className="text-[var(--color-caramel-soft)]">waiting</em> for you.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a
              href="#"
              data-cursor="order"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-caramel)] px-8 py-4 text-sm uppercase tracking-[0.24em] text-[var(--color-ink)] transition-all duration-500 hover:bg-[var(--color-caramel-soft)] hover:shadow-[0_20px_60px_-20px_rgba(201,151,74,0.7)]"
            >
              Order Online
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--color-cream)]/60 px-8 py-4 text-sm uppercase tracking-[0.24em] transition-all duration-500 hover:border-[var(--color-cream)] hover:bg-[var(--color-cream)]/10"
            >
              Visit Us
            </a>
          </div>
        </Reveal>

        <div className="mt-24 grid grid-cols-2 gap-10 border-t border-[var(--color-cream)]/15 pt-12 md:grid-cols-4">
          <div>
            <div className="font-display text-2xl">K Delish</div>
            <p className="mt-3 text-xs uppercase tracking-[0.28em] text-[var(--color-cream)]/60">
              Coffee · Cheesecake · Dubai
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-cream)]/50">
              Find us
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-cream)]/85">
              Nadd Al Hamar
              <br />
              Dubai, UAE
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-cream)]/50">
              Contact
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-cream)]/85">
              hello@kdelish.ae
              <br />
              +971 · · ·
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-cream)]/50">
              Follow
            </div>
            <div className="mt-3 flex flex-col gap-1.5 text-sm text-[var(--color-cream)]/85">
              <a href="https://instagram.com" className="hover:text-[var(--color-caramel-soft)]">Instagram</a>
              <a href="https://tiktok.com" className="hover:text-[var(--color-caramel-soft)]">TikTok</a>
              <a href="https://google.com" className="hover:text-[var(--color-caramel-soft)]">Google</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-cream)]/10 pt-8 text-xs uppercase tracking-[0.28em] text-[var(--color-cream)]/50">
          <span>© {new Date().getFullYear()} K Delish Coffee & Sweets</span>
          <span>Made with care in Dubai</span>
        </div>
      </div>
    </footer>
  );
}