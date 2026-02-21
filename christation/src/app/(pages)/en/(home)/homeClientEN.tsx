"use client"

import { HomePageData } from "@/src/types/wpData";

import { HomeMenu } from "@/src/components/buttons";

import { useBackground } from "@/src/contexts/HomeBgContext";
import { useEffect, useMemo } from "react";

import style from "styles/modules/pages/home.module.css";

export default function HomeClientEN({ pageEN }: Readonly<{ pageEN : HomePageData}>) {
    const { setBackgroundImage, setDefaultBackground } = useBackground();

    const ImgSource = pageEN.imgBaseHome.node.sourceUrl;
    const altImg = pageEN.imgBaseHome.node.altText;    

    const baseBg = useMemo(() => 
        (
            {
                src: ImgSource,
                alt: altImg ?? ""
            }
        ),
        [ImgSource, altImg]
    )

    useEffect(() => {
        setDefaultBackground(baseBg);
        setBackgroundImage(baseBg);
        
    }, [baseBg, setDefaultBackground, setBackgroundImage]);

    const menus = [
        {menuName: pageEN.menu1, href: "/en/about", bgImg: pageEN.menu1Img.node.sourceUrl, bgImgAlt:pageEN.menu1Img.node.altText ?? "", description: "go to the about me page"},
        {menuName: pageEN.menu2, href: "/en/projects", bgImg: pageEN.menu2Img.node.sourceUrl, bgImgAlt:pageEN.menu2Img.node.altText ?? "", description: "go to the projects page"},
        {menuName: pageEN.menu3, href: "/en/contact", bgImg: pageEN.menu3Img.node.sourceUrl, bgImgAlt:pageEN.menu3Img.node.altText ?? "", description: "go to the contact page"}
    ];

    return (   
        <div className={`${style.menuContainer}`}>
            <ul>
                {menus.map((menu) => (
                    <li key={menu.href} onMouseEnter={() => setBackgroundImage({src:menu.bgImg, alt: menu.bgImgAlt})} onMouseLeave={() => setBackgroundImage(null)}>
                       <HomeMenu menuTxt={menu.menuName} href={menu.href} screenReadMsg={menu.description}></HomeMenu>
                    </li>
                ))}
            </ul>
        </div>
    );
}