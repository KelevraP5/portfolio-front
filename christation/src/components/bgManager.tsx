"use client";

import { useLayoutEffect } from "react";
import { useBackground } from "../contexts/HomeBgContext";

export function BackgroundManager({ src, alt }: { src: string, alt?: string }) {
  const { setDefaultBackground, setBackgroundImage } = useBackground();

  useLayoutEffect(() => {
    const newBg = { src, alt: alt ?? "" };
    setDefaultBackground(newBg);
    setBackgroundImage(newBg); // On l'affiche immédiatement
  }, [src, alt, setDefaultBackground, setBackgroundImage]);

  return null; // Composant invisible
}