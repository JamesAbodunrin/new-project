import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          Welcome to the NeonFibre Training Portal
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          This MVP provides a gated, admin-reviewed training experience where
          trainees progress through trainings sequentially. Choose how you want
          to continue.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <Link
          href="/login"
          className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300"
        >
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Trainee access
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Log in with your pre-created trainee account to view your assigned
              trainings and track your progress.
            </p>
          </div>
          <span className="mt-4 text-xs font-medium text-sky-700">
            Go to trainee login →
          </span>
        </Link>

        <Link
          href="/admin/login"
          className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300"
        >
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Admin / reviewer access
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Log in as an admin to review trainee submissions, provide feedback,
              and approve or reject trainings.
            </p>
          </div>
          <span className="mt-4 text-xs font-medium text-sky-700">
            Go to admin login →
          </span>
        </Link>
      </div>

      <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-xs text-slate-600">
        <p className="font-medium">MVP scope note</p>
        <p className="mt-1">
          This milestone contains page skeletons and placeholder components only.
          Authentication, gating logic, and data integrations will be implemented
          in subsequent milestones.
        </p>
      </div>
    </section>
  );
}
