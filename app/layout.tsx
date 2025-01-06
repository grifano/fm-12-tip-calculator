import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import React from "react";
import { ToastContainer } from "react-toastify";

import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Splitter",
  description:
    "Easily calculate and split tips with this simple app. Perfect for dining out with friends or group gatherings. Quick, accurate, and user-friendly!",
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} bg-primary-500 antialiased`}>
        {children}
        <ToastContainer className="p-2" />
      </body>
    </html>
  );
}
