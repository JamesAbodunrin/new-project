import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeonFibre Training Portal (MVP)",
  description:
    "Gated, admin-reviewed training portal with sequential progression for NeonFibre trainees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950/5`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b bg-white/60 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-wide text-slate-600">
                  NeonFibre
                </span>
                <span className="text-base font-medium text-slate-900">
                  Training Portal (MVP)
                </span>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Sequential, reviewed trainings
              </span>
            </div>
          </header>

          <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-8">
            {children}
          </main>

          <footer className="border-t bg-white/60">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 text-xs text-slate-500">
              <span>NeonFibre Training Portal · MVP</span>
              <span>Manual review · No notifications · Web only</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
