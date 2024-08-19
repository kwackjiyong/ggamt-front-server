import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GGAMT",
  description: "Good Game Amount",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <h2>GGAMT.info</h2>
      {children}
      <span className="bottom-header">Data based on NEXON Open API</span>
      </body>
    </html>
  );
}
