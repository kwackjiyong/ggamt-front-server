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
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5780780376774208"
            crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
      <div className="header">
        <h2>GGAMT.info</h2>
      </div>
      <div className="body">
        {children}
      </div>
      <div className="footer">
        <span className="bottom-header">&nbsp; &nbsp; &nbsp; Data based on NEXON Open API</span>
      </div>
      </body>
    </html>
  );
}
