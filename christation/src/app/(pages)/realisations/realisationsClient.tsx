import { BackgroundManager } from "@/src/components/bgManager";
import { RealisationPageData } from "@/src/types/wpData";

export default function RealisationsClient({
  page,
}: Readonly<{ page: RealisationPageData }>) {
  const mainBgUrl = page.imgBaseRealisations.node.sourceUrl;
  const mainBgAlt = page.imgBaseRealisations.node.altText;

  const projets = [
    {
      id: 1,
      nom: page.nomProjet1,
      imgPrinc: page.imgprincipalProjet1.node.sourceUrl,
      imgPrincAlt: page.imgprincipalProjet1.node.altText ?? "",
      imgDiapo2: page.img2Projet1.node.sourceUrl,
      imgDiapo2Alt: page.img2Projet1.node.altText ?? "",
      imgDiapo3: page.img3Projet1.node.sourceUrl,
      imgDiapo3Alt: page.img3Projet1.node.altText ?? "",
    },
    {
      id: 2,
      nom: page.nomProjet2,
      imgPrinc: page.imgprincipalProjet2.node.sourceUrl,
      imgPrincAlt: page.imgprincipalProjet2.node.altText ?? "",
      imgDiapo2: page.img2Projet2.node.sourceUrl,
      imgDiapo2Alt: page.img2Projet2.node.altText ?? "",
      imgDiapo3: page.img3Projet2.node.sourceUrl,
      imgDiapo3Alt: page.img3Projet2.node.altText ?? "",
    },
    {
      id: 3,
      nom: page.nomProjet3,
      imgPrinc: page.imgprincipalProjet3.node.sourceUrl,
      imgPrincAlt: page.imgprincipalProjet3.node.altText ?? "",
      imgDiapo2: page.img2Projet3.node.sourceUrl,
      imgDiapo2Alt: page.img2Projet3.node.altText ?? "",
      imgDiapo3: page.img3Projet3.node.sourceUrl,
      imgDiapo3Alt: page.img3Projet3.node.altText ?? "",
    },
  ];

  return (
    <div className="wrap">
      <BackgroundManager src={mainBgUrl} alt={mainBgAlt ?? ""} />
      <div>
        {projets.map((projet) => (
          <div key={projet.id}>
            <p>{projet.nom}</p>
            <img src={projet.imgPrinc} alt={projet.imgPrincAlt} />
            <img src={projet.imgDiapo2} alt={projet.imgDiapo2Alt} />
            <img src={projet.imgDiapo3} alt={projet.imgDiapo3Alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
