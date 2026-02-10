type LockedTrainingScreenProps = {
  trainingId: string;
};

export function LockedTrainingScreen({ trainingId }: LockedTrainingScreenProps) {
  return (
    <section className="mx-auto w-full max-w-lg space-y-6 rounded-lg border border-amber-100 bg-amber-50 p-6 text-sm text-slate-900 shadow-sm">
      <header className="space-y-1">
        <p className="text-[11px] font-medium uppercase tracking-wide text-amber-700">
          Training locked
        </p>
        <h1 className="text-lg font-semibold">
          Training {trainingId} is not yet unlocked
        </h1>
      </header>

      <p className="text-xs text-slate-800">
        This training unlocks only after you complete and receive approval for
        the previous training. This behavior enforces sequential progression as
        defined in the product scope.
      </p>

      <div className="space-y-2 rounded-md bg-white px-4 py-3 text-[11px] text-slate-700">
        <p className="font-medium">Why this training is locked</p>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>
            Your previous training is still pending review or has not been
            submitted.
          </li>
          <li>
            If the previous training was rejected, update your submission using
            the feedback provided.
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2 text-xs">
        <button
          type="button"
          className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-950"
        >
          Back to dashboard
        </button>
        <button
          type="button"
          className="inline-flex w-full items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
        >
          View feedback (if available)
        </button>
      </div>

      <p className="text-[11px] leading-relaxed text-slate-600">
        This screen aligns with FR-008 and the &quot;Submission Locked
        State&quot; UI definition. Navigation and conditional CTAs will be wired
        later.
      </p>
    </section>
  );
}

