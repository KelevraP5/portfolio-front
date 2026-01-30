import { graphqlClient } from "graphql/graphqlClient";
import { GET_FRONT_PAGE} from "graphql/queries";

export async function getHomePage() {
    const data = await graphqlClient.request(GET_FRONT_PAGE);
    
    return data.nodeByUri.pageAccueil;
}