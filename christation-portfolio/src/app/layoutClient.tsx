"use client";

import { useState } from "react";

import { BackgroundProvider } from "../contexts/HomeBgContext";

import layoutStyle from "styles/modules/layout.module.css";

import { Header } from "components/header";
import { TrophySidebar } from "components/trophySidebar";
import Footer from "components/footer";

import LogoOnOff from "components/logoOnOff";

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: Readonly<LayoutClientProps>) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);

  const [isTurnedOff, setIsTurnedOff] = useState(false);

  return (

      <div className={layoutStyle.content}>
        <div className={`frame p-[40px] bg-[theme(colors.hex-black)] h-[100%] relative z-1`}>
          
          {/* Bouton Logo On/Off */}
          <LogoOnOff isTurnedOff={isTurnedOff} toggle={() => setIsTurnedOff((prev => !prev))}/>

          {/* Conteneur principal du site */}
          <div className={`${layoutStyle.siteContainer} z-2 w-full h-full ${isTurnedOff ? layoutStyle.screenOff : ""}`}>
            <div className={`${layoutStyle.wrapper} ${layoutStyle.bgSite}`}>

              {/* Header + Sidebar */}
              <div className="header-trophies">
                <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <TrophySidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
              </div>

              <BackgroundProvider>
                <main className="w-full h-full overflow-hidden">{children}</main>
              </BackgroundProvider>
             
              <Footer />
            </div>
          </div>
        </div>

        {/* Overframe permet de faire en sorte que la sidebar passe à l'intérieur de l'écran et non par dessus le cadre */}
        <div className="overframe w-[40px] h-[100%] fixed top-0 left-0 z-50 bg-[theme(colors.hex-black)]"></div>
      </div>
  );
}
