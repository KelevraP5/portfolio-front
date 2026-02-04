"use client";

import Image from "next/image";

import { useLanguage } from "../contexts/LanguageContext";

import iconeFR from "assets/iconeFR.svg";
import iconeENG from "assets/iconeENG.svg";

export function SwitchLangue(){
    const { language, toggleLanguage } = useLanguage();

    return (
        <button type="button" onClick={toggleLanguage} aria-label="Changer la langue" className="cursor-pointer">
            {language === "fr" ? (
                <Image src={iconeFR} width={60} height={60} alt="langue française" priority/>
            ) : (
                <Image src={iconeENG} width={60} height={60} alt="English language" priority/>
            )}
        </button>
    );
}