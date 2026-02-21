import { gql } from "graphql-request"

export const GET_ABOUT_PAGE = gql `

fragment ImageFields on MediaItem {
  altText
  sourceUrl
}

query GetAboutPage($uri: String! = "/a-propos", $language: LanguageCodeEnum = EN) {

  nodeByUri(uri: $uri) {
    ... on Page {
      aPropos {
        imgBaseAPropos {
          node {
            ...ImageFields
          }
        }
        infos1
        infos1Img {
          node {
            ...ImageFields
          }
        }
        infos2
        infos2Img {
          node {
            ...ImageFields
          }
        }
        infos3
        infos3Img {
          node {
            ...ImageFields
          }
        }
      }
      translation(language: $language) {
        aPropos {
          imgBaseAPropos {
            node {
              ...ImageFields
            }
          }
          infos1
          infos1Img {
            node {
              ...ImageFields
            }
          }
          infos2
          infos2Img {
            node {
             ...ImageFields
            }
          }
          infos3
          infos3Img {
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