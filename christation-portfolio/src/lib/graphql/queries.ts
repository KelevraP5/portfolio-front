import { gql } from "graphql-request";

export const GET_PAGES = gql `
    query GetAllPages {
        pages {
            nodes {
            slug
            title
            pageId
            isFrontPage
            }
        }
    }
`;