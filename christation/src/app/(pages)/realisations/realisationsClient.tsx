"use client";
import { useRef } from "react";

import { BackgroundManager } from "@/src/components/bgManager";
import { RealisationPageData } from "@/src/types/wpData";
import { ExitCross } from "@/src/components/buttons";
import {
  HorizontalTxtFrame,
  VerticalImgFrame,
} from "@/src/components/contentFrame";
import { routes } from "@/src/routes/routes";

import realStyle from "@/src/app/styles/modules/pages/realisations.module.css";

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
      resume: page.descriptionProjet1,
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
      resume: page.descriptionProjet2,
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
      resume: page.descriptionProjet3,
    },
  ];
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <div className="wrap">
      <BackgroundManager src={mainBgUrl} alt={mainBgAlt ?? ""} />
      <div className="w-[100%] h-[100%] flex justify-around items-center">
        {projets.map((projet) => (
          <div key={projet.id} className={`${projet.nom}`}>
            <dialog
              ref={dialogRef}
              className="border-0 m-auto w-[90%] h-[90%]"
            >
              <div className="w-[100%] h-[100%]">
                <button
                  className="absolute top-[0.5rem] right-[1rem] cursor-pointer"
                  onClick={closeModal}
                >
                  <ExitCross alt="croix pour fermer la modale" />
                </button>

                <div className="h-full flex flex-col justify-evenly items-center">
                  <div className="w-[400px] h-[400px]">
                    <VerticalImgFrame
                      contentImgUrl={projet.imgPrinc}
                      contentAltText={projet.imgPrincAlt}
                      route={routes.fr.realisations}
                    />
                  </div>

                  <div className="w-[95%] h-[300px]">
                    <HorizontalTxtFrame content={projet.resume} lang="fr"/>
                  </div>
                </div>
              </div>
            </dialog>

            <div className="flex flex-col justify-center items-center gap-4">
              <button
                onClick={openModal}
                className="w-[250px] h-[250px] cursor-pointer"
              >
                <VerticalImgFrame
                  contentImgUrl={projet.imgPrinc}
                  contentAltText={projet.imgPrincAlt}
                  route={routes.fr.realisations}
                />
              </button>

              <div>
                <h2>{projet.nom}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
