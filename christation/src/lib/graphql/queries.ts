import { gql } from "graphql-request";

export const GET_FRONT_PAGE = gql `

fragment ImageFields on MediaItem {
  altText
  sourceUrl
}

query GetFrontPage {
  nodeByUri(uri: "/") {
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
    }
  }
}
`;