import { BackgroundManager } from "@/src/components/bgManager";
import { ContactPageData } from "@/src/types/wpData";

export default function ContactClientEN({ pageEN } : Readonly<{pageEN : ContactPageData}>){
    const mainBgSrc = pageEN.imgBaseContact.node.sourceUrl;
    const mainBgAlt = pageEN.imgBaseContact.node.altText;


    return(
        <div>
            <BackgroundManager src={mainBgSrc} alt={mainBgAlt ?? ""} />
            
        </div>
        
    );
}