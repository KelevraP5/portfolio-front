import {useRef, useEffect} from "react";

import { TrophyResume } from "./trophyResume";

interface TrophySidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrophySidebar({ isOpen, onClose }: Readonly<TrophySidebarProps>) {
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

  const trophies = [
    {id: 1, trophyName: "trophée 1", trophyResume: "voici le résumé de ce trophée. Bravo !"},
    {id: 2, trophyName: "trophée 2", trophyResume: "voici le résumé de ce trophée. Bravo !"},
    {id: 3, trophyName: "trophée 3", trophyResume: "voici le résumé de ce trophée. Bravo !"},
    {id: 4, trophyName: "trophée 4", trophyResume: "voici le résumé de ce trophée. Bravo !"},
  ];

  return (
    <aside ref={sidebarRef} className={`sidebar h-[calc(100%-180px)] w-[262px] z-50 ${
      isOpen ? 'open' : ''}`}>
      <ul className="list-trophies flex flex-col gap-[1rem] py-[1rem]">
          {trophies.map((trophy) => (
            <TrophyResume key={trophy.id} trophyName={trophy.trophyName} trophyResume={trophy.trophyResume} />
          ))}
        </ul>
    </aside>
  );
}