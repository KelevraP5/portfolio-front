"use client";

import Image from "next/image";

import vertCardFrame from "@/public/assets/vertFullFrame.svg";

import style from "styles/modules/components/contentFrame.module.css";

interface VerticalImgFrameProps {
  contentImgUrl: string;
  contentAltText: string;
}

export function VerticalImgFrame({
  contentImgUrl,
  contentAltText,
}: Readonly<VerticalImgFrameProps>) {
  return (
    <div className={`${style.frameContainer}`}>
      {/* 1. L'IMAGE DU CADRE (en arrière-plan ou premier plan selon tes PNG) */}
      <div className={`${style.frameAsset}`}>
        <Image
          src={vertCardFrame}
          alt="Cadre avec des bords concaves"
          width={500}
          height={500}
          priority
          fetchPriority="high"
        />
      </div>

      {/* 2. L'IMAGE DYNAMIQUE (insérée dans une zone précise) */}
      <div className={`${style.dynWrapper}`}>
        <Image
          src={contentImgUrl}
          alt={contentAltText}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    </div>
  );
}

interface VerticalTxtFrameProps {
  content: string;
}

export function VerticalTxtFrame({ content }: Readonly<VerticalTxtFrameProps>) {
  return (
    <div className={style.frameContainer}>
      <div className={style.frameAsset}>
        <Image
          src={vertCardFrame}
          alt="Cadre"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className={style.txtWrapper}>
        <div className={style.scrollableArea}>
          <p >{content}</p>
        </div>
      </div>
    </div>
  );
}
