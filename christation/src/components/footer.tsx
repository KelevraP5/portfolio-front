import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import { useTranslation } from "../traductions/tradFunction";
import { tradText } from "../traductions/tradText";

export default function Footer(){

    const translatedText = useTranslation(tradText);

    return(
        <footer className="w-full h-[60px] py-[0.5rem] cursor-default">
            <div className="footer-wrap h-full m-auto flex justify-evenly items-center">

                <div className="texte-mentions px-[0.5rem]">
                    <Link href="" aria-label={translatedText.screenReader.legal}>{translatedText.legal}</Link>
                </div>

                <div className="line"></div>

                <div className="flex gap-[0.5rem] px-[0.5rem]">
                    <div className="texte-rs hidden sm:inline">
                        <p>{translatedText.socials}</p>
                    </div>

                    <div className="logo-linkedin md:w-[20px] md:h-[21px] w-[40px] h-[40px]">
                        <Link href="https://www.linkedin.com/in/christophe-nehlig/" target="_blank" aria-label={translatedText.screenReader.socials}>
                            <FontAwesomeIcon icon={faLinkedin} className="logo w-full h-full"/>
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}