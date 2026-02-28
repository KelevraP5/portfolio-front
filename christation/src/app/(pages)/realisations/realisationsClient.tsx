import { BackgroundManager } from "@/src/components/bgManager";

export default function Realisations({ page }: Readonly<{page : RealisationPageData}>) {
    const mainBgUrl = page.imbBaseRealisation.node.sourceUrl;
    const mainBgAlt = page.imbBaseRealisation.node.altText;

    return(
        <div className="wrap">
            <BackgroundManager src={mainBgUrl} alt={mainBgAlt ?? ""} />
        </div>
    );
}