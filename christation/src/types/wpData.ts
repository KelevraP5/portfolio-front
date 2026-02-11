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