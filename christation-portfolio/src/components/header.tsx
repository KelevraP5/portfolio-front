"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export function Header({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="text-[calc((24/16)*1rem)] h-[100px] py-[16px] px-[28px]">
      <div className="h-[100%] flex justify-between items-center">
        <div className="left-side flex gap-[32px]">
          <div 
            className="trophees-btn flex gap-[8px] cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <div className="logo-trophees bg-pink-500 w-[60px] h-[60px] aspect-square"></div>
            <div className="trophees-txt content-center">
              <span>Trophées</span>
            </div>
          </div>

          {pathname !== "/" && (
            <div className="menu-btn content-center cursor-pointer">
              <Link href={'/'}>Menu</Link>
            </div>
          )}
        </div>

        <div className="right-side flex gap-[32px]">
          <div className="switch-mode-logo bg-pink-500 w-[60px] h-[60px] aspect-square cursor-pointer"></div>
          <div className="switch-langue-logo bg-pink-500 w-[60px] h-[60px] aspect-square cursor-pointer"></div>
        </div>
      </div>
    </header>
  );
}
