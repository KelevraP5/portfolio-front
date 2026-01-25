import { graphqlClient } from "graphql/graphqlClient";
import { GET_PAGES } from "graphql/queries";

export async function fetchPages() {
    const data = await graphqlClient.request(GET_PAGES);

    return data.pages.nodes.map((page: any) => ({
        id: page.pageId,
        title: page.title,
        slug: page.slug,
        isHomePage: page.isFrontPage,
        link: page.link
    }))
};