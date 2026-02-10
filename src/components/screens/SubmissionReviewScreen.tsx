type SubmissionReviewScreenProps = {
  submissionId: string;
};

export function SubmissionReviewScreen({
  submissionId,
}: SubmissionReviewScreenProps) {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
          Submission review
        </p>
        <h1 className="text-lg font-semibold text-slate-900">
          Review submission {submissionId}
        </h1>
        <p className="text-xs text-slate-600">
          Read the trainee&apos;s response, review any attached files, and
          provide structured feedback before approving or rejecting this
          submission.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-[1.6fr,1.4fr]">
        <section className="space-y-3 rounded-lg border border-slate-200 bg-white p-4 text-xs text-slate-900">
          <h2 className="text-xs font-semibold text-slate-800">
            Trainee submission (placeholder)
          </h2>
          <p className="text-[11px] text-slate-700">
            The trainee&apos;s text response, optional link, and uploaded files
            will be rendered here.
          </p>
        </section>

        <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-4 text-xs text-slate-900">
          <h2 className="text-xs font-semibold text-slate-800">
            Decision &amp; feedback
          </h2>

          <div className="space-y-2">
            <label
              htmlFor="feedbackAmend"
              className="block text-[11px] font-medium text-slate-700"
            >
              Areas to amend
            </label>
            <textarea
              id="feedbackAmend"
              rows={3}
              className="block w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-xs shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="Describe what needs to be improved..."
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="feedbackStrengths"
              className="block text-[11px] font-medium text-slate-700"
            >
              Areas done well
            </label>
            <textarea
              id="feedbackStrengths"
              rows={3}
              className="block w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-xs shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="Highlight what the trainee did well..."
            />
          </div>

          <div className="flex flex-col gap-2 pt-1 text-xs">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-md bg-emerald-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-300"
              disabled
            >
              Approve (placeholder)
            </button>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-md bg-rose-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-rose-800 disabled:cursor-not-allowed disabled:bg-slate-300"
              disabled
            >
              Reject (requires confirmation · placeholder)
            </button>
          </div>
        </section>
      </div>

      <p className="text-[11px] leading-relaxed text-slate-500">
        This screen represents FR-018, FR-019, and FR-020. Decision persistence,
        confirmation flows, and unlocking of subsequent trainings will be wired
        to the API in a later milestone.
      </p>
    </section>
  );
}

