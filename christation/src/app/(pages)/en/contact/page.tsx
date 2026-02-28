import { getContactPage } from "@/src/lib/services/pageServices";

import { Metadata } from "next";

import ContactClientEN from "./contactClientEN";

export default async function Contact() {
  const contactEN = await getContactPage("EN");

  return (
    <>
      <section className="sr-only absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden">
        <h1>Here is the page to contact me</h1>

        <p>
         
        </p>

        
      </section>

      <ContactClientEN pageEN={contactEN}/>
    </>
  );
}

export const metadata: Metadata = {
  title: "",
  description: "",
};
