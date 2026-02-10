type FeedbackViewScreenProps = {
  trainingId: string;
  canResubmit?: boolean;
};

export function FeedbackViewScreen({
  trainingId,
  canResubmit = true,
}: FeedbackViewScreenProps) {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
          Feedback
        </p>
        <h1 className="text-lg font-semibold text-slate-900">
          Feedback for Training {trainingId}
        </h1>
        <p className="text-xs text-slate-600">
          This screen surfaces structured feedback after an admin decision, and
          optionally allows resubmission for multi-attempt trainings.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="space-y-2 rounded-lg border border-rose-100 bg-rose-50 p-4 text-xs text-slate-900">
          <h2 className="text-xs font-semibold text-rose-800">
            Areas to amend
          </h2>
          <p>
            Placeholder content. Admin guidance on what needs to be improved will
            be displayed here.
          </p>
        </section>

        <section className="space-y-2 rounded-lg border border-emerald-100 bg-emerald-50 p-4 text-xs text-slate-900">
          <h2 className="text-xs font-semibold text-emerald-800">
            Areas done well
          </h2>
          <p>
            Placeholder content. Positive feedback and strengths will be
            displayed here.
          </p>
        </section>
      </div>

      <div className="flex flex-col gap-2 text-xs">
        {canResubmit ? (
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md bg-sky-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-sky-800"
          >
            Resubmit training (placeholder)
          </button>
        ) : (
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm"
            disabled
          >
            Resubmission not allowed for this training
          </button>
        )}

        <button
          type="button"
          className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-950"
        >
          Back to dashboard
        </button>
      </div>

      <p className="text-[11px] leading-relaxed text-slate-500">
        This screen corresponds to FR-025 and FR-026 in the SRS and the Feedback
        View definitions in the UI/UX spec. Data loading and navigation will be
        added later.
      </p>
    </section>
  );
}

