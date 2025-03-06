"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Définition du type du contexte
interface BgImgMenuContextType {
  bgImgMenu: string;
  setBgImgMenu: (image: string) => void;
}

// Création du contexte avec une valeur par défaut (qui ne sera jamais utilisée)
const BgImgMenuContext = createContext<BgImgMenuContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte
export const useBgImgMenu = () => {
  const context = useContext(BgImgMenuContext);
  if (!context) {
    throw new Error("useBgImgMenu must be used within a BgImgMenuProvider");
  }
  return context;
};

// Provider du contexte
export function BgImgMenuProvider({ children }: { children: ReactNode }) {
  const [bgImgMenu, setBgImgMenu] = useState("");

  return (
    <BgImgMenuContext.Provider value={{ bgImgMenu, setBgImgMenu }}>
      {children}
    </BgImgMenuContext.Provider>
  );
}
