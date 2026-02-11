"use client";

import { useState, useEffect } from "react";

import { useBackground } from "../contexts/HomeBgContext";

import layoutStyle from "styles/modules/layout.module.css";

import { LanguageProvider } from "../contexts/LanguageContext";

import { Header } from "components/header";
import { TrophySidebar } from "components/trophySidebar";
import Footer from "components/footer";

import LogoOnOff from "components/logoOnOff";

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: Readonly<LayoutClientProps>) {
  const { backgroundImage, defaultBackground } = useBackground();
  const bgToShow = backgroundImage ?? defaultBackground;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);
  const [isTurnedOff, setIsTurnedOff] = useState(false);

  useEffect(() => {
  if (bgToShow) {
    const img = new Image();
    img.src = bgToShow.src;
  }
}, [bgToShow]);

  return (

      <div className={layoutStyle.content}>
        <div className={`frame p-[40px] bg-[theme(colors.hex-black)] h-[100%] relative z-1`}>

          {/* Conteneur principal du site */}
          <div className={`${layoutStyle.siteContainer} z-2 w-full h-full ${isTurnedOff ? layoutStyle.screenOff : ""}`}>
            <div className={`${layoutStyle.wrapper} ${layoutStyle.bgSite}`} style={{
                backgroundImage: bgToShow
                  ? `url(${bgToShow.src})`
                  : undefined,
                  transition: "background-image 0.35s ease-in-out"
              }}>

              {/* Header + Sidebar */}
              <div className="header-trophies">
                <LanguageProvider>
                  <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                </LanguageProvider>
                
                <TrophySidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
              </div>

              <main className="w-full h-full overflow-hidden">{children}</main>
              
              <Footer />
            </div>
          </div>

          {/* Bouton Logo On/Off */}
          <LogoOnOff isTurnedOff={isTurnedOff} toggle={() => setIsTurnedOff((prev => !prev))}/>
        </div>

        {/* Overframe permet de faire en sorte que la sidebar passe à l'intérieur de l'écran et non par dessus le cadre */}
        <div className="overframe w-[40px] h-[100%] fixed top-0 left-0 z-50 bg-[theme(colors.hex-black)]"></div>
      </div>
  );
}
