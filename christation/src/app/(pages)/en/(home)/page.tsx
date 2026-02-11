
import { getHomePage } from "graphqlServices/pageServices";
import HomeClientEN from "./homeClientEN";

import { Metadata } from "next";

export default async function HomeEN() {
  const homeEN = await getHomePage("EN");  

  return (
    <>
      {/* CONTENU SEO SERVEUR */}
      <section className="sr-only absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden">
        <h1>Portfolio of Christophe Nehlig, Web Designer and Front-end Developer</h1>

        <p>
          I am a web designer specializing in modern interfaces,
          UX/UI, and front-end development.
          Discover my work, my background, and my skills.
        </p>

        <nav>
          <ul>
            <li><a href="/en/about">About: Background and skills</a></li>
            <li><a href="/projects">Web design and web development projects</a></li>
            <li><a href="/contact">Contact: Send me a message</a></li>
          </ul>
        </nav>
      </section>

      {/* CONTENU VISUEL / INTERACTIF */}
      <HomeClientEN pageEN={homeEN} />
    </>
  );
}

export const metadata: Metadata = {
  title: "Portfolio of Christophe Nehlig, Web Designer and Front-end Web Developer",
  description:
    "Portfolio of Christophe Nehlig, web designer specializing in UX/UI and front-end web development. Discover my projects and skills.",
};
