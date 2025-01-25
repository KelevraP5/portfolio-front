import {useRef, useEffect} from "react";
import { trophyResume } from "./trophyResume";

interface TrophySidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrophySidebar({ isOpen, onClose }: TrophySidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={sidebarRef} className={`sidebar h-[calc(100%-180px)] w-[262px] ${
      isOpen ? 'open' : ''
    }`}>
      <div className="list-trophies flex flex-col gap-[1rem] py-[1rem]">
        {trophyResume ({trophyName: "trophée 1", trophyResume: "voici le résumé de ce trophée. Bravo !"})}
        {trophyResume ({trophyName: "trophée 2", trophyResume: "voici le résumé de ce trophée. Bravo !"})}
        {trophyResume ({trophyName: "trophée 3", trophyResume: "voici le résumé de ce trophée. Bravo !"})}
        {trophyResume ({trophyName: "trophée 4", trophyResume: "voici le résumé de ce trophée. Bravo !"})}
      </div>
    </div>
  );
}