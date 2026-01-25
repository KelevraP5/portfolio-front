"use client";

import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";

type BackgroundContextType = {
  backgroundImage: string | null;
  setBackgroundImage: (img: string | null) => void;
};

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const BackgroundProvider = ({ children }: { children: React.ReactNode }) => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/'){
        setBackgroundImage(null);
    }
  }, [pathname]);

  const contextValue = useMemo<BackgroundContextType>(() => ({
    backgroundImage,
    setBackgroundImage,
  }),
  [backgroundImage]
);

  return (
    <BackgroundContext.Provider value={contextValue}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
};
