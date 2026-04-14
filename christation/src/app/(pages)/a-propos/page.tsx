import { getAProposPage } from "@/src/lib/services/pageServices";

import { Metadata } from "next";

import AProposClient from "./aProposClient";

export default async function APropos() {
  const aPropos = await getAProposPage("FR");

  return (
    <>
      <section className="sr-only absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden">
        <h1>Voici la page à propos de moi</h1>

        <p>
          Sur cette page, vous allez apprendre à mieux me connaitre moi et mon
          parcours
        </p>

        <ul>
          <li>
            à propos de moi : apprendre à me connaitre, mon nom, mon âge, mes
            hobbys, mes passions.
          </li>
          <li>mon parcours académique : mes études et ce que j'y ai fais.</li>
          <li>
            mon parcours professionnel : mes expériences professionnels et ce
            que j'y ai fais.
          </li>
        </ul>
      </section>

      <AProposClient page={aPropos} />
    </>
  );
}

export const metadata: Metadata = {
  title: "À propos de moi",
  description: "Apprenez en plus sur Christophe Nehlig, mes passions, mes études et mon parcours professionnel",
};
