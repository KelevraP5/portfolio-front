import { wpFetch } from "../wpFetch";

type PageDataProps<T> = {
    query: any;
    uri: string;
    language: "FR" | "EN";
    selector: (node: any) => T;
};

export async function pageDataFunction<T>( params: PageDataProps<T> ): Promise<T>{
    const { query, uri, language, selector } = params;

    const data = await wpFetch(query, {
        uri,
        language
    });

    const dataPage = data.nodeByUri;
    const isEN = language === "EN" && dataPage.translation;

    const node = isEN ? dataPage.translation : dataPage;

    const result: T = selector(node);

    return result;
}