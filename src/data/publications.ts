export type Publication = {
  year: string;
  title: string;
  authors: string;
  venue: string;
  type: string;
  doi?: string;
  url?: string;
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    year: "2026",
    title:
      "A Pattern Language for Head-Mounted AR in Museums: Parameterized, Composable, and Reproducible",
    authors: "Yu Liu, Ulrike Spierling",
    venue:
      "ACM International Conference on Interactive Media Experiences (IMX)",
    type: "Conference Paper",
    doi: "10.1145/3788851.3805010",
    featured: true,
  },

  {
    year: "2026",
    title:
      "Semantic Anchoring in HMD-based Museum AR: A Mixed-Methods Study of UI Placement and Experience",
    authors: "Yu Liu, Ulrike Spierling",
    venue: "HCII 2026",
    type: "Conference Paper",
    featured: true,
  },

  {
    year: "2026",
    title:
      "Parameterized Head-Mounted Augmented Reality Design Patterns for Cultural Heritage: An Empirical Study",
    authors: "Yu Liu, Ulrike Spierling",
    venue: "HCII 2026",
    type: "Conference Paper",
    featured: true,
  },

  {
    year: "2026",
    title:
      "Comparing Flow, Narrative, and Spatial Immersion in an HMD-AR Serious Game for Museum Learning",
    authors: "Yu Liu, Michael Lurz, Ulrike Spierling",
    venue: "ECGBL 2026",
    type: "Conference Paper",
    featured: true,
  },

  {
    year: "2025",
    title: "Design Patterns for Playful AR Experiences in Museums",
    authors: "Yu Liu, Manuel Feller, Ulrike Spierling",
    venue: "ACM Designing Interactive Systems Conference (DIS)",
    type: "Conference Paper",
    featured: true,
  },
];
