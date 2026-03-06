"use client";

import { BackgroundManager } from "@/src/components/bgManager";
import { SendButton, ExitCross } from "@/src/components/buttons";
import { ContactPageData } from "@/src/types/wpData";

import { useActionState, useEffect, useRef, useState } from "react";
import { contactFormEN } from "@/src/actions/formActions";

import contactStyle from "styles/modules/pages/contact.module.css";

import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ContactClientEN({
  pageEN,
}: Readonly<{ pageEN: ContactPageData }>) {
  const mainBgSrc = pageEN.imgBaseContact.node.sourceUrl;
  const mainBgAlt = pageEN.imgBaseContact.node.altText;

  const [state, formAction, isPending] = useActionState(contactFormEN, null);
  const [showSuccess, setShowSuccess] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      setShowSuccess(true);
    }
  }, [state]);

  return (
    <div className={contactStyle.contact}>
      {showSuccess && state?.success && (
        <div className={contactStyle.alertSuccess}>
          <Alert>
            <button
              type="button"
              className={`${contactStyle.exitCross}`}
              onClick={() => setShowSuccess(false)}
              aria-label="cross icon to close the banner confirming your message has been sent"
            >
              <ExitCross alt="cross icon to close the banner confirming your message has been sent" />
            </button>
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
                  name="firstname"
                  id="firstname"
                  required
                  aria-required
                  placeholder=" "
                />
                <label htmlFor="firstname">
                  Firstname<span>*</span>
                </label>
                {state?.errors?.firstname && (
                  <span className={`${contactStyle.error}`}>
                    {state.errors.firstname}
                  </span>
                )}
              </div>

              <div className={`${contactStyle.inputGroup}`}>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  required
                  aria-required
                  placeholder=" "
                />
                <label htmlFor="lastname">
                  Lastname<span>*</span>
                </label>
                {state?.errors?.lastname && (
                  <span className={`${contactStyle.error}`}>
                    {state.errors.lastname}
                  </span>
                )}
              </div>

              <div className={`${contactStyle.inputGroup}`}>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder=" "
                />
                <label htmlFor="email">E-mail address <span>*</span></label>
                {state?.errors?.email && (
                  <span className={`${contactStyle.error}`}>
                    {state.errors.email}
                  </span>
                )}
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
                <label htmlFor="object">
                  Object<span>*</span>
                </label>
                {state?.errors?.object && (
                  <span className={`${contactStyle.error}`}>
                    {state.errors.object}
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
                  sendTxt={isPending ? "Sending ..." : "Send"}
                  screenReadMsg="form sending button"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
