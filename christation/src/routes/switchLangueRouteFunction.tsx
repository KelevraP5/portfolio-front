"use client"

import { usePathname, useRouter } from "next/navigation";
import { routes } from "../routes/routes";

export default function switchLangueRoutes() {
  const router = useRouter();
  const pathname = usePathname();

  const pathRoute = (varRoute : string) => {
    return pathname === varRoute;
  }

  const handleSwich = () => {
    const isEN = pathname.startsWith("/en");
    const routeFR = routes.fr;
    const routeEN = routes.en;

    if (isEN) {
      if (pathRoute(routeEN.home)) {
        router.push(routeFR.accueil);

      } else if (pathRoute(routeEN.about)) {
        router.push(routeFR.aPropos);
      }

    } else if (!isEN) {
      if (pathRoute(routeFR.accueil)) {
        router.push(routeEN.home);
        
      } else if (pathRoute(routeFR.aPropos)) {
        router.push(routeEN.about);
      }
    }
  };

  return handleSwich;
}
