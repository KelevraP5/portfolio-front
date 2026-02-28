import { gql } from "graphql-request";

export const GET_CONTACT_PAGE = gql `

fragment ImageFields on MediaItem {
  altText
  sourceUrl
}

query ContactQuery($uri: String! = "/contact", $language: LanguageCodeEnum = EN) {
  nodeByUri(uri: $uri) {
    ... on Page {
      contact {
        imgBaseContact {
          node {
            ...ImageFields
          }
        }
      }
      translation(language: $language) {
        contact {
          imgBaseContact {
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