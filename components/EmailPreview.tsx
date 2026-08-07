const ISSUE_NUMBER = 47;
const WORD_COUNT = 1180;
const WPM = 220;
const READ_MINS = Math.round(WORD_COUNT / WPM);

export default function EmailPreview() {
  return (
    <section
      id="preview"
      data-shot="email-preview"
      className="border-y border-rule/60 bg-bg-sunken px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Thursday. Figures, sources, conditions stated.
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
            The full issue. No clickback required.
          </h2>
        </div>

        {/* Email client chrome — modeled on a real inbox reading pane */}
        <div className="mx-auto max-w-2xl overflow-hidden rounded-sm border border-rule bg-[#fbfbfa] text-[#1c2024] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]">
          {/* Client toolbar */}
          <div className="flex items-center justify-between border-b border-[#e2e5e7] bg-[#f0f2f3] px-4 py-2.5">
            <div className="flex items-center gap-3 text-[#5b6469]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 5.5h10M3 5.5v6.2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5.5M3 5.5l1.8-2.5h6.4L13 5.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="2.5" y="3" width="11" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
                <path d="M2.5 4.5 8 8.5l5.5-4" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <div className="flex items-center gap-3 text-[#5b6469]">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 2.2l1.6 3.4 3.7.4-2.8 2.5.8 3.7L8 10.3 4.7 12.2l.8-3.7-2.8-2.5 3.7-.4L8 2.2Z"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinejoin="round"
                />
              </svg>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="2.5" y="4.5" width="11" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
                <path d="M2.5 6l5.5 4 5.5-4" stroke="currentColor" strokeWidth="1.1" />
              </svg>
            </div>
          </div>

          {/* Sender / subject block */}
          <div className="border-b border-[#e2e5e7] px-5 py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#1b4fd8]"
                  title="Unread"
                />
                <div>
                  <p className="text-sm font-semibold text-[#1c2024]">
                    Continuum Hyper{" "}
                    <span className="font-normal text-[#697077]">&lt;desk@continuumhyper.info&gt;</span>
                  </p>
                  <p className="mt-0.5 text-sm text-[#33383c]">
                    800V stopped being a spec-sheet flex. Here&apos;s the charge-curve proof.
                  </p>
                </div>
              </div>
              <span className="shrink-0 tabular text-xs text-[#697077]">6:00 AM</span>
            </div>
            <p className="tabular mt-2 pl-5 text-xs text-[#697077]">
              Issue {ISSUE_NUMBER} · {READ_MINS} min
            </p>
          </div>

          {/* Body — narrow measure, email typography */}
          <div className="max-w-[46ch] px-5 py-6 text-[15px] leading-relaxed text-[#26292c]">
            <p>Morning —</p>
            <p className="mt-3">
              Every manufacturer quotes peak kW. Almost none show you the taper. We put
              three 800V platforms on the same DC charger, same ambient temperature, same
              10% starting state of charge, and logged every second.
            </p>
            <blockquote className="my-4 bg-[#eef1f3] px-4 py-3 italic text-[#33383c]">
              &ldquo;The winner held 200 kW+ for six minutes longer than the platform with
              the higher headline number.&rdquo;
            </blockquote>
            <p>Three things worth your Thursday:</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>The full 0–100% curve for all three, plotted on one axis</li>
              <li>Why the peak-kW spec on the window sticker is close to meaningless alone</li>
              <li>A cold-weather correction table you can apply to any WLTP figure</li>
            </ul>
            <p className="mt-4">Drive safe out there.</p>
            <p className="mt-3">
              — Priya
              <br />
              <span className="text-[#697077]">Editor, Continuum Hyper</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
