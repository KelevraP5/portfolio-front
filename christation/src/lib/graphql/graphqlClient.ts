import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
    process.env.WP_GRAPHQL_ENDPOINT as string,
    {
        headers: {
            "Content-Type": "application/json"
        }
    }
);