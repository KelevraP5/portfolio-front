"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import "../app/styles/globals.css";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export function Header({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isAbout = pathname == '/pages/about';

  return (
    <header className={`text-font-24px h-[100px] py-[16px] px-[28px] ${isAbout && 'bg-[var(--hex-mainColor)]'}`}>
      <div className="h-[100%] flex justify-between items-center">
        <div className="left-side flex gap-[32px]">
          <div className="trophees-btn flex gap-[8px] cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>

            <div className="logo-trophees bg-pink-500 w-[60px] h-[60px] aspect-square"></div>

            <div className="trophy-txt content-center cursor-pointer">
              <span className="font-titre">Trophées</span>
            </div>
          </div>

          {!isHome && (
            <div className="menu-btn content-center cursor-pointer">
              <Link href={'/'} className="font-titre">Menu</Link>
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
