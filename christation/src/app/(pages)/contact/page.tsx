import { getContactPage } from "@/src/lib/services/pageServices";

import { Metadata } from "next";

import ContactClient from "./contactClient";

export default async function Contact() {
  const contact = await getContactPage("FR");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Page de Contact - Christation",
    description: "Formulaire pour contacter Christation, développeur web.",
    mainEntity: {
      "@type": "Person",
      name: "Ton Nom",
      jobTitle: "Développeur Full-Stack",
      url: "https://ton-domaine.fr",
      sameAs: [
        "https://linkedin.com/in/ton-profil",
        "https://github.com/ton-github",
      ],
    },
  };

  return (
    <>
      <section className="sr-only absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <h1>Contactez-moi</h1>
      </section>

      <ContactClient page={contact} />
    </>
  );
}

export const metadata: Metadata = {
  title: "Contact | Christation - Développeur Full-Stack",
  description:
    "Un projet en tête ? Contactez-moi pour discuter de votre développement Web Next.js ou WordPress. Réponse rapide garantie.",
  openGraph: {
    title: "Contactez Christation",
    description: "Formulaire de contact pour vos projets de développement web.",
    url: "https://ton-domaine.fr/contact",
    type: "website",
  },
};
