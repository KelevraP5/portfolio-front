"use client";

import { useState } from "react";
import "../../styles/globals.css";

export default function About() {
  const [selectedMenu, setSelectedMenu] = useState<number>(1);

  const aboutMenuAndContent = [
    { id: 1, label: "à propos de moi", content: "À propos de moi" },
    { id: 2, label: "mes formations", content: "Mes formations" },
    { id: 3, label: "mes expériences professionnelles", content: "Mes expériences professionnelles" }
  ];

  return (
    <section id="about-section w-full h-full">
      <div className="imgFond w-full h-[300px] bg-green-500 relative">
        {/* code image */}
        <div className="identite w-full bg-red-600 absolute bottom-0">
          <div className="wrap flex justify-start items-center">
            <div className="photoMoi w-[152px] h-[152px] aspect-square bg-pink-500"></div>

            <div className="nomPrenom">
              <span className="text-font-64px font-titre">
                Christophe Nehlig
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap bg-orange-600 h-full flex justify-between items-center">
        <div className="about-menu w-[45vw]">
          <ul className="w-full flex flex-col">
            {aboutMenuAndContent.map((menu) => (
              <div>
                <li
                key={menu.id}
                className="cursor-pointer"
                onClick={() => setSelectedMenu(menu.id)}
                >
                  {menu.label.charAt(0).toUpperCase() + menu.label.slice(1)}
                </li>
              </div>
            ))}
          </ul>
        </div>

        <div className="cadre-texte-about w-[40vw] h-full border border-1 border-solid p-[1rem]">
          {aboutMenuAndContent.find((menu) => menu.id === selectedMenu)?.content}
        </div>
      </div>
    </section>
  );
}
