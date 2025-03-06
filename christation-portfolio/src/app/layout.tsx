"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

import "src/app/styles/globals.css";
import { abrilFatface } from "src/app/styles/fonts";

import { Header } from "src/components/header";
import { TrophySidebar } from "src/components/trophySidebar";
import Footer from "src/components/footer";

export default function RootLayout({ children,} : Readonly <{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isAbout = pathname === '/pages/about';

  // PENSEZ A FAIRE L'APPARITION DES IMAGES QUAND ON HOVER SUR 1 MENU

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  const [isTurnedOff, setIsTurnedOff] = useState(false);
  const switchScreenOff = () => {
    setIsTurnedOff(prevState => !prevState);
  }

  return (
    <html lang="fr" className={abrilFatface.variable}>
      <body suppressHydrationWarning={true} className="antialiased" >
        <div className="frame p-[40px] bg-[var(--hex-black)] h-[100%] relative z-1">
          <div className="logo-on-off absolute bottom-1 left-[50%] w-[29px] h-[29px]" onClick={switchScreenOff}>
            <FontAwesomeIcon icon={faPowerOff} className={`switch w-full h-full ${isTurnedOff ? 'off' : 'on'}`} />
          </div>
          <div className={`site-container z-2 w-full h-full ${!isHome && !isAbout ? "bg-site" : ""} ${isTurnedOff ? 'screen-off' : ''} `}>
            <div className={`wrapper ${isHome ? "home" : (isAbout ? "about" : "")}`}>
              <div className="header-trophies">
                <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <TrophySidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
              </div>

              <main className="w-full h-full overflow-hidden">
                {children}
              </main>

              <Footer />
            </div>
          </div>
        </div>
        <div className="overframe w-[40px] h-[100%] fixed top-0 left-0 z-50 bg-[var(--hex-black)]"></div>
      </body>
    </html>
  );
}
