
import { getHomePage } from "graphqlServices/pageServices";
import HomeClient from "./homeClient";

import { Metadata } from "next";

import { routes } from "@/src/routes/routes";

export default async function Home() {
  const home = await getHomePage("FR");

  return (
    <>
      {/* CONTENU SEO SERVEUR */}
      <section className="sr-only absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden">
        <h1>Bienvenue sur Christation, le portfolio de Christophe Nehlig, Webdesigner et Développeur Front-end</h1>

        <p>
          Je suis webdesigner spécialisé en interfaces modernes,
          UX/UI et développement front-end.
          Découvrez mes réalisations, mon parcours et mes compétences.
        </p>

        <nav>
          <ul>
            <li><a href={routes.fr.aPropos}>À propos : Parcours et compétences</a></li>
            <li><a href="/realisations">Réalisations webdesign et développement web</a></li>
            <li><a href="/contact">Contact : Envoyez moi un message</a></li>
          </ul>
        </nav>
      </section>

      {/* CONTENU VISUEL / INTERACTIF */}
      <HomeClient page={home} />
    </>
  );
}

export const metadata: Metadata = {
  title: "Portfolio de Christophe Nehlig, Webdesigner et Développeur Web Front-end",
  description:
    "Portfolio de Christophe Nehlig, webdesigner spécialisé en UX/UI et développement web front-end. Découvrez mes projets et mes compétences.",
};
