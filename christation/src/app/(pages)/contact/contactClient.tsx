"use client";

import { BackgroundManager } from "@/src/components/bgManager";
import { SendButton } from "@/src/components/buttons";
import { ContactPageData } from "@/src/types/wpData";

import { useActionState, useEffect, useRef, useState } from "react";
import { contactFormFR } from "@/src/actions/formActions";

import contactStyle from "styles/modules/pages/contact.module.css";

import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ContactClient({
  page,
}: Readonly<{ page: ContactPageData }>) {
  const mainBgSrc = page.imgBaseContact.node.sourceUrl;
  const mainBgAlt = page.imgBaseContact.node.altText;

  const [state, formAction, isPending] = useActionState(contactFormFR, null);
  const [showSuccess, setShowSuccess] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if(!state?.success) return;

    setShowSuccess(true);

    const timer = globalThis.setTimeout(() => {
      setShowSuccess(false);
    }, 4000);

    return () => {
      globalThis.clearTimeout(timer);
    }
  }, [state]);

  return (
    <div className={contactStyle.contact}>
      {showSuccess && state?.success && (
        <div className={contactStyle.alertSuccess}>
          <Alert>
            <div className={`${contactStyle.alertWrap}`}>
              <AlertDescription>
                {state?.success && state.message ? state.message : ""}
              </AlertDescription>
            </div>
          </Alert>
        </div>
      )}

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
                  name="email"
                  id="email"
                  required
                  aria-required
                  placeholder=" "
                />
                <label htmlFor="email">Adresse e-mail<span>*</span></label>
                {state?.errors?.email && (
                  <span className={`${contactStyle.error}`}>
                    {state.errors.email}
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
