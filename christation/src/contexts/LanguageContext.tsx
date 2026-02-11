"use client";

import { createContext, useContext, useMemo, useState } from "react";

type Language = "fr" | "en";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageContextProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: Readonly<LanguageContextProps>) {
  const [language, setLanguage] = useState<Language>("fr");

  function toggleLanguage() {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  }

  const contextValue = useMemo(
    () => ({
      language,
      toggleLanguage,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}