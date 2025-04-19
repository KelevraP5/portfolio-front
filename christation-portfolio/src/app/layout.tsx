"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

import { BackgroundProvider, useBackground } from "../contexts/HomeBgContext";

import layoutStyle from "styles/modules/layout.module.css";
import { abrilFatface } from "styles/fonts";

import { Header } from "components/header";
import { TrophySidebar } from "components/trophySidebar";
import Footer from "components/footer";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/pages/about";

  const { backgroundImage } = useBackground();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const [isTurnedOff, setIsTurnedOff] = useState(false);
  const switchScreenOff = () => {
    setIsTurnedOff((prevState) => !prevState);
  };

  return (
    <html lang="fr" className={abrilFatface.variable}>
      <body suppressHydrationWarning={true} className="antialiased">
        <div className="frame p-[40px] bg-[theme(colors.hex-black)] h-[100%] relative z-1">
          <div
            className={`${layoutStyle.logoOnOff} absolute bottom-1 left-[50%] w-[29px] h-[29px]`}
            onClick={switchScreenOff}
          >
            <FontAwesomeIcon
              icon={faPowerOff}
              className={`${layoutStyle.switch} w-full h-full ${
                isTurnedOff ? layoutStyle.off : layoutStyle.on
              }`}
            />
          </div>
          <div
            className={` ${layoutStyle.siteContainer} z-2 w-full h-full ${
              isTurnedOff ? layoutStyle.screenOff : ""
            } `}
          >
            <div
              className={`${layoutStyle.wrapper} ${
                isHome
                  ? layoutStyle.home
                  : isAbout
                  ? layoutStyle.about
                  : !isHome || !isAbout
                  ? layoutStyle.bgSite
                  : ""
              }`}
              style={{
                backgroundImage: backgroundImage
                  ? `linear-gradient(rgba(38, 43, 47, 0.4), rgba(38, 43, 47, 0.4)), url(${backgroundImage})`
                  : undefined,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              
            >
              <div className="header-trophies">
                <Header
                  isSidebarOpen={isSidebarOpen}
                  setIsSidebarOpen={setIsSidebarOpen}
                />
                <TrophySidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
              </div>

              <main className="w-full h-full overflow-hidden">{children}</main>

              <Footer />
            </div>
          </div>
        </div>
        <div className="overframe w-[40px] h-[100%] fixed top-0 left-0 z-50 bg-[theme(colors.hex-black)]"></div>
      </body>
    </html>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={abrilFatface.variable}>
      <body suppressHydrationWarning={true} className="antialiased">
        <BackgroundProvider>
          <LayoutContent>{children}</LayoutContent>
        </BackgroundProvider>
      </body>
    </html>
  );
}
