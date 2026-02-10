import Link from "next/link";

export function LoginScreen() {
  return (
    <section className="mx-auto w-full max-w-md space-y-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <header className="space-y-1">
        <h1 className="text-lg font-semibold text-slate-900">Log in</h1>
        <p className="text-xs text-slate-600">
          Use your pre-created NeonFibre account to access the Training Portal.
        </p>
      </header>

      <form className="space-y-4" aria-label="Login form">
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-slate-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="password"
            className="block text-xs font-medium text-slate-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
          />
        </div>

        <div className="flex items-center justify-between text-xs">
          <Link
            href="/forgot-password"
            className="font-medium text-sky-700 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="button"
          className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          disabled
        >
          Log in (placeholder)
        </button>
      </form>

      <p className="text-[11px] leading-relaxed text-slate-500">
        This is a UI skeleton only. Authentication behavior, error states, and
        role-based routing will be implemented in a later milestone.
      </p>
    </section>
  );
}

