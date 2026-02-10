type ResetPasswordScreenProps = {
  token?: string;
};

export function ResetPasswordScreen({ token }: ResetPasswordScreenProps) {
  return (
    <section className="mx-auto w-full max-w-md space-y-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <header className="space-y-1">
        <h1 className="text-lg font-semibold text-slate-900">
          Reset your password
        </h1>
        <p className="text-xs text-slate-600">
          Choose a new password to secure your NeonFibre account.
        </p>
      </header>

      <div className="rounded-md bg-slate-50 px-3 py-2 text-[11px] text-slate-600">
        <p className="font-medium">Reset token (placeholder)</p>
        <p className="mt-1 break-all">
          {token ?? "Token will be read from the URL query in a later milestone."}
        </p>
      </div>

      <form className="space-y-4" aria-label="Reset password form">
        <div className="space-y-1">
          <label
            htmlFor="password"
            className="block text-xs font-medium text-slate-700"
          >
            New password
          </label>
          <input
            id="password"
            type="password"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="confirmPassword"
            className="block text-xs font-medium text-slate-700"
          >
            Confirm new password
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
          />
        </div>

        <button
          type="button"
          className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          disabled
        >
          Update password (placeholder)
        </button>
      </form>

      <p className="text-[11px] leading-relaxed text-slate-500">
        This is a static representation of the reset flow (FR-004, UI edge case
        3). Handling of expired/invalid tokens and redirects will be implemented
        later.
      </p>
    </section>
  );
}

