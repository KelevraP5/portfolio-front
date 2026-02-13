"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

import switchStyle from "styles/modules/components/logoOnOff.module.css";

interface LogoOnOffProps {
  isTurnedOff: boolean;
  toggle: () => void;
  screenReadMsgOn: string;
  screenReadMsgOff: string;
}

export default function LogoOnOff({ isTurnedOff, toggle, screenReadMsgOn, screenReadMsgOff}: Readonly<LogoOnOffProps>) {

  return (
    <button
      type="button"
      className={`${switchStyle.logoOnOff} absolute bottom-1 left-[50%] w-[29px] h-[29px]`}
      onClick={toggle}
      aria-label={isTurnedOff ? screenReadMsgOn : screenReadMsgOff}
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
