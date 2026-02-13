import homeMenuStyle from "styles/modules/components/buttons.module.css";
import Link from "next/link";

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
}

// Bouton d'envoi de formulaire
export function SendButton({ sendTxt, screenReadMsg }: Readonly<SendButtonProps>){
  return(
    <button type="button" className={homeMenuStyle.sendButton} aria-label={screenReadMsg}>{sendTxt}</button>
  );
}
