import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
        <div className=" mx-auto flex flex-col min-h-dvh w-full  bg-slate-200 text-slate-900 antialiased selection:bg-indigo-500 selection:text-white">
          <Header />
          <main className=" flex-1 min-h-svw px-4 py-8 sm:px-6 sm:py-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
