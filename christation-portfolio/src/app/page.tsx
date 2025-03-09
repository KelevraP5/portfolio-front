import Link from "next/link";

import { HomeMenu } from "src/components/homeMenu";
import style from "styles/modules/pages/home/home.module.css";

export default function Home() {
  return (
    <div className={`${style.menuContainer} menu-container w-full h-full flex justify-evenly items-center`}>
      <ul className={`${style.menuList} w-full flex justify-evenly items-center`}>
        <li className={`${style.menuItem}`}>
          <Link href="/pages/about">
            {HomeMenu({ nomMenu: "à propos de moi"})}
          </Link>
        </li>

        <li className={`${style.menuItem}`}>
          <Link href="/pages/realisations">
            {HomeMenu({ nomMenu: "mes réalisations" })}
          </Link>
        </li>

        <li className={`${style.menuItem}`}>
          <Link href="/pages/contact">
            {HomeMenu({ nomMenu: "me contacter" })}
          </Link>
        </li>
      </ul>
    </div>
  );
}
