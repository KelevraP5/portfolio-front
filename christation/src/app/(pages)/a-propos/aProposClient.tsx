"use client";

import { useState, useRef } from "react";

import { AboutPageData } from "@/src/types/wpData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import { VerticalImgFrame, VerticalTxtFrame } from "components/contentFrame";
import AProposStyle from "styles/modules/pages/aPropos.module.css";

export default function AProposClient({ page }: Readonly<{ page: AboutPageData }>) {
  const [flipped, setFlipped] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null); // Référence pour le scroll

  const infosMoi = [
    { id: 1, contenu: page.infos1, imgFront: page.infos1Img.node.sourceUrl, imgAlt: page.infos1Img.node.altText ?? "" },
    { id: 2, contenu: page.infos2, imgFront: page.infos2Img.node.sourceUrl, imgAlt: page.infos2Img.node.altText ?? "" },
    { id: 3, contenu: page.infos3, imgFront: page.infos3Img.node.sourceUrl, imgAlt: page.infos3Img.node.altText ?? "" },
  ];

  const handleFlip = (id: number) => {
    setFlipped((prev) => (prev === id ? null : id));
  };

  // Fonction pour naviguer avec les flèches
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8; // On défile de 80% de la vue
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={AProposStyle.listInfosContainer}>
      {/* Flèche Gauche */}
      <button className={`${AProposStyle.navArrow} ${AProposStyle.left} lg:hidden inline`} onClick={() => scroll("left")}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>

      <div className={AProposStyle.listInfosWrapper} ref={scrollRef}>
        {infosMoi.map((infoMoi) => (
          <button
            key={infoMoi.id}
            type="button"
            className={AProposStyle.cadreInfos}
            onClick={() => handleFlip(infoMoi.id)}
          >
            <div className={`${AProposStyle.cardInner} ${flipped === infoMoi.id ? AProposStyle.flipped : ""}`}>
              <div className={AProposStyle.cardFront}>
                <VerticalImgFrame contentImgUrl={infoMoi.imgFront} contentAltText={infoMoi.imgAlt} />
              </div>
              <div className={AProposStyle.cardBack}>
                <VerticalTxtFrame content={infoMoi.contenu} />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Flèche Droite */}
      <button className={`${AProposStyle.navArrow} ${AProposStyle.right} lg:hidden inline`} onClick={() => scroll("right")}>
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </div>
  );
}