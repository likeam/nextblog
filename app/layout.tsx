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
  title: "Blog",
  description: "Blog built by Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="max-h-svh ">
        <div className=" bg-slate-200 text-slate-900 antialiased selection:bg-indigo-500 selection:text-white">
          <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-black tracking-wider shadow-sm">
                  HB
                </span>
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  HB Digital Blog
                </span>
              </div>

              <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                <a href="" className="text-indigo-600 transition-colors">
                  Home
                </a>

                <a
                  href="/posts"
                  className="hover:text-slate-900 transition-colors"
                >
                  Posts
                </a>
              </nav>
            </div>
          </header>
          <main className=" flex-1 min-h-svw px-4 py-8 sm:px-6 sm:py-10">
            {children}
          </main>
          <footer className="mt-20 border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-xs text-slate-500">
                &copy; 2026 HB Digital. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs text-slate-400">
                <a href="#" className="hover:text-slate-600 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-slate-600 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
