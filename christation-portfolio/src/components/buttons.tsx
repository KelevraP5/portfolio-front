import homeMenuStyle from "styles/modules/components/buttons.module.css";
import Link from "next/link";

interface HomeMenuProps {
  menuTxt : string;
  href: string;
}

// Menu de la page d'accueil
export function HomeMenu({ menuTxt, href }: Readonly<HomeMenuProps>) {
  return (
    <Link href={href} className={homeMenuStyle.menuButton}>
      {menuTxt}
    </Link>
  );
}


interface SendButtonProps {
  sendTxt : string;
}

// Bouton d'envoi de formulaire
export function SendButton({ sendTxt }: Readonly<SendButtonProps>){
  return(
    <button type="button" className={homeMenuStyle.sendButton}>{sendTxt}</button>
  );
}
