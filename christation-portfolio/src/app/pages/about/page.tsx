"use client";

import style from "styles/modules/pages/about/about.module.css";

import { useState } from "react";

export default function About() {
  const [selectedMenu, setSelectedMenu] = useState<string>("1");

  const aboutMenuAndContent = [
    {
      id: "1", label: "à propos de moi", content: "À propos de moi",
    },

    { id: "2", label: "mes formations", content: "Mes formations" },

    {
      id: "3", label: "mes expériences professionnelles", content: "Mes expériences professionnelles",
    },
  ];

  return (
    <section className={`${style.aboutSection} w-full h-full`}>
      <div className={`${style.imgFond} w-full h-[250px] bg-green-500 relative`}>
        {/* code image */}
        <div className={`${style.identite} w-full absolute bottom-0`}>
          <div className="wrap flex justify-start items-center gap-[34px]">
            <div className={`${style.photoMoi} w-[152px] h-[152px] aspect-square bg-pink-500`}></div>

            <div className={`${style.nomPrenom}`}>
              <span className="text-font-64px font-titre">
                Christophe Nehlig
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.menuInfos} h-[calc(100%-250px)]`}>
        <div className="wrap h-full flex justify-between items-center py-[34px] gap-[34px]">
          <div className={`${style.aboutMenu} flex-1`}>
            <ul className="w-full flex flex-col gap-[1rem]">
              {aboutMenuAndContent.map((menu) => (
                <div
                  key={menu.id}
                  className={`${style.menuItem} ${
                    selectedMenu === menu.id ? style.active : ""
                  }`}
                >
                  <li
                    className="cursor-pointer text-font-20px px-[0.5rem]"
                    onClick={() => setSelectedMenu(menu.id)}
                  >
                    {menu.label.charAt(0).toUpperCase() + menu.label.slice(1)}
                  </li>
                </div>
              ))}
            </ul>
          </div>

          <div className={`${style.cadreTexteAbout} w-[40vw] h-full flex-1 border border-1 border-solid rounded-[10px] p-[1rem] overflow-auto`}>
            {
              aboutMenuAndContent.find((menu) => menu.id === selectedMenu)
                ?.content
            }
          </div>
        </div>
      </div>
    </section>
  );
}
