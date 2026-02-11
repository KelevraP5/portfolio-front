"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import iconeFR from "assets/iconeFR.svg";
import iconeENG from "assets/iconeENG.svg";

export function SwitchLangue() {
  const router = useRouter();
  const pathname = usePathname();

  const isEN = pathname.startsWith("/en");

  function switchLang() {
    if (isEN) {
      router.push("/");
      router.refresh();
    } else {
      router.push("/en");
      router.refresh();
    }
  }

  return (
    <button onClick={switchLang} aria-label="Changer la langue" className="cursor-pointer">
      {isEN ? (
        <Image src={iconeENG} width={60} height={60} alt="English" />
      ) : (
        <Image src={iconeFR} width={60} height={60} alt="Français" />
      )}
    </button>
  );
}

