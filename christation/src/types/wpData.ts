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

export type ContactPageData = {
    imgBaseContact: MediaNode;
};

export type RealisationPageData = {
    imgBaseRealisations : MediaNode;

    nomProjet1 : string;
    imgprincipalProjet1 : MediaNode;
    img2Projet1 : MediaNode;
    img3Projet1 : MediaNode;
    descriptionProjet1 : string;

    nomProjet2 : string;
    imgprincipalProjet2 : MediaNode;
    img2Projet2 : MediaNode;
    img3Projet2 : MediaNode;
    descriptionProjet2 : string;

    nomProjet3 : string;
    imgprincipalProjet3 : MediaNode;
    img2Projet3 : MediaNode;
    img3Projet3 : MediaNode;
    descriptionProjet3 : string;
    
}