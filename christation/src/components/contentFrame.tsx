"use client";

import Image from "next/image";
import { useState, useLayoutEffect, useRef } from 'react';

import style from "styles/modules/components/contentFrame.module.css";

import { routes } from "../routes/routes";
import { tradText } from "../traductions/tradText";

export function useTextOverflow(dependencies: any[]) {
  const [hasOverflow, setHasOverflow] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    // Cette fonction sera appelée à chaque fois que la taille de l'élément change
    const checkOverflow = () => {
      // On vérifie que l'élément est bien visible (hauteur > 0)
      if (element.clientHeight > 0) {
        const isOverflowing = element.scrollHeight > element.clientHeight;
        setHasOverflow(isOverflowing);
      }
    };

    // Le ResizeObserver surveille l'apparition et le redimensionnement
    const resizeObserver = new ResizeObserver(() => {
      checkOverflow();
    });

    resizeObserver.observe(element);

    // Vérification initiale
    checkOverflow();

    return () => {
      resizeObserver.disconnect();
    };
    // On garde les dépendances pour forcer le recalcul si le texte change
  }, [dependencies]);

  return { scrollRef, hasOverflow };
}

interface VerticalImgFrameProps {
  contentImgUrl: string;
  contentAltText: string;
  route: string;
}

export function VerticalImgFrame({
  contentImgUrl,
  contentAltText,
  route,
}: Readonly<VerticalImgFrameProps>) {
  // Gestion de ta classe "small" selon la route
  const routeClass: Record<string, string> = {
    [routes.fr.realisations]: style.small,
    [routes.en.projects]: style.small,
    [routes.fr.aPropos]: "",
    [routes.en.about]: "",
  };

  const wrapperClass = routeClass[route] ?? "";

  return (
    <div className={style.frameContainer}>
      {/* Le Masque global qui contient l'image */}
      <div className={`${style.dynWrapper} ${wrapperClass}`}>
        {/* Le div qui gère les marges de l'image (top/left/right/bottom) */}
        <div className={style.imgInner}>
          <Image
            src={contentImgUrl}
            alt={contentAltText}
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

interface VerticalTxtFrameProps {
  content: string;
  lang: string;
}

export function VerticalTxtFrame({ content, lang }: Readonly<VerticalTxtFrameProps>) {
  const {scrollRef, hasOverflow} = useTextOverflow([content]);

  return (
    <div className={style.frameContainer}>
      <div className={style.frameAsset}>
        <div className={style.txtWrapper}>
          <div className={style.scrollableArea} ref={scrollRef}>
            <p>{content}</p>
          </div>
        </div>
        { hasOverflow && (
          lang === "fr" ? <span className={style.verticalScroll}>{tradText.fr.scroll}</span> : <span className={style.verticalScroll}>{tradText.en.scroll}</span>
        ) }
      </div>
    </div>
  );
}

interface HorizontalTxtFrameProps {
  content: string;
  lang : string;
}

export function HorizontalTxtFrame({
  content, lang
}: Readonly<HorizontalTxtFrameProps>) {

const {scrollRef, hasOverflow} = useTextOverflow([content]);

  return (
    <div className={style.horiFrameContainer}>
      <div className={style.frameAsset}>
        <div className={style.horiTxtWrapper}>
          <div className={style.scrollableArea} ref={scrollRef}>
            <p>{content}</p>
          </div>
        </div>
        { hasOverflow && (
          lang === "fr" ? <span className={style.horizontalScroll}>{tradText.fr.scroll}</span> : <span className={style.horizontalScroll}>{tradText.en.scroll}</span>
        ) }
      </div>
    </div>
  );
}
