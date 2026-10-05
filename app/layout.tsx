import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { MotionConfig } from "framer-motion";

import "./globals.css";
import { ScrollProgress } from "./layout/ScrollProgress";

export { metadata } from "@/app/config/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">
          <ScrollProgress />

          {children}

          <Toaster position="bottom-right" richColors closeButton />
        </MotionConfig>
      </body>
    </html>
  );
}
