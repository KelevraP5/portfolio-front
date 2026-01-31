"use client"

import { HomeMenu } from "@/src/components/buttons";
import { useBackground } from "@/src/contexts/HomeBgContext";
import { useEffect } from "react";

import style from "styles/modules/pages/home.module.css";

export default function HomeClient({ page }: Readonly<{ page : any}>) {
    const { setBackgroundImage, setDefaultBackground } = useBackground();

    const baseBg = {
        webp: page.imgBaseHomeWebp.node.sourceUrl,
        fallback: page.imgBaseHome.node.sourceUrl
    };

    useEffect(() => {
        setDefaultBackground(baseBg);
        setBackgroundImage(baseBg);
        
    }, [setDefaultBackground, setBackgroundImage]);

    const menus = [
        {menuName: page.menu1, href: "/a-propos", bgImg: page.menu1Img.node.sourceUrl, bgImgAlt:page.menu1Img.node.altText, bgWebp: page.menu1Webp.node.sourceUrl},
        {menuName: page.menu2, href: "/realisations", bgImg: page.menu2Img.node.sourceUrl, bgImgAlt:page.menu2Img.node.altText, bgWebp: page.menu2Webp.node.sourceUrl},
        {menuName: page.menu3, href: "/contact", bgImg: page.menu3Img.node.sourceUrl, bgImgAlt:page.menu3Img.node.altText, bgWebp: page.menu3Webp.node.sourceUrl}
    ];

    return (   
        <div className={`${style.menuContainer}`}>
            <ul>
                {menus.map((menu) => (
                    <li key={menu.href} onMouseEnter={() => setBackgroundImage({fallback: menu.bgImg, webp: menu.bgWebp})} onMouseLeave={() => setBackgroundImage(null)}>
                        <HomeMenu menuTxt={menu.menuName} href={menu.href}></HomeMenu>
                    </li>
                ))}
            </ul>
        </div>
    );
}