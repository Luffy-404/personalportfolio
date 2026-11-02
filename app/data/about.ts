export const aboutImageAssets = {
  portrait: { fileName: "pp.jpg", contentType: "image/jpeg", alt: "Portrait of Prince Das outdoors" },
  spotify: { fileName: "zg.jpg", contentType: "image/jpeg", alt: "Zubeen Garg music collage artwork" },
  bingeboxd: { fileName: "oppenheimer poster landscape.jpeg", contentType: "image/jpeg", alt: "Oppenheimer film poster" },
  goodreads: { fileName: "atomichb.jpg", contentType: "image/jpeg", alt: "Atomic Habits book cover by James Clear" },
  backloggd: { fileName: "coc.png", contentType: "image/png", alt: "Clash of Clans game artwork" },
} as const;

export type AboutImageAssetKey = keyof typeof aboutImageAssets;
type ActivityImageAssetKey = Exclude<AboutImageAssetKey, "portrait">;

export type JourneyCard = {
  id: ActivityImageAssetKey;
  label: string;
  subtitle: string;
  item: string;
};

export const journeyCards: readonly JourneyCard[] = [
  {
    id: "spotify",
    label: "Spotify",
    subtitle: "Currently vibing to",
    item: "Late-night coding mix",
  },
  {
    id: "bingeboxd",
    label: "BingeBoxd",
    subtitle: "Recently watched",
    item: "A good story, always",
  },
  {
    id: "goodreads",
    label: "Goodreads",
    subtitle: "Currently reading",
    item: "Notes on building better",
  },
  {
    id: "backloggd",
    label: "Backloggd",
    subtitle: "Currently playing",
    item: "One more level",
  },
] as const;
