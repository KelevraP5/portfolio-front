"use client";

import { HomePageData } from "@/src/types/wpData";

import { HomeMenu } from "@/src/components/buttons";

import { useBackground } from "@/src/contexts/HomeBgContext";
import { BackgroundManager } from "@/src/components/bgManager";
import { useBackgroundObserver } from "@/src/hooks/backgroundObserver";

import { useEffect, useMemo } from "react";

import { routes } from "@/src/routes/routes";

import style from "styles/modules/pages/home.module.css";

export default function HomeClient({ pageEN }: Readonly<{ pageEN: HomePageData }>) {
  const { setBackgroundImage, setDefaultBackground } = useBackground();

  const ImgSource = pageEN.imgBaseHome.node.sourceUrl;
  const altImg = pageEN.imgBaseHome.node.altText;

  const baseBg = useMemo(
    () => ({
      src: ImgSource,
      alt: altImg ?? "",
    }),
    [ImgSource, altImg],
  );

  useEffect(() => {
    setDefaultBackground(baseBg);
    setBackgroundImage(baseBg);
  }, [baseBg]);

  const menus = useMemo(() => [
    {
      id: "m1",
      menuName: pageEN.menu1,
      href: routes.en.about,
      bgImg: pageEN.menu1Img.node.sourceUrl,
      bgImgAlt: pageEN.menu1Img.node.altText ?? "",
      description: "go to the about me page",
    },
    {
      id: "m2",
      menuName: pageEN.menu2,
      href: routes.en.projects,
      bgImg: pageEN.menu2Img.node.sourceUrl,
      bgImgAlt: pageEN.menu2Img.node.altText ?? "",
      description: "go to the projects page",
    },
    {
      id: "m3",
      menuName: pageEN.menu3,
      href: routes.en.contact,
      bgImg: pageEN.menu3Img.node.sourceUrl,
      bgImgAlt: pageEN.menu3Img.node.altText ?? "",
      description: "go to the contact page",
    },
  ], [pageEN]);

  const scrollContainerRef = useBackgroundObserver(menus, setBackgroundImage);

  return (
    <div className="wrap">
      <div className={`${style.menuContainer}`}>
        <BackgroundManager src={ImgSource} alt={altImg ?? ""} />
        <ul ref={scrollContainerRef as React.RefObject<HTMLUListElement>}>
          {menus.map((menu) => (
            <li
              key={menu.id}
              data-menu-id={menu.id}
              onMouseEnter={() =>
                setBackgroundImage({ src: menu.bgImg, alt: menu.bgImgAlt })
              }
              onMouseLeave={() => setBackgroundImage(null)}
            >
              <HomeMenu
                menuTxt={menu.menuName}
                href={menu.href}
                screenReadMsg={menu.description}
              ></HomeMenu>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
