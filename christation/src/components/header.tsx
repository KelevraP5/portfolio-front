"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { SwitchLangue } from "./switchLangue";

import iconeTrophee from "assets/iconeTrophee.svg";
import { tradText } from "../traductions/tradText";
import { useTranslation } from "../traductions/tradFunction";

import { routes } from "@/src/routes/routes";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export function Header({ isSidebarOpen, setIsSidebarOpen }: Readonly<HeaderProps>) {
  const routeFR = routes.fr;
  const routeEN = routes.en;

  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === "/en" || pathname === "/en/";

  const isEN = pathname.startsWith('/en');

  const translatedText = useTranslation(tradText);

  return (
    <div className="w-full h-[100px] px-[28px] py-[16px]">
      <div className="h-[100%] flex justify-between items-center">
        <div className="left-side flex gap-[32px]">
          <button type="button" className="flex gap-[8px] cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)} aria-label={translatedText.screenReader.sidebarBtn}>

            <Image src={iconeTrophee} width={60} height={60} alt={translatedText.alt.trophy} loading="eager"/>

            <div className="hidden sm:inline content-center cursor-pointer">
              <span className="trophy-text font-titre text-font-24px">{translatedText.trophies}</span>
            </div>
          </button>

          {isHome === false ? (
            <div className="menu-btn content-center cursor-pointer">
              {(isEN ?
                <Link href={routeEN.home} className="back-home font-titre text-font-24px" aria-label={translatedText.screenReader.mainPage}>{translatedText.backHome}</Link>
              :
                <Link href={routeFR.accueil} className="back-home font-titre text-font-24px" aria-label={translatedText.screenReader.mainPage}>{translatedText.backHome}</Link>
              )}
            </div>
          ) : null}
        </div>

        <div className="right-side flex gap-[32px]">
          <SwitchLangue screenReadMsgSwitch={translatedText.screenReader.switchLanguage}/>
        </div>
      </div>
    </div>
  );
}
