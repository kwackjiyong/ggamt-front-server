import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "바람서적",
  description: "바람의나라 클래식 정보 공유",
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
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-TGQN3B4V22`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TGQN3B4V22');
          `,
          }}
        />
      </head>
      <body className={inter.className}>
      <div className="header">
        <h2>
          <a href="/" className="ggamt-title-a">
          舊바람서적
          </a>
        </h2>
      </div>
      <div className="body">
        {children}
      </div>
      <div className="footer">
        {/* <span className="bottom-header">&nbsp; &nbsp; &nbsp;</span> */}
      </div>
      </body>
    </html>
  );
}
