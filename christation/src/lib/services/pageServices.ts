import { GET_FRONT_PAGE } from "../graphql/queries";
import { wpFetch } from "../wpFetch";

export async function getHomePage() {
  const data = await wpFetch(GET_FRONT_PAGE);  

  const dataHome = data.nodeByUri.pageAccueil;

  return dataHome;
}
