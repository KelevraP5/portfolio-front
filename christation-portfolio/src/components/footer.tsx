import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full h-[60px] py-[0.5rem] cursor-default">
            <div className="footer-wrap h-full m-auto flex justify-between items-center">
                <div className="element author-site px-[0.5rem]">
                    <p>Ce site a été designé par Christophe Nehlig. 2025. Tous droits réservés.</p>
                </div>

                <div className="line"></div>

                <div className="element rs flex gap-[0.5rem] px-[0.5rem]">
                    <div className="texte">
                        <p>Retrouvez moi sur </p>
                    </div>

                    <div className="logo-linkedin w-[20px] h-[21px]">
                        <Link href="https://www.linkedin.com/in/christophe-nehlig/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className="logo w-full h-full"/>
                        </Link>
                    </div>
                </div>

                <div className="line"></div>

                <div className="element mentions px-[0.5rem]">
                    <Link href="">Mentions légales</Link>
                </div>

                <div className="line"></div>

                <div className="element infos-technos px-[0.5rem]">
                    <p>Site fait avec Wordpress et Next.js</p>
                </div>
            </div>
        </footer>
    );
}