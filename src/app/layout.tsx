import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Custom fonts (default Next.js example fonts)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Update metadata
export const metadata: Metadata = {
  title: "Dating App ❤️",
  description: "Find your perfect match with our modern dating app built with Next.js + TypeScript + TailwindCSS 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-pink-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
