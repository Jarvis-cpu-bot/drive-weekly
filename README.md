# Drive Weekly

An EV newsletter landing page for buyers and enthusiasts who read past the press release,
built for one job: get an EV buyer to type their email into the subscribe form.

## Design direction

The palette is daylight asphalt `#DCE0E3`, deliberately moved off a near-black ground —
a car's spec sheet is read in daylight, not on a dark dashboard. Deep-charge blue `#1B4FD8`
(CCS connector blue) and rapid-orange `#E8590C` (charger-housing orange) carry the accents,
set in Chakra Petch (techno display) over Titillium Web (techno body). The signature element
is the charge-curve range card: its background is a live SVG plot of a real DC fast-charge
taper, with range and charge-time figures that recalculate live against a working ambient-
temperature slider. The only motion on the page is that curve filling in on entry — fast to
80%, then visibly slowing for the last 20%, mirroring real charging behaviour.

## Run it

```bash
npm install
npm run dev    # http://localhost:3000 (or -p 3017 per the build's assigned port)
npm run build
```

## Structure

- `app/` — root layout (fonts, metadata, no-flash theme script) and the single page
- `components/` — one component per section; `ChargeCurveCard` holds the signature
  interaction and the entry animation; `IssueGrid` is the uneven modular card canvas;
  `EmailPreview` is the newsletter mockup styled as a real inbox reading pane
- `lib/content.ts` — all copy: issues, spec notes, testimonials, the charge-curve dataset
  and the temperature-to-range/charge-time model
