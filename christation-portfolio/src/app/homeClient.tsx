"use client"

import { HomeMenu } from "@/src/components/buttons";

import style from "styles/modules/pages/home/home.module.css";

export default function HomeClient({ page }: Readonly<{ page : any}>) {

    return (
        
        <div className={`${style.menuContainer}`}>
            <ul>
                <li><HomeMenu menuTxt={page.menu1} href="/pages/a-propos"></HomeMenu></li>
                <li><HomeMenu menuTxt={page.menu2} href="/pages/realisations"></HomeMenu></li>
                <li><HomeMenu menuTxt={page.menu3} href="/pages/contact"></HomeMenu></li>                
            </ul>
        </div>        
    );
}