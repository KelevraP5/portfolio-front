"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { SwitchLangue } from "./switchLangue";

import iconeTrophee from "assets/iconeTrophee.svg";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export function Header({ isSidebarOpen, setIsSidebarOpen }: Readonly<HeaderProps>) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className={`text-font-24px h-[100px] py-[16px] px-[28px]'}`}>
      <div className="h-[100%] flex justify-between items-center px-[28px]">
        <div className="left-side flex gap-[32px]">
          <button type="button" className="trophees-btn flex gap-[8px] cursor-pointer border-none bg-transparent" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>

            <Image src={iconeTrophee} width={60} height={60} alt="icône d'un trophée"/>

            <div className="trophees-txt content-center cursor-pointer">
              <span className="font-titre text-font-24px">Trophées</span>
            </div>
          </button>

          {!isHome && (
            <div className="menu-btn content-center cursor-pointer">
              <Link href={'/'} className="font-titre text-font-24px">Menu</Link>
            </div>
          )}
        </div>

        <div className="right-side flex gap-[32px]">
          <SwitchLangue />
        </div>
      </div>
    </header>
  );
}
