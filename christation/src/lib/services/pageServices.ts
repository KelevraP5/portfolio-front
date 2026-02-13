import { GET_FRONT_PAGE } from "../graphql/queries/accueilQuery";
import { pageDataFunction } from "./pageServicesFunction";

export async function getHomePage(language: "FR" | "EN") {
  return pageDataFunction({
    query: GET_FRONT_PAGE,
    uri: "/",
    language,
    selector: (node) => node.pageAccueil
  });
}
