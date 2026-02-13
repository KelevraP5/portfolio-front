import { usePathname } from "next/navigation";

type Traduction = Record<"fr" | "en", any>

export function useTranslation<T extends Traduction>(translations: T) : T["fr"] | T["en"] {

    const lang = usePathname().startsWith("/en") ? "en" : "fr";

    return translations[lang];
}

