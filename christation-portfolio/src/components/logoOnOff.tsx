"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

import switchStyle from "styles/modules/components/logoOnOff.module.css";

interface LogoOnOffProps {
  initialState?: boolean; 
}

export default function LogoOnOff({ initialState = false }: Readonly<LogoOnOffProps>) {
  const [isTurnedOff, setIsTurnedOff] = useState(initialState);

  const toggle = () => setIsTurnedOff(prev => !prev);

  return (
    <button
      type="button"
      className={`${switchStyle.logoOnOff} absolute bottom-1 left-[50%] w-[29px] h-[29px]`}
      onClick={toggle}
      aria-label={isTurnedOff ? "Allumer l'écran" : "Éteindre l'écran"}
    >
      <FontAwesomeIcon
        icon={faPowerOff}
        className={`${switchStyle.switch} w-full h-full ${
          isTurnedOff ? switchStyle.off : switchStyle.on
        }`}
      />
    </button>
  );
}
