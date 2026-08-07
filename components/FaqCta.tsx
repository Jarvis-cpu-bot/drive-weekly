import { faqs } from "@/lib/content";
import SubscribeForm from "./SubscribeForm";

export default function FaqCta() {
  return (
    <section
      id="faq"
      data-shot="faq-cta"
      className="border-t border-rule/60 bg-gauge px-5 py-16 text-gauge-ink sm:px-8 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-bright">
            Before you subscribe
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-balance sm:text-4xl">
            Get the next issue Thursday, 6am ET
          </h2>
          <p className="mt-4 max-w-md text-gauge-ink/75">
            No onboarding sequence, no upsell drip. One measured issue a week, archived
            and free to read regardless of whether you stay subscribed.
          </p>
          <div className="mt-8 max-w-md">
            <SubscribeForm compact />
          </div>
        </div>

        <dl className="divide-y divide-gauge-ink/15">
          {faqs.map((f) => (
            <div key={f.q} className="py-5 first:pt-0">
              <dt className="font-display font-semibold text-gauge-ink">{f.q}</dt>
              <dd className="mt-2 text-sm text-gauge-ink/70">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
