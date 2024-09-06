import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../util/gtag';

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
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
