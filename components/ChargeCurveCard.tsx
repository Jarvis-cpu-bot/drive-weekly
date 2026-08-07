"use client";

import { useEffect, useRef, useState } from "react";
import { chargeCurve, chargeTimeForTemp, efficiencyForTemp, rangeForTemp } from "@/lib/content";

const W = 520;
const H = 280;
const PAD_L = 8;
const PAD_B = 8;
const PAD_T = 8;

function buildPath() {
  const maxT = chargeCurve[chargeCurve.length - 1].t;
  const maxKw = Math.max(...chargeCurve.map((p) => p.kw));
  const x = (t: number) => PAD_L + (t / maxT) * (W - PAD_L - 8);
  const y = (kw: number) => H - PAD_B - (kw / maxKw) * (H - PAD_B - PAD_T);

  const points = chargeCurve.map((p) => [x(p.t), y(p.kw)] as const);
  const d = points.map(([px, py], i) => (i === 0 ? `M${px},${py}` : `L${px},${py}`)).join(" ");
  const area = `${d} L${points[points.length - 1][0]},${H - PAD_B} L${points[0][0]},${H - PAD_B} Z`;
  // Path length share at 80% state-of-charge (index 6 of 8 segments), used to split
  // the "fills fast then slows" entry animation into a 0-80% fast leg and a slowed tail.
  const fastLegIndex = chargeCurve.findIndex((p) => p.soc >= 80);
  return { d, area, points, fastLegFrac: fastLegIndex / (points.length - 1) };
}

// Signature element: the card's own background IS this live charge curve. Motion
// strategy "Charge" — the curve fills 0-80% quickly on entry, then visibly slows for
// the last 20%, mirroring real DC fast-charge taper behaviour. The full curve and all
// data are always present in the DOM (never gated behind the animation) so headless
// renders and reduced-motion users see complete, correct content.
export default function ChargeCurveCard() {
  const [charged, setCharged] = useState(false);
  const [tempC, setTempC] = useState(23);
  const ref = useRef<HTMLDivElement>(null);
  const { d, area, fastLegFrac } = buildPath();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reveal = () => setCharged(true);
    const fallback = window.setTimeout(reveal, 500);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          window.clearTimeout(fallback);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const range = rangeForTemp(tempC);
  const chargeMins = chargeTimeForTemp(tempC);
  const rangeDeltaPct = Math.round(((range - 312) / 312) * 100);
  const efficiency = efficiencyForTemp(tempC);

  return (
    <div
      ref={ref}
      id="range"
      className="relative overflow-hidden rounded-md border border-rule bg-gauge text-gauge-ink"
      data-shot="charge-curve-card"
    >
      {/* the curve — full data always drawn, chart is the card's background. Confined
          to the lower band of the card (below the header/figures/slider text) and
          dimmed so it reads as a background trace, not a line crossing the glyphs. */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="absolute inset-x-0 bottom-0 h-[42%] w-full opacity-60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ccc-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2f63f0" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#2f63f0" stopOpacity="0" />
          </linearGradient>
          <clipPath id="ccc-fast">
            <rect
              x={0}
              y={0}
              width={W * fastLegFrac}
              height={H}
              style={{
                transformBox: "fill-box",
                transformOrigin: "left",
                transform: `scaleX(${charged ? 1 : 0})`,
                transition: "transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </clipPath>
          <clipPath id="ccc-tail">
            <rect
              x={W * fastLegFrac}
              y={0}
              width={W * (1 - fastLegFrac)}
              height={H}
              style={{
                transformBox: "fill-box",
                transformOrigin: "left",
                transform: `scaleX(${charged ? 1 : 0})`,
                // Slows for the last 20% — longer duration, delayed start, gentler ease.
                transition: "transform 1.9s cubic-bezier(0.3, 0, 0.2, 1) 1.1s",
              }}
            />
          </clipPath>
        </defs>

        <path d={area} fill="url(#ccc-area)" />
        <g clipPath="url(#ccc-fast)">
          <path d={d} fill="none" stroke="#5b86ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g clipPath="url(#ccc-tail)">
          <path d={d} fill="none" stroke="#2f63f0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>

      <div className="relative flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gauge-ink/70">
            Charge curve · 10–80% DC fast charge
          </h3>
          <span className="font-display text-xs uppercase tracking-wide text-gauge-ink/50">240 kW peak</span>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div>
            <div className="font-display tabular text-3xl font-bold sm:text-4xl">{range} mi</div>
            <div className="mt-1 text-xs text-gauge-ink/60">
              range at {tempC} °C{rangeDeltaPct !== 0 ? ` (${rangeDeltaPct}%)` : ""}
            </div>
          </div>
          <div>
            <div className="font-display tabular text-3xl font-bold sm:text-4xl">{chargeMins} min</div>
            <div className="mt-1 text-xs text-gauge-ink/60">10–80% at {tempC} °C</div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="font-display tabular text-3xl font-bold sm:text-4xl">{efficiency} mi/kWh</div>
            <div className="mt-1 text-xs text-gauge-ink/60">combined efficiency at {tempC} °C</div>
          </div>
        </div>

        <TempSlider tempC={tempC} onChange={setTempC} />
      </div>
    </div>
  );
}

function TempSlider({ tempC, onChange }: { tempC: number; onChange: (v: number) => void }) {
  const sliderId = "ambient-temp-slider";
  return (
    <div className="border-t border-gauge-ink/15 pt-5">
      <div className="mb-2 flex items-center justify-between">
        <label htmlFor={sliderId} className="text-xs uppercase tracking-wide text-gauge-ink/70">
          Ambient temperature
        </label>
        <span className="font-display tabular text-sm font-semibold">{tempC} °C</span>
      </div>
      <input
        id={sliderId}
        type="range"
        min={-10}
        max={35}
        step={1}
        value={tempC}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label="Ambient temperature in Celsius, adjusts range and charge time"
        aria-valuetext={`${tempC} degrees Celsius`}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-gauge-ink/25 accent-[#5b86ff]"
      />
      <div className="mt-1.5 flex justify-between text-[10px] uppercase tracking-wide text-gauge-ink/40">
        <span>−10 °C</span>
        <span>23 °C WLTP</span>
        <span>35 °C</span>
      </div>
    </div>
  );
}
