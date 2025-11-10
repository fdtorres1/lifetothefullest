import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Life to the Fullest LLC | Therapy & Counseling in Oak Brook & Orland Park, IL",
  description: "Professional therapy and counseling services in Oak Brook and Orland Park, Illinois. Individual, couples, and family counseling for anxiety, depression, eating disorders, and more.",
  keywords: "therapy, counseling, psychologist, Oak Brook, Orland Park, Illinois, anxiety, depression, couples therapy, family counseling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <SchemaMarkup />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
