import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EmergencyBanner from "@/components/layout/EmergencyBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Life Fountain Medical Centre | Excellence in Healthcare",
  description: "Experience world-class healthcare at Life Fountain Medical Centre. We provide compassionate care, advanced medical technology, and expert specialists for your family.",
  keywords: ["hospital", "medical centre", "doctors", "appointment booking", "healthcare", "surgery", "pediatrics", "maternity care"],
  authors: [{ name: "Life Fountain Medical Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50`}>
        <EmergencyBanner />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
