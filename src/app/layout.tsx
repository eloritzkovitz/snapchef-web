import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
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
  title: "SnapChef",
  description: "SnapChef - AI Powered Recipe App",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { pathname: string };
}) {
  const isLoginPage = params.pathname === "/login";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Conditionally render the Navbar */}
        {!isLoginPage && <Navbar />}

        {/* Render the page content */}
        {children}
      </body>
    </html>
  );
}