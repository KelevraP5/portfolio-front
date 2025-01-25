import { homeMenu } from "@/components/homeMenu";

export default function Home() {
  return (
    <div className="menu-container w-[100%] h-[100%] flex justify-evenly items-center ">
      {homeMenu ({nomMenu : "à propos de moi"})}
      {homeMenu ({nomMenu : "mes réalisations"})}
      {homeMenu ({nomMenu : "me contacter"})}
    </div>
  );
}
