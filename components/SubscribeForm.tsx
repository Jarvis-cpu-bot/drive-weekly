"use client";

import { useId, useState, type FormEvent } from "react";

type Status = "idle" | "error" | "success";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function SubscribeForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const inputId = useId();
  const errorId = useId();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-sm border border-success/50 bg-success/10 px-4 py-3 text-sm text-ink"
      >
        <span className="font-semibold text-success">Confirmed.</span> Issue 48 lands Thursday,
        6am ET. One email, no onboarding sequence.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={compact ? "" : "max-w-md"}>
      <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-ink">
        Email address
      </label>
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input
          id={inputId}
          type="email"
          name="email"
          required
          placeholder="you@yourgarage.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? errorId : undefined}
          className="w-full flex-1 rounded-sm border border-rule bg-bg-raised px-4 py-2.5 text-ink placeholder:text-ink-dim/70 focus-visible:border-accent"
        />
        <button
          type="submit"
          data-shot-cta
          className="shrink-0 rounded-sm bg-accent px-5 py-2.5 font-semibold text-accent-ink transition-all hover:bg-accent-bright hover:shadow-[0_4px_14px_-2px_rgba(27,79,216,0.5)] active:translate-y-px"
        >
          Subscribe — free
        </button>
      </div>
      {status === "error" && (
        <p id={errorId} role="alert" className="mt-2 text-sm text-warn">
          That address won&apos;t validate. Check for a typo and resubmit.
        </p>
      )}
      <p className="mt-2.5 text-xs text-ink-dim">
        One email a week, Thursdays. No spec sheets sold to advertisers. Unsubscribe in one click.
      </p>
    </form>
  );
}
