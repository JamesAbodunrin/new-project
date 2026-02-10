type TrainingDetailScreenProps = {
  trainingId: string;
};

export function TrainingDetailScreen({ trainingId }: TrainingDetailScreenProps) {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
          Training detail
        </p>
        <h1 className="text-lg font-semibold text-slate-900">
          Training {trainingId}
        </h1>
        <p className="max-w-2xl text-xs text-slate-600">
          This screen represents the training instructions and submission form
          for an unlocked training (FR-009, FR-010, FR-011, FR-012, FR-013).
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-[2fr,1.4fr]">
        <section className="space-y-3 rounded-lg border border-slate-200 bg-white p-4">
          <h2 className="text-xs font-semibold text-slate-800">
            Instructions (placeholder)
          </h2>
          <p className="text-[11px] text-slate-600">
            Training instructions will be fetched from the API based on the
            training identifier and rendered here.
          </p>
        </section>

        <form
          className="space-y-4 rounded-lg border border-slate-200 bg-white p-4"
          aria-label="Training submission form"
        >
          <h2 className="text-xs font-semibold text-slate-800">
            Submit your response
          </h2>

          <div className="space-y-1">
            <label
              htmlFor="textResponse"
              className="block text-xs font-medium text-slate-700"
            >
              Text response <span className="text-rose-600">*</span>
            </label>
            <textarea
              id="textResponse"
              rows={5}
              className="block w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="Share your response here..."
            />
            <p className="text-[10px] text-slate-500">
              Required. This field must be completed before submission.
            </p>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="file"
              className="block text-xs font-medium text-slate-700"
            >
              File upload (optional)
            </label>
            <input
              id="file"
              type="file"
              className="block w-full text-[11px] text-slate-700 file:mr-3 file:rounded-md file:border file:border-slate-300 file:bg-slate-50 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-slate-700 file:hover:bg-slate-100"
            />
            <p className="text-[10px] text-slate-500">
              Supported formats and size limits will be enforced and displayed
              here in a later milestone.
            </p>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="link"
              className="block text-xs font-medium text-slate-700"
            >
              Optional link
            </label>
            <input
              id="link"
              type="url"
              className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="https://example.com"
            />
          </div>

          <button
            type="button"
            className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-slate-300"
            disabled
          >
            Submit training (placeholder)
          </button>
        </form>
      </div>

      <p className="text-[11px] leading-relaxed text-slate-500">
        Status transitions, attempt rules, and file upload behavior are not yet
        wired up. This milestone focuses on the structural layout matching the
        SRS and UI/UX specifications.
      </p>
    </section>
  );
}

