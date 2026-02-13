type TrophiesType = {
  id: number;
  trophyName: string;
  trophySummary: string;
};

type TradTrophiesType = {
  fr: TrophiesType[];
  en: TrophiesType[];
}



// export const tradTrophies : TradTrophiesType = {
//   fr: [
//     {
//       id: 1,
//       trophyName: "trophée 1",
//       trophySummary: "voici le résumé de ce trophée. Bravo !",
//     },

//     {
//       id: 2,
//       trophyName: "trophée 2",
//       trophySummary: "voici le résumé de ce trophée. Bravo !",
//     },

//     {
//       id: 3,
//       trophyName: "trophée 3",
//       trophySummary: "voici le résumé de ce trophée. Bravo !",
//     },

//     {
//       id: 4,
//       trophyName: "trophée 4",
//       trophySummary: "voici le résumé de ce trophée. Bravo !",
//     },
//   ],

//   en: [
//     {
//       id: 1,
//       trophyName: "trophy 1",
//       trophySummary: "Here is a summary of this trophy. Congratulations!",
//     },

//     {
//       id: 2,
//       trophyName: "trophy 2",
//       trophySummary: "Here is a summary of this trophy. Congratulations!",
//     },

//     {
//       id: 3,
//       trophyName: "trophy 3",
//       trophySummary: "Here is a summary of this trophy. Congratulations!",
//     },

//     {
//       id: 4,
//       trophyName: "trophy 4",
//       trophySummary: "Here is a summary of this trophy. Congratulations!",
//     },
//   ],
// } as const;

export const tradTrophies: Record<"fr" | "en", TrophiesType[]> = {
  fr: [
    { id: 1, trophyName: "trophée 1", trophySummary: "voici le résumé de ce trophée. Bravo !" },
    { id: 2, trophyName: "trophée 2", trophySummary: "voici le résumé de ce trophée. Bravo !" },
    { id: 3, trophyName: "trophée 3", trophySummary: "voici le résumé de ce trophée. Bravo !" },
    { id: 4, trophyName: "trophée 4", trophySummary: "voici le résumé de ce trophée. Bravo !" },
  ],
  en: [
    { id: 1, trophyName: "trophy 1", trophySummary: "Here is a summary of this trophy. Congratulations!" },
    { id: 2, trophyName: "trophy 2", trophySummary: "Here is a summary of this trophy. Congratulations!" },
    { id: 3, trophyName: "trophy 3", trophySummary: "Here is a summary of this trophy. Congratulations!" },
    { id: 4, trophyName: "trophy 4", trophySummary: "Here is a summary of this trophy. Congratulations!" },
  ],
};
