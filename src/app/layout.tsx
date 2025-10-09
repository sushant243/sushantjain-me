import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-hindi",
  weight: ["400", "700"],
  subsets: ["devanagari", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sushant Jain",
  description: "Personal brand website featuring Journal, Essays, Poetry & Short Stories",
};

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerifDevanagari.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
