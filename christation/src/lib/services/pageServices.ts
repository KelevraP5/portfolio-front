import { GET_FRONT_PAGE } from "../graphql/queries/accueilQuery";
import { GET_ABOUT_PAGE } from "../graphql/queries/aProposQuery";
import { GET_REALISATIONS_PAGE } from "../graphql/queries/realisationsQuery";
import { GET_CONTACT_PAGE } from "../graphql/queries/contactQuery";


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

export async function getRealisationsPage(language: "FR" | "EN"){
  return pageDataFunction({
    query: GET_REALISATIONS_PAGE,
    uri: "/realisations",
    language,
    selector: (node) => node.realisations,
    
  });
};

export async function getContactPage(language: "FR" | "EN"){
  return pageDataFunction({
    query: GET_CONTACT_PAGE,
    uri: "/contact",
    language,
    selector: (node) => node.contact,
    
  });
};


