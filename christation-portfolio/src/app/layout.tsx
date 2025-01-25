"use client";
import { useState } from "react";

import "@/app/styles/globals.css";
import "@/app/styles/reset.css";
import { abrilFatface } from "@/app/styles/fonts";

import { Header } from "@/components/header";
import { TrophySidebar } from "@/components/trophySidebar";
import Home from "@/app/pages/index";

export default function RootLayout({
  children,
} : Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  return (
    <html lang="fr" className={abrilFatface.variable}>
      <body suppressHydrationWarning={true} className="antialiased">
        <div className="frame p-[40px] bg-[var(--hex-black)] h-[100%] z-1">
          <div className="site-container z-2 w-[100%] h-[100%]">
            <div className="wrapper">
              <div className="header-trophies">
                <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <TrophySidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
              </div>

              <main className="w-[100%] h-[20%]">
                <Home />
              </main>
            </div>
          </div>
        </div>
        <div className="overframe w-[40px] h-[100%] fixed top-0 left-0 z-50 bg-[var(--hex-black)]"></div>
      </body>
    </html>
  );
}
