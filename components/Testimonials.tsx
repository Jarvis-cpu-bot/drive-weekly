import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="testimonials" data-shot="testimonials" className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Read by</p>
        <h2 className="font-display mt-2 max-w-xl text-3xl font-bold text-ink text-balance sm:text-4xl">
          Fleet leads, technicians, and owners who log their own numbers
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`rounded-md border border-rule bg-bg-raised p-6 ${i === 1 ? "sm:mt-6" : ""}`}
            >
              <blockquote className="text-[15px] leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-ink">{t.name}</span>
                <span className="block text-ink-dim">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
