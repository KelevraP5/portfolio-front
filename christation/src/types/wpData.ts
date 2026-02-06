export type MediaNode = {
    node: {
        sourceUrl: string,
        altText?: string | null
    };
};

export type HomePageData = {
    imgBaseHome: MediaNode;
    imgBaseHomeWebp : MediaNode;
    
    menu1 : string;
    menu1Img : MediaNode;
    menu1Webp : MediaNode;

    menu2 : string;
    menu2Img : MediaNode;
    menu2Webp : MediaNode;

    menu3 : string;
    menu3Img : MediaNode;
    menu3Webp : MediaNode;
};