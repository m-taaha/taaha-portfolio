import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammad Taaha Ashraf — Full-Stack Engineer",
  description:
    "Building real-time distributed systems. Specialized in MERN, FastAPI, and C++. by create next app",
  openGraph: {
    title: "Taaha — Full-Stack Engineer",
    description: "Building real-time distributed systems.",
    url: "https://taaha.dev",
    siteName: "Taaha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Taaha Ashraf — Full-Stack Engineer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-text font-sans antialiased">
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        themes={["dark", "light"]}
        >
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
