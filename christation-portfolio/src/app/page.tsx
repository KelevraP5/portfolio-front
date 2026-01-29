import { getHomePage } from "../lib/services/pageServices";
import HomeClient from "./homeClient";

export default async function Home() {

  const page = await getHomePage();

  return (
    <HomeClient page={page} />
  );
}
