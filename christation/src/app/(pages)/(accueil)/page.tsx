import { getHomePage } from "graphqlServices/pageServices";
import HomeClient from "./homeClient";

export default async function Home() {

  const home = await getHomePage();

  return (
    <HomeClient page={home} />
  );
}
