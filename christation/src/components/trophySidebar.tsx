import { useRef, useEffect } from "react";

import { TrophyResume } from "./trophyResume";
import { useTranslation } from "../traductions/tradFunction";

import { tradTrophies } from "../traductions/tradTrophies";

interface TrophySidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrophySidebar({
  isOpen,
  onClose,
}: Readonly<TrophySidebarProps>) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  const translatedTrophies = useTranslation(tradTrophies);

  return (
    <div
      ref={sidebarRef}
      className={`sidebar h-[calc(100%-180px)] w-[262px] z-50 ${
        isOpen ? "open" : ""
      }`}
    >
      <ul className="list-trophies flex flex-col gap-[1rem] py-[1rem]">
        {translatedTrophies.map((trophy) => (
          <TrophyResume
            key={trophy.id}
            trophyName={trophy.trophyName}
            trophyResume={trophy.trophySummary}
          />
        ))}
      </ul>
    </div>
  );
}
