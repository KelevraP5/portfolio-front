"use client";

import { useState, useEffect, useRef } from "react";

import layoutStyle from "styles/modules/layout.module.css";

import { useBackground } from "../contexts/HomeBgContext";
import { LanguageProvider } from "../contexts/LanguageContext";

import { Header } from "components/header";
import { TrophySidebar } from "components/trophySidebar";
import Footer from "components/footer";

import LogoOnOff from "components/logoOnOff";
import { useTranslation } from "../traductions/tradFunction";
import { tradText } from "../traductions/tradText";

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({
  children,
}: Readonly<LayoutClientProps>) {
  const contentRef = useRef<HTMLDivElement>(null);

  const { backgroundImage, defaultBackground } = useBackground();
  const bgToShow = backgroundImage ?? defaultBackground;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);

  const [isTurnedOff, setIsTurnedOff] = useState(false);

  const translatedText = useTranslation(tradText);

  useEffect(() => {
    if (bgToShow) {
      const img = new Image();
      img.src = bgToShow.src;
    }
  }, [bgToShow]);

  return (
    <div className={layoutStyle.content}>
      <div
        className={`${layoutStyle.frame} p-[40px] bg-[theme(colors.hex-black)] h-[100%] relative z-1`}
      >
        {/* Sidebar */}
        <aside
          className={`${layoutStyle.fullSidebar} absolute top-[140px] left-0 h-full`}
        >
          <TrophySidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </aside>

        {/* Conteneur principal du site */}
        <div
          className={`${layoutStyle.siteContainer} z-2 w-full h-full ${isTurnedOff ? layoutStyle.screenOff : ""}`}
        >
          {isSidebarOpen && (
            <button
              type="button"
              className={layoutStyle.overlay}
              onClick={closeSidebar}
              aria-label={translatedText.screenReader.closeSidebar}
            />
          )}

          {/* Gère la transition des différents fonds et gère aussi le manque d'interaction si la sidebar est ouverte*/}
          <div
            ref={contentRef}
            className={`${layoutStyle.wrapper} ${layoutStyle.bgSite} ${isSidebarOpen ? layoutStyle.noEvents : ""}`}
            inert={isSidebarOpen}
            aria-hidden={isSidebarOpen}
            style={{
              backgroundImage: bgToShow ? `url(${bgToShow.src})` : undefined,
              transition: "background-image 0.35s ease-in-out",
            }}
          >
            <LanguageProvider>
              <header>
                <Header
                  isSidebarOpen={isSidebarOpen}
                  setIsSidebarOpen={setIsSidebarOpen}
                />
              </header>
            </LanguageProvider>

            <main className="overflow-hidden">{children}</main>

            <Footer />
          </div>
        </div>

        <div className={`${layoutStyle.logoOnOff} inline`}>
          <LogoOnOff
            isTurnedOff={isTurnedOff}
            toggle={() => setIsTurnedOff((prev) => !prev)}
            screenReadMsgOn={translatedText.screenReader.turnOn}
            screenReadMsgOff={translatedText.screenReader.turnOff}
          />
        </div>
      </div>

      {/* Overframe permet de faire en sorte que la sidebar passe à l'intérieur de l'écran et non par dessus le cadre */}
      <div
        className={`${layoutStyle.overframe} block w-[40px] h-[100%] fixed top-0 left-0 z-50 bg-[theme(colors.hex-black)]`}
      ></div>
    </div>
  );
}
