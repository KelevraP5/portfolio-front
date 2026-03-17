import { gql } from "graphql-request";

export const GET_REALISATIONS_PAGE = gql`
  fragment ImageFields on MediaItem {
    altText
    sourceUrl
  }

  query RealisationsQuery(
    $uri: String! = "/realisations"
    $language: LanguageCodeEnum = EN
  ) {
    nodeByUri(uri: $uri) {
      ... on Page {
        realisations {
          imgBaseRealisations {
            node {
              ...ImageFields
            }
          }
          nomProjet1
          imgprincipalProjet1 {
            node {
              ...ImageFields
            }
          }
          img2Projet1 {
            node {
              ...ImageFields
            }
          }
          img3Projet1 {
            node {
              ...ImageFields
            }
          }
          nomProjet2
          imgprincipalProjet2 {
            node {
              ...ImageFields
            }
          }
          img2Projet2 {
            node {
              ...ImageFields
            }
          }
          img3Projet2 {
            node {
              ...ImageFields
            }
          }
          nomProjet3
          imgprincipalProjet3 {
            node {
              ...ImageFields
            }
          }
          img2Projet3 {
            node {
              ...ImageFields
            }
          }
          img3Projet3 {
            node {
              ...ImageFields
            }
          }
        }
        translation(language: $language) {
          realisations {
            imgBaseRealisations {
              node {
                ...ImageFields
              }
            }
            nomProjet1
            imgprincipalProjet1 {
              node {
                ...ImageFields
              }
            }
            img2Projet1 {
              node {
                ...ImageFields
              }
            }
            img3Projet1 {
              node {
                ...ImageFields
              }
            }
            nomProjet2
            imgprincipalProjet2 {
              node {
                ...ImageFields
              }
            }
            img2Projet2 {
              node {
                ...ImageFields
              }
            }
            img3Projet3 {
              node {
                ...ImageFields
              }
            }
            nomProjet3
            imgprincipalProjet3 {
              node {
                ...ImageFields
              }
            }
            img2Projet3 {
              node {
                ...ImageFields
              }
            }
            img3Projet3 {
              node {
                ...ImageFields
              }
            }
          }
        }
      }
    }
  }
`;
