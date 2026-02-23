import { getContactPage } from "@/src/lib/services/pageServices";

import { Metadata } from "next";

import ContactClient from "./contactClient";

export default async function Contact() {
//   const contact = await getContactPage("FR");

  return (
    <>
      <section className="sr-only absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden">
        <h1>Voici la page pour me contacter</h1>

        <p>
         
        </p>

        
      </section>

      <ContactClient  />
    </>
  );
}

export const metadata: Metadata = {
  title: "",
  description: "",
};
