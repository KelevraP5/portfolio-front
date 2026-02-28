import { gql } from "graphql-request";

export const GET_REALISATIONS_PAGE = gql `

fragment ImageFields on MediaItem {
    altText
    SourceUrl
}



`;