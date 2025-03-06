import Link from "next/link";

import { HomeMenu } from "src/components/homeMenu";

export default function Home() {
  return (
    <div className="menu-container w-full h-full flex justify-evenly items-center">
      <ul className="menu-list w-full flex justify-evenly items-center">
        <li className="menu-item">
          <Link href="/pages/about">
            {HomeMenu({ nomMenu: "à propos de moi"})}
          </Link>
        </li>

        <li className="menu-item">
          <Link href="/pages/realisations">
            {HomeMenu({ nomMenu: "mes réalisations" })}
          </Link>
        </li>

        <li className="menu-item">
          <Link href="/pages/contact">
            {HomeMenu({ nomMenu: "me contacter" })}
          </Link>
        </li>
      </ul>
    </div>
  );
}
