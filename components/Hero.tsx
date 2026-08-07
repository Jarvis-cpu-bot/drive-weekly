import ChargeCurveCard from "./ChargeCurveCard";
import SubscribeForm from "./SubscribeForm";

export default function Hero() {
  return (
    <section
      id="top"
      data-shot="hero"
      className="border-b border-rule/60 px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Issue 47 · every Thursday
          </p>
          <h1 className="font-display mt-4 max-w-2xl text-[2.5rem] font-bold leading-[1.05] tracking-tight text-ink text-balance sm:text-6xl">
            312 mi WLTP. 240 kW peak. We publish the number the brochure rounds off.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-ink-dim text-pretty">
            Range figures, charge curves, and battery data for buyers who read past the
            press release. Measured on a bench or logged from a fleet — never copied from
            a spec sheet we didn&apos;t verify.
          </p>
          <div id="subscribe" className="mt-8">
            <SubscribeForm />
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div>
              <dt className="text-ink-dim">Issues sent</dt>
              <dd className="font-display tabular text-xl font-bold text-ink">47</dd>
            </div>
            <div>
              <dt className="text-ink-dim">Vehicles bench-tested</dt>
              <dd className="font-display tabular text-xl font-bold text-ink">63</dd>
            </div>
            <div>
              <dt className="text-ink-dim">Average read time</dt>
              <dd className="font-display tabular text-xl font-bold text-ink">6 min</dd>
            </div>
          </dl>
        </div>

        <ChargeCurveCard />
      </div>
    </section>
  );
}
