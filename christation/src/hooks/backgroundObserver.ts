"use client";

import { useEffect, useRef } from "react";

// On définit le type pour plus de sécurité
interface Menu {
  id: string;
  bgImg: string;
  bgImgAlt: string;
  [key: string]: any; 
}

export function useBackgroundObserver(
  menus: any[],
  setBackgroundImage: (bg: any) => void
) {
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    // On ne lance l'observer que si on est sur mobile/tablette (< 800px)
    if (!container || window.innerWidth > 800) return;

    const observerOptions = {
      root: null, // On observe par rapport a l'écran
      threshold: 1, // l'élément est considéré comme actif quand 100% de sa surface est visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const menuId = entry.target.getAttribute("data-menu-id");
          const activeMenu = menus.find((m) => m.id === menuId);

          if (activeMenu) {
            setBackgroundImage({ 
              src: activeMenu.bgImg, 
              alt: activeMenu.bgImgAlt 
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // On cible tous les <li> à l'intérieur du conteneur
    const items = container.querySelectorAll("li");
    items.forEach((item) => observer.observe(item));

    // ✅ Nettoyage : on déconnecte l'observer quand le composant est détruit
    return () => observer.disconnect();
  }, [menus, setBackgroundImage]);

  return scrollContainerRef;
}