"use client";
import { useState } from "react";

import "./styles/globals.css";
import "./styles/reset.css";
import { abrilFatface } from "./styles/fonts";

import { Header } from "@/components/header";
import { TrophySidebar } from "@/components/trophySidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html lang="fr" className={abrilFatface.variable}>
      <body suppressHydrationWarning={true} className="antialiased">
        <div className="frame p-[40px] bg-[var(--hex-black)] h-[100%] z-1">
          <div className="site-container z-2 w-[100%] h-[100%]">
            <div className="wrapper">
              <div className="header-trophies">
                <Header
                  isSidebarOpen={isSidebarOpen}
                  setIsSidebarOpen={setIsSidebarOpen}
                />
                <TrophySidebar isOpen={isSidebarOpen} />
              </div>

              <main className="w-[100%] h-[100%]">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
