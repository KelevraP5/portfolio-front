"use client";

import { useState } from "react";
import Link from "next/link";

import { HomeMenu } from "src/components/homeMenu";
import { useBackground } from "../contexts/HomeBgContext";

import style from "styles/modules/pages/home/home.module.css";

export default function Home() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const { setBackgroundImage } = useBackground();

  const handleMouseEnter = (menu: string, img: string) => {
    setHoveredMenu(menu);
    setBackgroundImage(img);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
    setBackgroundImage(null);
  };

  return (
    <div className={`${style.menuContainer} w-full h-full flex justify-evenly items-center`}>
      <ul className={`${style.menuList} w-full flex justify-evenly items-center gap-[20px]`}>
        {[
          { id: "about", label: "à propos de moi", href: "/pages/about", imgMenu: "/chat_test1.png", imgAlt: "Image d'un chat 1", imgBackground: "chat_test_princ.jpg" },
          { id: "realisations", label: "mes réalisations", href: "/pages/realisations", imgMenu: "/chat_test2.png", imgAlt: "Image d'un chat 2", imgBackground: "chat_test_princ.jpg" },
          { id: "contact", label: "me contacter", href: "/pages/contact", imgMenu: "/chat_test3.png", imgAlt: "Image d'un chat 3", imgBackground: "chat_test_princ.jpg" },
        ].map((menu) => (
          <li
            key={menu.id}
            className={`${style.menuItem} ${
              hoveredMenu && hoveredMenu !== menu.id ? style.blurred : ""
            }`}
            onMouseEnter={() => handleMouseEnter(menu.id, menu.imgBackground)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={menu.href}>
              <HomeMenu imgSource={menu.imgMenu} imgAlt={menu.imgAlt} nomMenu={menu.label} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
