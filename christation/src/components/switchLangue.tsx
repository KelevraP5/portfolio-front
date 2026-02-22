"use client";

import { usePathname } from "next/navigation";

import Image from "next/image";
import iconeFR from "assets/iconeFR.svg";
import iconeENG from "assets/iconeENG.svg";

import switchLangueRoutes from "../routes/switchLangueRouteFunction";

type SwitchLangueProps = {
  screenReadMsgSwitch: string;
}

export function SwitchLangue({ screenReadMsgSwitch } : Readonly<SwitchLangueProps>) {
  const isEN = usePathname().startsWith("/en");

  const switchLangRoute = switchLangueRoutes();

  return (
    <button onClick={switchLangRoute} aria-label={screenReadMsgSwitch} className="cursor-pointer">
      {isEN ? (
        <Image src={iconeENG} width={60} height={60} alt="English" loading="eager"/>
      ) : (
        <Image src={iconeFR} width={60} height={60} alt="Français" loading="eager"/>
      )}
    </button>
  );
}

