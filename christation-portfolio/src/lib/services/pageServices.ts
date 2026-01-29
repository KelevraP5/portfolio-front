import { graphqlClient } from "graphql/graphqlClient";
import { GET_FRONT_PAGE} from "graphql/queries";

export async function getHomePage() {
    const data = await graphqlClient.request(GET_FRONT_PAGE);

    console.log(data.nodeByUri.pageAccueil);
    
    return data.nodeByUri.pageAccueil;
}