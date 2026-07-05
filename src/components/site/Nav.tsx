import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const LINKS = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#experience", label: "The Café" },
  { href: "#visit", label: "Visit" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const dark = scrolled || open;

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color,color] duration-500 ${
          dark
            ? "border-b border-[var(--color-espresso)]/10 bg-[var(--color-cream)]/75 text-[var(--color-espresso)] backdrop-blur-xl"
            : "border-b border-transparent text-[var(--color-cream)]"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#top"
            className="flex items-center gap-2"
            data-cursor="home"
            onClick={() => setOpen(false)}
          >
            <span className="font-display text-2xl font-medium tracking-tight">K Delish</span>
            <span className="hidden font-display text-[10px] uppercase tracking-[0.35em] opacity-70 sm:inline">
              Coffee · Sweets
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs uppercase tracking-[0.28em] opacity-80 transition-opacity hover:opacity-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#order"
              data-cursor="order"
              className={`group hidden items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition-colors sm:inline-flex md:px-5 md:py-2.5 ${
                dark
                  ? "border-[var(--color-espresso)] hover:bg-[var(--color-espresso)] hover:text-[var(--color-cream)]"
                  : "border-[var(--color-cream)]/70 hover:border-[var(--color-caramel)] hover:bg-[var(--color-caramel)] hover:text-[var(--color-ink)]"
              }`}
            >
              Order
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-9 w-9 flex-col items-center justify-center gap-[6px] md:hidden"
            >
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className={`block h-[1.5px] w-6 origin-center ${dark ? "bg-[var(--color-espresso)]" : "bg-[var(--color-cream)]"}`}
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1 }}
                transition={{ duration: 0.25 }}
                className={`block h-[1.5px] w-6 ${dark ? "bg-[var(--color-espresso)]" : "bg-[var(--color-cream)]"}`}
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className={`block h-[1.5px] w-6 origin-center ${dark ? "bg-[var(--color-espresso)]" : "bg-[var(--color-cream)]"}`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[var(--color-cream)] px-8 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.08 * i }}
                  className="border-b border-[var(--color-espresso)]/10 py-5 font-display text-4xl font-light text-[var(--color-espresso)]"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <motion.a
              href="#order"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.08 * LINKS.length }}
              className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-[var(--color-caramel)] px-7 py-4 text-sm uppercase tracking-[0.24em] text-[var(--color-ink)]"
            >
              Order Online →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
