import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/60 bg-bg/92 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-lg font-bold uppercase tracking-tight text-ink sm:text-xl">
          Wavelength Flowmatic
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm text-ink-dim sm:flex">
          <a href="#range" className="transition-colors hover:text-ink">
            Charge curve
          </a>
          <a href="#issues" className="transition-colors hover:text-ink">
            Issues
          </a>
          <a href="#preview" className="transition-colors hover:text-ink">
            Read one
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#subscribe"
            className="rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-bright"
          >
            Subscribe
          </a>
        </div>
      </div>
    </header>
  );
}
