import { gql } from "graphql-request";

export const GET_FRONT_PAGE = gql `

fragment ImageFields on MediaItem {
  altText
  sourceUrl
}

query GetFrontPage($uri: String! = "/", $language: LanguageCodeEnum = EN) {

  nodeByUri(uri: $uri) {
    ... on Page {
      pageAccueil {
        imgBaseHome {
          node {
            ...ImageFields
          }
        }
        menu1
        menu1Img {
          node {
            ...ImageFields
          }
        }
        menu2
        menu2Img {
          node {
            ...ImageFields
          }
        }
        menu3
        menu3Img {
          node {
            ...ImageFields
          }
        }
      }

      translation(language: $language) {
        pageAccueil {
          imgBaseHome {
            node {
              ...ImageFields
            }
          }
          menu1
          menu1Img {
            node {
              ...ImageFields
            }
          }
          menu2
          menu2Img {
            node {
              ...ImageFields
            }
          }
          menu3
          menu3Img {
            node{
              ...ImageFields
            }
          }
        }
      }
    }
  }
}
`;