import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Achievist App",
  description: "Coming soon...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B192C] flex flex-col items-center justify-center min-h-screen`}
      >
        {children}
      </body>
      {process.env.NEXT_PUBLIC_ANALYTICS_DISABLED == "false" && (
        <GoogleAnalytics gaId="G-YYY6WR7LRJ" />
      )}
    </html>
  );
}
