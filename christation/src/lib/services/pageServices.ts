import { GET_FRONT_PAGE } from "../graphql/queries/accueilQuery";
import { GET_ABOUT_PAGE } from "../graphql/queries/aProposQuery";



import { pageDataFunction } from "./pageServicesFunction";

export async function getHomePage(language: "FR" | "EN") {
  return pageDataFunction({
    query: GET_FRONT_PAGE,
    uri: "/",
    language,
    selector: (node) => node.pageAccueil
  });
};

export async function getAProposPage(language: "FR" | "EN"){
  return pageDataFunction({
    query: GET_ABOUT_PAGE,
    uri: "/a-propos",
    language,
    selector: (node) => node.aPropos,
    
  });
};
