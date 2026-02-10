export function ForgotPasswordScreen() {
  return (
    <section className="mx-auto w-full max-w-md space-y-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <header className="space-y-1">
        <h1 className="text-lg font-semibold text-slate-900">
          Forgot your password?
        </h1>
        <p className="text-xs text-slate-600">
          Enter your registered email address and we&apos;ll send you a link to
          reset your password.
        </p>
      </header>

      <form className="space-y-4" aria-label="Forgot password form">
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

        <button
          type="button"
          className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          disabled
        >
          Send reset link (placeholder)
        </button>
      </form>

      <p className="text-[11px] leading-relaxed text-slate-500">
        This screen represents the &quot;Forgot Password&quot; flow (FR-003).
        Email delivery and error states will be wired up against the real email
        service in a later milestone.
      </p>
    </section>
  );
}

