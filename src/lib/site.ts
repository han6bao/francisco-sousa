// ─────────────────────────────────────────────────────────────────────────
// Francisco Sousa — site content.
// Copy supplied by the client. Sample-only values are flagged in comments:
// the university LOGO and contact links are TO BE ADDED; film attribution
// on accolades is inferred by year (see ACCOLADES comment).
// Media slots stay labeled placeholder frames (client rule: no generated or
// sourced photos/videos anywhere) - the festival laurels below are the one
// exception, supplied as real assets by the client.
// ─────────────────────────────────────────────────────────────────────────

export const NAV = [
  { id: "films", label: "FILMS" },
  { id: "photography", label: "PHOTOGRAPHY" },
  { id: "about", label: "ABOUT" },
  { id: "recognition", label: "ACCOLADES" },
  { id: "contact", label: "CONTACT" },
] as const;

export const HERO = {
  topLine: "PORTUGAL · FESTIVAL-RECOGNIZED DIRECTOR · AVAILABLE INTERNATIONALLY",
  roleLine: "FILM DIRECTOR · EDITOR · PHOTOGRAPHER",
  tagline: "I film what people don't say.",
  intro:
    "I'm a filmmaker and editor from Portugal, drawn to stories built on emotion, atmosphere, and the things that often go unspoken.",
  cta: "VIEW SELECTED WORK",
};

export type Film = {
  slug: string;
  index: string;
  title: string;
  meta: string;
  synopsis: string;
  views?: string;
  stills: number;
  videoUrl?: string;
};

export const FILMS: Film[] = [
  {
    slug: "white-as-snow",
    index: "01",
    title: "WHITE AS SNOW",
    meta: "2026 · SHORT FILM",
    synopsis:
      "A minimalist fiction short exploring isolation, silence and the emotional distance between what is felt and what is expressed.",
    stills: 3,
  },
  {
    slug: "aquela-estrela",
    index: "02",
    title: "AQUELA ESTRELA",
    meta: "2024 · FILM / VISUAL PROJECT",
    synopsis:
      "A dreamlike visual narrative driven by emotion and color, blending music with abstract storytelling.",
    views: "50K+ views",
    stills: 2,
  },
  {
    slug: "flashback",
    index: "03",
    title: "FLASHBACK",
    meta: "2023 · SHORT FILM",
    synopsis:
      "A psychological short exploring memory, identity and the instability of our own perception.",
    stills: 2,
  },
  {
    slug: "para-nunca-mais-voltar",
    index: "04",
    title: "PARA NUNCA MAIS VOLTAR",
    meta: "2023 · MUSIC VIDEO",
    synopsis:
      "An emotionally driven music video shaped by strong visual identity and narrative atmosphere.",
    views: "80K+ views",
    stills: 2,
  },
  {
    slug: "malesuada-fames",
    index: "05",
    title: "MALESUADA FAMES",
    meta: "2022 · EXPERIMENTAL SHORT",
    synopsis:
      "An experimental film exploring the Seven Deadly Sins and the subtle ways they surface in everyday life.",
    stills: 2,
  },
  {
    slug: "ursinho-de-peluche",
    index: "06",
    title: "URSINHO DE PELUCHE",
    meta: "2021 · HYBRID DOCUMENTARY",
    synopsis: "A portrait of the double life of an English teacher and musician in Porto.",
    stills: 2,
  },
];

export const SELECTED_WORK_HEAD = {
  intro: "Stories built in silence, tension and small gestures.",
  body: "My work moves between fiction, music, documentary, live production and commissioned film, always grounded in a cinematic approach to rhythm, image and emotion.",
};

export const APPROACH = {
  statement: "I'm drawn to what exists beneath the surface.",
  words: "Silence. Restraint. Tension. The weight of an ordinary gesture.",
  paragraphs: [
    "My work begins with atmosphere and authenticity. I'm interested in creating worlds that feel lived-in rather than manufactured, films where image, rhythm and performance work together to leave something behind after the screen goes dark.",
    "Every project is an opportunity to explore a new texture of storytelling while remaining grounded in something recognizably human.",
  ],
};

export const ABOUT = {
  portrait: {
    src: "/images/portrait-bw.jpg",
    alt: "Francisco Sousa with camera on gimbal, golden hour",
  },
  roleLine: "DIRECTOR · EDITOR · FILMMAKER",
  location: "PORTUGAL · AVAILABLE INTERNATIONALLY",
  paragraphs: [
    "I'm a filmmaker and video editor from Portugal with experience across fiction, documentary, music video, live production and branded work.",
    "My approach combines a strong sense of visual composition with instinctive editing and attention to emotional detail. I'm especially interested in the quiet moments, what a character hesitates to say, what exists between two cuts, and how atmosphere can carry as much meaning as dialogue.",
    "Across every format, my goal remains the same: to create work that feels real, cinematic and deeply human.",
  ],
};

export const EDUCATION = {
  logo: {
    src: "/images/catolica-emblem.png",
    alt: "Universidade Católica Portuguesa - emblem",
  },
  school: "PORTUGUESE CATHOLIC UNIVERSITY",
  degree: "BACHELOR'S IN CINEMA",
  tags: ["FILM ANALYSIS", "CINEMATIC STORYTELLING", "DIRECTING", "EDITING"],
  note: "Academic training in Cinema: visual language, narrative structure and cinematic technique across theory and production.",
};

export const COUNTRIES = ["SWEDEN", "ITALY", "UNITED STATES", "PORTUGAL"];

// Real laurel data supplied by the client. Film attribution (WHITE AS SNOW /
// AQUELA ESTRELA) is inferred by matching the laurel year to the filmography;
// correct here if a laurel belongs to a different film.
export const ACCOLADES: {
  country: string;
  entries: { year: string; festival: string; film: string; status: string }[];
}[] = [
  {
    country: "SWEDEN",
    entries: [
      { year: "2026", festival: "Sweden Film Awards", film: "WHITE AS SNOW", status: "WINNER" },
    ],
  },
  {
    country: "ITALY",
    entries: [
      { year: "2026", festival: "Sguardi Scomodi", film: "WHITE AS SNOW", status: "OFFICIAL SELECTION" },
    ],
  },
  {
    country: "UNITED STATES",
    entries: [
      { year: "2024", festival: "Orlando International Film Festival", film: "AQUELA ESTRELA", status: "OFFICIAL SELECTION" },
    ],
  },
  {
    country: "PORTUGAL",
    entries: [
      { year: "2026", festival: "LISBIFF - Lisboa Indie Film Festival", film: "WHITE AS SNOW", status: "OFFICIAL SELECTION" },
      { year: "2024", festival: "3in1 Film Fest", film: "AQUELA ESTRELA", status: "OFFICIAL SELECTION" },
    ],
  },
];

// Laurel graphics supplied by the client (white-on-black, ready for the dark
// ground). Rendered very small in a horizontal row under the country blocks.
export const LAURELS = [
  { src: "/laurels/sweden.png", alt: "Sweden Film Awards 2026 - Winner" },
  { src: "/laurels/italy.png", alt: "Sguardi Scomodi 2026 - Official Selection" },
  { src: "/laurels/usa.png", alt: "Orlando International Film Festival 2024 - Official Selection" },
  { src: "/laurels/portugal.png", alt: "3in1 Film Fest 2024 - Official Selection" },
  { src: "/laurels/lisbiff.png", alt: "LISBIFF Lisboa Indie Film Festival 2026 - Official Selection" },
];

export const COMMISSIONED = [
  {
    title: "BMCAR",
    meta: "2024 · LIVE TELEVISION",
    note: "Captured and edited live television content with an emphasis on rhythm, clarity and fast-turnaround post-production.",
  },
  {
    title: "CRÉDITO AGRÍCOLA",
    meta: "2024 · EVENT FILM",
    note: "Live coverage of Crédito Agrícola's centenary gala, documenting keynote speeches, testimonials and celebratory moments.",
  },
  {
    title: "MUNDOS DE VIDA",
    meta: "2024 · EVENT FILM",
    note: "Captured and edited a graduation ceremony highlighting student achievements, speeches and celebration.",
  },
];

export const WEDDINGS = {
  couples: [
    { names: "BRUNA + MANUEL", year: "2025" },
    { names: "MARIANA + JOÃO", year: "2025" },
    { names: "SARA + RAFAEL", year: "2025" },
  ],
  line: "Human stories, honestly observed.",
  note: "Wedding films approached with the same attention to movement, atmosphere and emotion as Francisco's narrative work.",
  cta: "VIEW FILMS",
};

export const TESTIMONIALS = [
  {
    quote:
      "Francisco is a dedicated and meticulous director. His attention to detail and care for aesthetics make working with him particularly stimulating.",
    name: "RICARDO PINTO",
    role: "CINEMATOGRAPHER",
  },
  {
    quote:
      "Working with Francisco Sousa was a valuable opportunity. His direction is focused, demanding and attentive to each actor's individual process.",
    name: "DANILO RESENDE",
    role: "CINEMA ACTOR",
  },
  {
    quote:
      "Francisco gave me space to give free rein to my creativity while still feeling heard and deeply involved in the project.",
    name: "TATIANA SILVA",
    role: "MAKE UP ARTIST",
  },
];

export const PHOTOGRAPHY = {
  intro: "Studies in light, people and place.",
  body: "A quieter extension of my filmmaking practice, observing composition, texture and human presence through still images.",
  cta: "VIEW PHOTOGRAPHY",
  frames: [
    { label: "PHOTO 01 / PORTRAIT", ratio: "aspect-video", span: "wide" },
    { label: "PHOTO 02 / ON SET", ratio: "aspect-[4/5]", span: "tall" },
    { label: "PHOTO 03 / LOCATION", ratio: "aspect-video", span: "third" },
    { label: "PHOTO 04 / STILL", ratio: "aspect-[4/5]", span: "third" },
    { label: "PHOTO 05 / STREET", ratio: "aspect-square", span: "third" },
  ],
};

export const CONTACT = {
  headline: "LET'S MAKE SOMETHING.",
  sub: "For film, directing, editing, commissioned projects and creative collaborations.",
  location: "PORTUGAL · AVAILABLE INTERNATIONALLY",
  emailCta: "EMAIL FRANCISCO",
  note: "EMAIL ADDRESS TO BE ADDED",
  channels: [
    { label: "INSTAGRAM", value: "TO BE ADDED" },
    { label: "VIMEO", value: "TO BE ADDED" },
    { label: "LINKEDIN", value: "TO BE ADDED" },
  ],
};

export const CLOSING = {
  lines: ["FRANCISCO", "SOUSA"],
  tiny: "DIRECTOR · EDITOR · FILMMAKER",
};