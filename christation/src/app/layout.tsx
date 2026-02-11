import "styles/globals.css";

import { abrilFatface } from "./styles/fonts";

import { BackgroundProvider } from "../contexts/HomeBgContext";
import { LanguageProvider } from "../contexts/LanguageContext";

import LayoutClient from "@/src/app/layoutClient";

import Link from "next/link";
import Head from "next/head";

type RootLayoutProps = {
  children: React.ReactNode;
  preloadBg?: { src: string; alt?: string };
};

export default function RootLayout({
  children,
  preloadBg,
}: Readonly<RootLayoutProps>) {
  
  return (
    <html lang="fr" className={abrilFatface.variable}>
      <Head>
        {preloadBg && <Link rel="preload" as="image" href={preloadBg.src} />}
      </Head>
      <body className="antialiased" suppressHydrationWarning={true}>
        <LanguageProvider>
          <BackgroundProvider>
            <LayoutClient>{children}</LayoutClient>
          </BackgroundProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
