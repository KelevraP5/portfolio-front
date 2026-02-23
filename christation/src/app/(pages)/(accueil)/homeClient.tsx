"use client";

import { HomePageData } from "@/src/types/wpData";

import { HomeMenu } from "@/src/components/buttons";

import { useBackground } from "@/src/contexts/HomeBgContext";
import { BackgroundManager } from "@/src/components/bgManager";
import { useBackgroundObserver } from "@/src/hooks/backgroundObserver";

import { useEffect, useMemo } from "react";

import { routes } from "@/src/routes/routes";

import style from "styles/modules/pages/home.module.css";

export default function HomeClient({ page }: Readonly<{ page: HomePageData }>) {
  const { setBackgroundImage, setDefaultBackground } = useBackground();

  const ImgSource = page.imgBaseHome.node.sourceUrl;
  const altImg = page.imgBaseHome.node.altText;

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
      menuName: page.menu1,
      href: routes.fr.aPropos,
      bgImg: page.menu1Img.node.sourceUrl,
      bgImgAlt: page.menu1Img.node.altText ?? "",
      description: "aller sur la page à propos de moi",
    },
    {
      id: "m2",
      menuName: page.menu2,
      href: routes.fr.realisations,
      bgImg: page.menu2Img.node.sourceUrl,
      bgImgAlt: page.menu2Img.node.altText ?? "",
      description: "aller sur la page mes réalisations",
    },
    {
      id: "m3",
      menuName: page.menu3,
      href: routes.fr.contact,
      bgImg: page.menu3Img.node.sourceUrl,
      bgImgAlt: page.menu3Img.node.altText ?? "",
      description: "aller sur la page contact",
    },
  ], [page]);

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
