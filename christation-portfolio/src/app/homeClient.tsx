"use client"

import { useState } from "react";

import { HomeMenu } from "src/components/homeMenu";
import { useBackground } from "../contexts/HomeBgContext";
import style from "styles/modules/pages/home/home.module.css";

export default function HomeClient({ page }: Readonly<{ page : any}>) {

    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

    const { setBackgroundImage } = useBackground();

    return (
        
        <div className={style.menuContainer}>
            <ul>
                <li><button>{page.menu1}</button></li>
                <li><button>{page.menu2}</button></li>
                <li><button>{page.menu3}</button></li>
            </ul>
        </div>

        
    );
}