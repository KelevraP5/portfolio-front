"use client";

import { BackgroundManager } from "@/src/components/bgManager";
import { SendButton } from "@/src/components/buttons";
import { ContactPageData } from "@/src/types/wpData";

import { useActionState, useEffect, useRef } from "react";
import contactForm from "@/src/actions/formActions";

import contactStyle from "styles/modules/pages/contact.module.css";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ContactClient({
  page,
}: Readonly<{ page: ContactPageData }>) {
  const mainBgSrc = page.imgBaseContact.node.sourceUrl;
  const mainBgAlt = page.imgBaseContact.node.altText;

  const [state, formAction, isPending] = useActionState(contactForm, null);

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className={contactStyle.contact}>
      <div className={contactStyle.alertSucess}>
        {state?.success &&
          <Alert>
          <AlertTitle>Message Envoyé</AlertTitle>
          <AlertDescription>
            {state?.success && state.message ? state.message : ""}
          </AlertDescription>
        </Alert>
        }
      </div>

        <BackgroundManager src={mainBgSrc} alt={mainBgAlt ?? ""} />
        <div className={`${contactStyle.container} wrap`}>
          <div className={contactStyle.cadre}>
            <div className={contactStyle.cadreFond}></div>
            <div className={contactStyle.maskOverlay}></div>

            <div className={contactStyle.formulaire}>
              <form action={formAction} ref={formRef} noValidate>
                <div className={`${contactStyle.inputGroup}`}>
                  <input
                    type="text"
                    name="prenom"
                    id="prenom"
                    required
                    aria-required
                    placeholder=" "
                  />
                  <label htmlFor="prenom">
                    Prénom<span>*</span>
                  </label>
                  {state?.errors?.prenom && (
                    <span className={`${contactStyle.error}`}>
                      {state.errors.prenom}
                    </span>
                  )}
                </div>

                <div className={`${contactStyle.inputGroup}`}>
                  <input
                    type="text"
                    name="nom"
                    id="nom"
                    required
                    aria-required
                    placeholder=" "
                  />
                  <label htmlFor="nom">
                    Nom<span>*</span>
                  </label>
                  {state?.errors?.nom && (
                    <span className={`${contactStyle.error}`}>
                      {state.errors.nom}
                    </span>
                  )}
                </div>

                <div className={`${contactStyle.inputGroup}`}>
                  <input
                    type="text"
                    name="entreprise"
                    id="entreprise"
                    placeholder=" "
                  />
                  <label htmlFor="entreprise">Entreprise</label>
                  {state?.errors?.entreprise && (
                    <span className={`${contactStyle.error}`}>
                      {state.errors.entreprise}
                    </span>
                  )}
                </div>

                <div className={`${contactStyle.inputGroup}`}>
                  <input
                    type="text"
                    name="objet"
                    id="objet"
                    required
                    aria-required
                    placeholder=" "
                  />
                  <label htmlFor="objet">
                    Objet<span>*</span>
                  </label>
                  {state?.errors?.objet && (
                    <span className={`${contactStyle.error}`}>
                      {state.errors.objet}
                    </span>
                  )}
                </div>

                <div className={`${contactStyle.txtAreaGroup}`}>
                  <textarea
                    name="message"
                    id="message"
                    required
                    aria-required
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="message">
                    Message<span>*</span>
                  </label>
                  {state?.errors?.message && (
                    <span className={`${contactStyle.error}`}>
                      {state.errors.message}
                    </span>
                  )}
                </div>

                <div className={`${contactStyle.btn}`}>
                  <SendButton
                    state={isPending}
                    sendTxt={isPending ? "Envoi ..." : "Envoyer"}
                    screenReadMsg="bouton envoi de formulaire"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
}
