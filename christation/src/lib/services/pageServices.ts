import { GET_FRONT_PAGE } from "../graphql/queries/accueilQuery";
import { wpFetch } from "../wpFetch";

export async function getHomePage(language: "FR" | "EN") {
  const data = await wpFetch(GET_FRONT_PAGE, {
    uri: "/",
    language
  });  

  const dataPage = data.nodeByUri;
  const isEN = language === 'EN' && dataPage.translation;

  const dataHome = isEN ? dataPage.translation.pageAccueil : dataPage.pageAccueil;

  return dataHome;
}
