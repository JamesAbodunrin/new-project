type SubmissionConfirmationScreenProps = {
  submissionId: string;
};

export function SubmissionConfirmationScreen({
  submissionId,
}: SubmissionConfirmationScreenProps) {
  return (
    <section className="mx-auto w-full max-w-lg space-y-6 rounded-lg border border-slate-200 bg-white p-6 text-sm shadow-sm">
      <header className="space-y-1">
        <h1 className="text-lg font-semibold text-slate-900">
          Submission received
        </h1>
        <p className="text-xs text-slate-600">
          Your training submission has been recorded and is now pending admin
          review.
        </p>
      </header>

      <div className="rounded-md bg-slate-50 px-4 py-3 text-xs text-slate-700">
        <p className="font-medium">Submission reference</p>
        <p className="mt-1 break-all">{submissionId}</p>
      </div>

      <ul className="space-y-1 text-[11px] text-slate-600">
        <li>• Status will move to &quot;Pending Review&quot; (FR-015).</li>
        <li>• You&apos;ll be able to see feedback after the admin decision.</li>
        <li>
          • The next training unlocks only if this submission is approved
          (FR-021).
        </li>
      </ul>

      <button
        type="button"
        className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-950"
      >
        Back to dashboard
      </button>

      <p className="text-[11px] leading-relaxed text-slate-500">
        This screen is a presentational shell corresponding to FR-014. The
        navigation behavior and status updates will be implemented in a follow-up
        milestone.
      </p>
    </section>
  );
}

