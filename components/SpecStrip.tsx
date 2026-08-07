import Image from "next/image";
import { specNotes } from "@/lib/content";

// A modular strip that breaks the S6 canvas rhythm: a tight badge-typography photo
// running 2 cols, spec figures filling the remaining cols at a different aspect —
// intentionally not a repeat of the issue-grid card sizing above.
export default function SpecStrip() {
  return (
    <section id="specs" data-shot="spec-strip" className="border-y border-rule/60 bg-bg-sunken px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-6">
          <div className="relative overflow-hidden rounded-md border border-rule sm:col-span-2 sm:row-span-2">
            <div className="relative aspect-[16/9] sm:aspect-auto sm:h-full sm:min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1624092845179-879277f7d251?auto=format&fit=crop&w=1000&h=1000&q=80"
                alt="Embossed metal trim badge reading Explorer, mounted on a car body panel, shot in tight close-up."
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
                style={{ filter: "saturate(1.02) contrast(1.03) brightness(1.01)" }}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-ink/85 px-4 py-3 text-xs uppercase tracking-wide text-asphalt">
              Trim badge, tested unit
            </div>
          </div>

          {specNotes.map((s) => (
            <div key={s.label} className="rounded-md border border-rule bg-bg-raised p-5 sm:col-span-2">
              <dt className="text-xs uppercase tracking-wide text-ink-dim">{s.label}</dt>
              <dd className="font-display tabular mt-1 text-2xl font-bold text-ink sm:text-3xl">
                {s.value}
              </dd>
              <p className="mt-1 text-xs text-ink-dim">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
