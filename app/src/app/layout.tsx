import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/Header';
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
  title: "Hyvingemation",
  description: "Hyva, Hyvempi, Hyvinge",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Header />
          <main className="flex-1 mx-8 my-6 px-8 py-6 rounded-lg shadow-md bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
