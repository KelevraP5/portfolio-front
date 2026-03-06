import homeMenuStyle from "styles/modules/components/buttons.module.css";
import exitCross from "@/public/assets/exitCross.svg";
import Link from "next/link";
import Image from "next/image";

interface HomeMenuProps {
  menuTxt : string;
  href: string;
  screenReadMsg: string;
}

// Menu de la page d'accueil
export function HomeMenu({ menuTxt, href, screenReadMsg }: Readonly<HomeMenuProps>) {
  return (
    <Link href={href} className={homeMenuStyle.menuButton} aria-label={screenReadMsg}>
      {menuTxt}
    </Link>
  );
}


interface SendButtonProps {
  sendTxt : string;
  screenReadMsg: string;
  state: any;
}

// Bouton d'envoi de formulaire
export function SendButton({ sendTxt, screenReadMsg, state }: Readonly<SendButtonProps>){
  return(
    <button type="submit" disabled={state} className={homeMenuStyle.sendButton} aria-label={screenReadMsg}>{sendTxt}</button>
  );
}

interface ExitCrossProps {
  alt : string;
}

export function ExitCross({ alt } : Readonly<ExitCrossProps>){
  return(
    <Image src={exitCross} fill alt={alt}/>
  );
}
