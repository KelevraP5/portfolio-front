import RealisationsClient from "./realisationsClient";
import { getRealisationsPage } from "@/src/lib/services/pageServices";

export default async function Realisations() {
    const realisationsPageData = await getRealisationsPage('FR');

    return(
        <RealisationsClient page={realisationsPageData} />
    );
}