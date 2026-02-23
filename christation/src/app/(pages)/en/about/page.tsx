import { getAProposPage } from "@/src/lib/services/pageServices";

import { Metadata } from "next";

import AboutClient from "./aboutClient";

export default async function About() {
  const about = await getAProposPage("EN");

  return (
    <>
      <section className="sr-only absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden">
        <h1>Here is the about me page</h1>

        <p>On this page, you will learn more about me and my background.</p>

        <ul>
          <li>
            About me: get to know me, my name, my age, my hobbies, my passions.
          </li>
          <li> My academic background: my studies and what I did there.</li>
          <li>
            My professional background: my professional experiences and what I
            have accomplished.
          </li>
        </ul>
      </section>

      <AboutClient pageEN={about} />
    </>
  );
}

export const metadata: Metadata = {
  title: "About me page by Christophe Nehlig",
  description:
    "Learn more about Christophe Nehlig, my passions, my studies, and my professional career.",
};
