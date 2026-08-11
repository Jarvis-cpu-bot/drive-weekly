export default function SiteFooter() {
  return (
    <footer className="border-t border-rule/60 bg-gauge px-5 py-10 text-gauge-ink/70 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>Wavelength Flowmatic · measured EV data, every Thursday</p>
        <p>
          Figures are bench-tested or fleet-logged. WLTP figures cited as published; real-world
          deltas are our own.
        </p>
      </div>
    </footer>
  );
}
