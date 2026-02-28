import { BackgroundManager } from "@/src/components/bgManager";
import { SendButton } from "@/src/components/buttons";
import { ContactPageData } from "@/src/types/wpData";

import contactStyle from "styles/modules/pages/contact.module.css";

export default function ContactClient({
  page,
}: Readonly<{ page: ContactPageData }>) {
  const mainBgSrc = page.imgBaseContact.node.sourceUrl;
  const mainBgAlt = page.imgBaseContact.node.altText;

  return (
    <div className={contactStyle.contact}>
      <BackgroundManager src={mainBgSrc} alt={mainBgAlt ?? ""} />
      <div className={`${contactStyle.container} wrap`}>
        <div className={contactStyle.cadre}>
          <div className={contactStyle.cadreFond}></div>
          <div className={contactStyle.maskOverlay}></div>

          <div className={contactStyle.formulaire}>
            <form action="" method="post" noValidate>

              <div className={`${contactStyle.inputGroup}`}>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  aria-required
                  placeholder=" "
                />
                <label htmlFor="firstName">Prénom<span>*</span></label>
                <span className={`${contactStyle.error}`}></span>
              </div>

              <div className={`${contactStyle.inputGroup}`}>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  aria-required
                  placeholder=" "
                />
                <label htmlFor="lastName">Nom<span>*</span></label>
                <span className={`${contactStyle.error}`}></span>
              </div>

              <div className={`${contactStyle.inputGroup}`}>
                <input type="text" name="company" id="company" placeholder=" "/>
                <label htmlFor="company">Entreprise</label>
                <span className={`${contactStyle.error}`}></span>
              </div>

              <div className={`${contactStyle.inputGroup}`}>
                <input
                  type="text"
                  name="object"
                  id="object"
                  required
                  aria-required
                  placeholder=" "
                />
                <label htmlFor="object">Objet<span>*</span></label>
                <span className={`${contactStyle.error}`}></span>
              </div>

              <div className={`${contactStyle.txtAreaGroup}`}>
                <textarea name="message" id="message" required aria-required placeholder=" "></textarea>
                <label htmlFor="message">Message<span>*</span></label>
                <span className={`${contactStyle.error}`}></span>
              </div>

            </form>
            <div className={`${contactStyle.btn}`}>
              <SendButton
                sendTxt="Envoyer"
                screenReadMsg="bouton envoi de formulaire"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
