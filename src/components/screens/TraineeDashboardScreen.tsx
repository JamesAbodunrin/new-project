type TrainingStatus =
  | "NOT_STARTED"
  | "STARTED"
  | "SUBMITTED"
  | "PENDING_REVIEW"
  | "APPROVED"
  | "REJECTED"
  | "LOCKED";

type TrainingCardProps = {
  id: string;
  title: string;
  status: TrainingStatus;
  orderIndex: number;
};

const MOCK_TRAININGS: TrainingCardProps[] = [
  { id: "training-1", title: "Training 1", status: "STARTED", orderIndex: 1 },
  { id: "training-2", title: "Training 2", status: "LOCKED", orderIndex: 2 },
];

export function TraineeDashboardScreen() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-lg font-semibold text-slate-900">
          Your trainings
        </h1>
        <p className="text-xs text-slate-600">
          Trainings are completed sequentially. Next trainings unlock only after
          approval of the previous one.
        </p>
      </header>

      <div className="rounded-md border border-slate-200 bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-medium text-slate-700">
            Training progression (placeholder data)
          </p>
          <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600">
            FR-005 · FR-006 · FR-007
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {MOCK_TRAININGS.map((training) => (
            <TrainingCard key={training.id} {...training} />
          ))}
        </div>
      </div>

      <p className="text-[11px] leading-relaxed text-slate-500">
        This dashboard focuses on layout, states, and copy. Real data loading,
        status derivation, and locked-state behavior will be wired to the API
        server and database according to the SRS and ERD.
      </p>
    </section>
  );
}

function TrainingCard({
  title,
  status,
  orderIndex,
}: TrainingCardProps) {
  const isLocked = status === "LOCKED";

  const statusLabelMap: Record<TrainingStatus, string> = {
    NOT_STARTED: "Not started",
    STARTED: "In progress",
    SUBMITTED: "Submitted",
    PENDING_REVIEW: "Pending review",
    APPROVED: "Approved",
    REJECTED: "Rejected",
    LOCKED: "Locked",
  };

  const badgeClassName =
    status === "APPROVED"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : status === "REJECTED"
        ? "bg-rose-50 text-rose-700 border-rose-200"
        : status === "PENDING_REVIEW" || status === "SUBMITTED"
          ? "bg-amber-50 text-amber-700 border-amber-200"
          : status === "LOCKED"
            ? "bg-slate-100 text-slate-600 border-slate-200"
            : "bg-sky-50 text-sky-700 border-sky-200";

  return (
    <article
      className={`flex flex-col rounded-lg border bg-white p-3 text-xs shadow-sm ${
        isLocked ? "opacity-80" : "hover:border-sky-300"
      }`}
      aria-disabled={isLocked}
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <div>
          <p className="text-[11px] font-medium text-slate-500">
            Training {orderIndex}
          </p>
          <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
        </div>
        <span
          className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${badgeClassName}`}
        >
          {status === "LOCKED" && (
            <span aria-hidden="true" className="text-[9px]">
              🔒
            </span>
          )}
          <span>{statusLabelMap[status]}</span>
        </span>
      </div>

      {isLocked ? (
        <p className="text-[11px] text-slate-600">
          Complete and get approval for the previous training to unlock this
          training.
        </p>
      ) : (
        <p className="text-[11px] text-slate-600">
          Open this training to view instructions and submit your response.
        </p>
      )}
    </article>
  );
}

