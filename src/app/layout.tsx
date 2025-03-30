import type { Metadata } from "next";
import { Geist, Geist_Mono, Lalezar } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lalezar = Lalezar({
  variable: "--font-lalezar",
  weight: "400",
  subsets: ["latin", "arabic"],
});

export const metadata: Metadata = {
  title: "ام جی ساوند",
  description: "فروشگاه آنلاین تجهیزات صوتی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lalezar.variable} antialiased w-screen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
