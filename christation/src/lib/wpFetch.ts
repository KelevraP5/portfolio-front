
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

    next: {
      revalidate: 600,
    },
  });

  const json = await response.json();

  if (json.errors) {
    console.error("GraphQL Error:", json.errors);
    throw new Error("Erreur GraphQL");
  }  

  return json.data;
}
