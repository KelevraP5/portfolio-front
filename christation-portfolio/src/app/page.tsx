import Link from "next/link";

import { homeMenu } from "@/components/homeMenu";

export default function Home() {
  return (
    <div className="menu-container w-[100%] h-[100%] flex justify-evenly items-center ">
      <Link href="/pages/about">
        {homeMenu({ nomMenu: "à propos de moi" })}
      </Link>

      <Link href="/pages/realisations">
        {homeMenu({ nomMenu: "mes réalisations" })}
      </Link>

      <Link href="/pages/contact">
        {homeMenu({ nomMenu: "me contacter" })}
      </Link>
    </div>
  );
}
