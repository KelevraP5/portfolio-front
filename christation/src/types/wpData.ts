export type MediaNode = {
    node: {
        sourceUrl: string,
        altText?: string | null
    };
};

export type HomePageData = {
    imgBaseHome: MediaNode;
    
    menu1 : string;
    menu1Img : MediaNode;

    menu2 : string;
    menu2Img : MediaNode;

    menu3 : string;
    menu3Img : MediaNode;
};

export type AboutPageData = {
    imgBaseAPropos: MediaNode;
    
    infos1 : string;
    infos1Img : MediaNode;

    infos2 : string;
    infos2Img : MediaNode;

    infos3 : string;
    infos3Img : MediaNode;
};