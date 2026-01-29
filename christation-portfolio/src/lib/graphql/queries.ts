import { gql } from "graphql-request";

export const GET_FRONT_PAGE = gql `
query GetFrontPage {
  nodeByUri(uri: "/") {
    ... on Page {
      title
      pageAccueil {
        imgBaseHome {
          node {
            altText
            file
            filePath
            sizes
            srcSet
          }
        }
        imgBaseHomeWebp {
          node {
            altText
            file
            filePath
            sizes
            srcSet
          }
        }
        menu1
        menu1Img {
          node {
            altText
            file
            filePath
            sizes
            srcSet
          }
        }
        menu1Webp {
          node {
            altText
            file
            filePath
            sizes
            srcSet
          }
        }
        menu2
        menu2Img {
          node {
            altText
            file
            filePath
            sizes
            srcSet
          }
        }
        menu2Webp {
          node {
            altText
            file
            filePath
            sizes
            srcSet
          }
        }
        menu3
        menu3Img {
          node {
            altText
            file
            filePath
            sizes
            srcSet
          }
        }
        menu3Webp{
          node {
            altText
            file
            filePath
            sizes
            srcSet
          }
        }
      }
    }
  }
}
`;