export function AdminLoginScreen() {
  return (
    <section className="mx-auto w-full max-w-md space-y-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <header className="space-y-1">
        <h1 className="text-lg font-semibold text-slate-900">Admin login</h1>
        <p className="text-xs text-slate-600">
          Authenticate as an admin to review trainee submissions and manage
          progression.
        </p>
      </header>

      <form className="space-y-4" aria-label="Admin login form">
        <div className="space-y-1">
          <label
            htmlFor="adminEmail"
            className="block text-xs font-medium text-slate-700"
          >
            Email
          </label>
          <input
            id="adminEmail"
            type="email"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="adminPassword"
            className="block text-xs font-medium text-slate-700"
          >
            Password
          </label>
          <input
            id="adminPassword"
            type="password"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
          />
        </div>

        <button
          type="button"
          className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-950 disabled:cursor-not-allowed disabled:bg-slate-300"
          disabled
        >
          Log in as admin (placeholder)
        </button>
      </form>

      <p className="text-[11px] leading-relaxed text-slate-500">
        This admin login shell aligns with the Admin user flow and FR-001. Role
        differentiation, RBAC, and routing will be added on top of this layout.
      </p>
    </section>
  );
}

