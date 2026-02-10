type AdminDashboardScreenProps = {
  // Placeholder for future filters like status, trainingId, traineeId, etc.
  view?: "pending" | "all";
};

export function AdminDashboardScreen({
  view = "pending",
}: AdminDashboardScreenProps) {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
          Admin dashboard
        </p>
        <h1 className="text-lg font-semibold text-slate-900">
          Submissions overview
        </h1>
        <p className="text-xs text-slate-600">
          Review trainee submissions, provide feedback, and approve or reject
          trainings.
        </p>
      </header>

      <div className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-2 text-[11px] text-slate-600">
        <span>
          Current view:{" "}
          <span className="font-medium">
            {view === "pending" ? "Pending review" : "All submissions"}
          </span>
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600">
          FR-016 · FR-017
        </span>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white text-xs">
        <div className="grid grid-cols-[1.5fr,1fr,1fr,1.5fr] border-b bg-slate-50 px-3 py-2 font-semibold text-slate-700">
          <span>Trainee</span>
          <span>Training</span>
          <span>Status</span>
          <span>Submitted at</span>
        </div>

        <div className="px-3 py-4 text-center text-[11px] text-slate-500">
          Table content is a placeholder. Submissions will be loaded from the API
          and rendered here in a later milestone.
        </div>
      </div>

      <p className="text-[11px] leading-relaxed text-slate-500">
        This dashboard focuses on layout and status visualization for admin
        workflows. Sorting, filtering, and navigation to specific submissions
        will be added as the API layer is implemented.
      </p>
    </section>
  );
}

