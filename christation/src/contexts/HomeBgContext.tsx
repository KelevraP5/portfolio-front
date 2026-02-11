"use client";

import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageContext";

type BgImage = {
  src: string;
  alt?: string;
};

type BackgroundContextType = {
  backgroundImage: BgImage | null;
  setBackgroundImage: (img: BgImage | null) => void;

  defaultBackground: BgImage | null;
  setDefaultBackground: (img: BgImage) => void;
};

/* ✅ Création du Context */
const BackgroundContext = createContext<BackgroundContextType | undefined>(
  undefined
);

export const BackgroundProvider = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();
  
  const [backgroundImage, setBackgroundImage] = useState<BgImage | null>(null);
  const [defaultBackground, setDefaultBackground] = useState<BgImage | null>(null);

  const pathname = usePathname();

  /* ✅ Reset si on quitte "/" */
  useEffect(() => {
    if (pathname !== "/" && pathname !== "/en") {
      setBackgroundImage(null);
      setDefaultBackground(null);
    }
  }, [pathname]);  

  /* ✅ useMemo pour éviter warning React */
  const contextValue = useMemo(() => ({
    backgroundImage,
    setBackgroundImage,
    
    defaultBackground,
    setDefaultBackground
  }), [backgroundImage, defaultBackground]);

  return (
    <BackgroundContext.Provider key={language} value={contextValue}>
      {children}
    </BackgroundContext.Provider>
  );
};

/* ✅ Hook */
export const useBackground = () => {
  const context = useContext(BackgroundContext);

  if (!context) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }

  return context;
};
