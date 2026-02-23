"use client";

import { useState, useRef } from "react";

import { AboutPageData } from "@/src/types/wpData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import { VerticalImgFrame, VerticalTxtFrame } from "components/contentFrame";
import AProposStyle from "styles/modules/pages/aPropos.module.css";
import { BackgroundManager } from "@/src/components/bgManager";

export default function AboutClient({ pageEN }: Readonly<{ pageEN: AboutPageData }>) {
  const mainBgSrc = pageEN.imgBaseAPropos.node.sourceUrl;
  const mainBgAlt = pageEN.imgBaseAPropos.node.altText;
  
  const [flipped, setFlipped] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null); // Référence pour le scroll

  const infosMoi = [
    { id: 1, contenu: pageEN.infos1, imgFront: pageEN.infos1Img.node.sourceUrl, imgAlt: pageEN.infos1Img.node.altText ?? "" },
    { id: 2, contenu: pageEN.infos2, imgFront: pageEN.infos2Img.node.sourceUrl, imgAlt: pageEN.infos2Img.node.altText ?? "" },
    { id: 3, contenu: pageEN.infos3, imgFront: pageEN.infos3Img.node.sourceUrl, imgAlt: pageEN.infos3Img.node.altText ?? "" },
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
      <BackgroundManager src={mainBgSrc} alt={mainBgAlt ?? ""} />
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