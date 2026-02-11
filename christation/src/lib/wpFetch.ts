import { log } from "node:console";

export async function wpFetch(query: string, variables = {}) {

  const response = await fetch(process.env.WP_GRAPHQL_ENDPOINT!, {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query,
      variables,
    }),

    // next: {
    //   revalidate: 3600, // cache de 1h
    // },
  });

  const json = await response.json();  

  if (json.errors) {
    console.error("GraphQL Error:", json.errors);
    throw new Error("Erreur GraphQL");
  };
  
  return json.data;
}
