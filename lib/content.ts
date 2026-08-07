// Continuum Hyper — copy lives here, spec-sheet declarative register throughout.
// Measured claims, units, conditions. No "elevate," "seamless," "unlock," "supercharge."

export type Issue = {
  number: number;
  date: string;
  headline: string;
  dek: string;
  tag: string;
  readMins: number;
};

export const issues: Issue[] = [
  {
    number: 47,
    date: "Aug 4",
    headline: "Why 800V architecture stopped being a spec-sheet flex",
    dek: "Three platforms, three charge curves, one winner at 10–80%. We plotted all three.",
    tag: "Charging",
    readMins: 6,
  },
  {
    number: 46,
    date: "Jul 28",
    headline: "LFP vs NMC: the degradation data after 100k miles",
    dek: "Fleet telemetry from four ride-share operators, cross-checked against manufacturer claims.",
    tag: "Battery",
    readMins: 8,
  },
  {
    number: 45,
    date: "Jul 21",
    headline: "The heat pump line item nobody reads on the config page",
    dek: "9% winter range difference for a $400 option. Here's the WLTP-to-real-world gap by climate.",
    tag: "Range",
    readMins: 5,
  },
  {
    number: 44,
    date: "Jul 14",
    headline: "NACS adapters, ranked by voltage drop under load",
    dek: "We measured six adapters at 150kW. Two lost more than 4% to heat.",
    tag: "Charging",
    readMins: 7,
  },
  {
    number: 43,
    date: "Jul 7",
    headline: "Regen braking settings and the phantom range myth",
    dek: "One-pedal driving doesn't add range. It changes where you lose it. The math, plainly.",
    tag: "Efficiency",
    readMins: 4,
  },
];

export const specNotes = [
  { label: "WLTP range", value: "312 mi", note: "23 °C, 19-in wheels" },
  { label: "Peak DC rate", value: "240 kW", note: "10–80% in 18 min" },
  { label: "Efficiency", value: "3.4 mi/kWh", note: "combined, EPA cycle" },
  { label: "Pack chemistry", value: "NMC 811", note: "82.5 kWh usable" },
];

// Charge curve: seconds elapsed (x) vs charge rate in kW (y). This is the data the
// signature card's background traces — a real fast-charge taper, not a straight ramp.
export const chargeCurve: { t: number; kw: number; soc: number }[] = [
  { t: 0, kw: 40, soc: 10 },
  { t: 60, kw: 180, soc: 18 },
  { t: 150, kw: 240, soc: 32 },
  { t: 300, kw: 235, soc: 48 },
  { t: 480, kw: 190, soc: 62 },
  { t: 660, kw: 130, soc: 74 },
  { t: 840, kw: 80, soc: 80 },
  { t: 1080, kw: 35, soc: 92 },
  { t: 1320, kw: 11, soc: 100 },
];

// Range at 23°C (the WLTP condition) per 10% SoC step, used as the baseline the
// temperature slider scales against.
export const baseRangeAt23C = 312; // mi, full pack

// Real-world cold-weather range loss curve, approximate but grounded in published
// EPA/AAA cold-weather test deltas (~20-41% loss range depending on temp and usage).
export function rangeForTemp(tempC: number): number {
  // Loss ramps from 0% at 23°C to ~34% at -10°C, roughly linear per published AAA data.
  const delta = 23 - tempC;
  const lossPct = Math.max(0, Math.min(0.34, delta * 0.0103));
  return Math.round(baseRangeAt23C * (1 - lossPct));
}

export function chargeTimeForTemp(tempC: number): number {
  // Cold packs taper earlier — 10-80% time grows from 18 min at 23°C to ~31 min at -10°C.
  const delta = Math.max(0, 23 - tempC);
  return Math.round(18 + delta * 0.39);
}

// Combined efficiency in mi/kWh, baseline 3.4 at 23°C (matches specNotes). Cabin
// heating and pack conditioning drag efficiency down in the cold; cooling load does
// the same, more mildly, above WLTP temp — mirrors the same published cold-weather
// deltas that drive rangeForTemp, kept as a distinct figure (mi/kWh, not mi).
export function efficiencyForTemp(tempC: number): number {
  const delta = tempC - 23;
  const penalty = delta < 0 ? -delta * 0.021 : delta * 0.006;
  return Math.round(3.4 * (1 - Math.min(0.4, penalty)) * 10) / 10;
}

export const testimonials = [
  {
    name: "Priya Raman",
    role: "Fleet ops lead, Meridian Logistics",
    quote:
      "Issue 44's adapter voltage-drop numbers changed which cable we spec on 40 vans. Nobody else measured under actual load.",
  },
  {
    name: "Tom Okafor",
    role: "Service advisor, independent EV shop",
    quote:
      "I forward the battery degradation issue to every customer asking about used packs. Cited sources, not vibes.",
  },
  {
    name: "Dana Whitfield",
    role: "Long-haul EV owner, 61,000 mi logged",
    quote:
      "The cold-weather range piece matched my own logged data within 2%. First outlet to get that close.",
  },
];

export const faqs = [
  {
    q: "How often does an issue land?",
    a: "Every Thursday, 6am ET. 47 issues since launch, zero skipped weeks.",
  },
  {
    q: "Is this a manufacturer press-release digest?",
    a: "No. Every figure is measured, fleet-sourced, or cited to a primary test — EPA, AAA, or our own bench.",
  },
  {
    q: "Can I unsubscribe from a link, not a form?",
    a: "One click, no login, no survey. It's in the footer of every issue.",
  },
];
