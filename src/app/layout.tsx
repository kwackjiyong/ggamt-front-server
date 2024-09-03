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
      <div className="header">
        <h2>GGAMT.info</h2>
      </div>
      {children}
      <div className="footer">
        <span className="bottom-header">Data based on NEXON Open API</span>
      </div>
      </body>
    </html>
  );
}
