import Image from "next/image";
import { issues } from "@/lib/content";

const tagColor: Record<string, string> = {
  Charging: "text-accent",
  Battery: "text-warn",
  Range: "text-accent",
  Efficiency: "text-warn",
};

// Signature skeleton S6, deliberately uneven: a wide lead card carries the most recent
// issue at 2x width, three regular cards follow at 1x, and the fifth card runs full
// width as a low, wide strip — not a symmetrical 3-equal-card row.
export default function IssueGrid() {
  const [lead, ...rest] = issues;
  const [a, b, c] = rest;
  const wide = rest[3];

  return (
    <section id="issues" data-shot="issue-grid" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Archive</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-ink sm:text-4xl">
              Recent issues
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-ink-dim sm:block">
            Five issues, all still online. No paywall on the archive.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <LeadCard issue={lead} />
          <RegularCard issue={a} />
          <RegularCard issue={b} />
          <RegularCard issue={c} className="sm:col-span-2" />
          <WideCard issue={wide} />
        </div>
      </div>
    </section>
  );
}

function LeadCard({ issue }: { issue: (typeof issues)[number] }) {
  return (
    <article className="relative flex flex-col justify-end overflow-hidden rounded-md border border-rule bg-ink p-6 text-asphalt sm:col-span-2 sm:row-span-2 sm:p-8">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1767119454121-d57a4b61311e?auto=format&fit=crop&w=1400&h=1000&q=80"
          alt="Sunlit asphalt road surface with a painted white lane line, close crop showing aggregate texture."
          fill
          sizes="(min-width: 640px) 66vw, 100vw"
          className="object-cover"
          style={{ filter: "saturate(1.02) contrast(1.03) brightness(0.55)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      </div>
      <div className="relative">
        <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-asphalt/70">
          <span className={tagColor[issue.tag]}>{issue.tag}</span>
          <span>Issue {issue.number}</span>
          <span>{issue.date}</span>
          <span>{issue.readMins} min</span>
        </div>
        <h3 className="font-display mt-3 max-w-lg text-2xl font-bold leading-tight text-balance sm:text-3xl">
          {issue.headline}
        </h3>
        <p className="mt-3 max-w-md text-sm text-asphalt/80">{issue.dek}</p>
      </div>
    </article>
  );
}

function RegularCard({ issue, className = "" }: { issue: (typeof issues)[number]; className?: string }) {
  return (
    <article className={`flex flex-col justify-between rounded-md border border-rule bg-bg-raised p-5 ${className}`}>
      <div>
        <div className="flex items-center gap-2.5 text-xs uppercase tracking-wide text-ink-dim">
          <span className={tagColor[issue.tag]}>{issue.tag}</span>
          <span>·</span>
          <span>{issue.date}</span>
        </div>
        <h3 className="font-display mt-2.5 text-lg font-bold leading-snug text-ink text-balance">
          {issue.headline}
        </h3>
        <p className="mt-2 text-sm text-ink-dim">{issue.dek}</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-ink-dim">
        <span>Issue {issue.number}</span>
        <span className="tabular">{issue.readMins} min read</span>
      </div>
    </article>
  );
}

function WideCard({ issue }: { issue: (typeof issues)[number] }) {
  return (
    <article className="flex flex-col gap-3 rounded-md border border-rule bg-bg-raised p-5 sm:col-span-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
      <div>
        <div className="flex items-center gap-2.5 text-xs uppercase tracking-wide text-ink-dim">
          <span className={tagColor[issue.tag]}>{issue.tag}</span>
          <span>·</span>
          <span>{issue.date}</span>
          <span>·</span>
          <span>Issue {issue.number}</span>
        </div>
        <h3 className="font-display mt-2 text-lg font-bold text-ink">{issue.headline}</h3>
      </div>
      <p className="max-w-md text-sm text-ink-dim">{issue.dek}</p>
      <span className="tabular shrink-0 text-xs text-ink-dim">{issue.readMins} min read</span>
    </article>
  );
}
