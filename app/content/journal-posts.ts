export type JournalPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  sections: { heading?: string; paragraphs: string[] }[];
};

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: "how-to-choose-a-quality-handbag",
    title: "How to choose a quality handbag",
    date: "2026-04-01",
    readTime: "5 min read",
    excerpt:
      "What to look for in stitching, hardware, and lining—so your next bag feels as good as it looks.",
    sections: [
      {
        paragraphs: [
          "A good handbag should feel balanced in the hand: straps attached cleanly, seams straight, and weight distributed so nothing pulls awkwardly when you load it.",
          "Check stitching first—tight, even thread with no loose ends at stress points (handles, base corners). On leather, small irregularities can be natural; uneven stitch length across a seam often isn’t.",
        ],
      },
      {
        heading: "Hardware & lining",
        paragraphs: [
          "Zippers should run smoothly without catching; pulls shouldn’t feel flimsy. For bags you’ll open often, metal hardware usually outlasts painted plastic.",
          "Lining should be secured at seams, not bunched. A neat interior usually reflects care everywhere else.",
        ],
      },
      {
        heading: "Fit for your life",
        paragraphs: [
          "Decide what you carry daily—phone, keys, small pouch, maybe a tablet—and choose a silhouette that closes the way you like (zip, flap, magnet). The “right” bag is the one you’ll actually use.",
        ],
      },
    ],
  },
  {
    slug: "how-to-maintain-leather-bags",
    title: "How to maintain leather bags",
    date: "2026-04-03",
    readTime: "4 min read",
    excerpt: "Simple habits that extend the life of leather—storage, cleaning, and when to ask a pro.",
    sections: [
      {
        paragraphs: [
          "Wipe dust off regularly with a soft, dry cloth. For light marks, a slightly damp cloth and immediate air-drying often help—avoid soaking the leather.",
          "Store bags stuffed lightly to hold shape, in a dust bag if you have one, away from direct sun and radiators.",
        ],
      },
      {
        heading: "Conditioning",
        paragraphs: [
          "A quality leather conditioner a few times a year (or when leather feels dry) keeps fibres supple. Always test a small hidden area first.",
        ],
      },
    ],
  },
  {
    slug: "bag-trends-in-nigeria",
    title: "Bag trends in Nigeria",
    date: "2026-04-05",
    readTime: "4 min read",
    excerpt: "What we’re seeing in colour, shape, and occasion wear—without chasing every fast trend.",
    sections: [
      {
        paragraphs: [
          "Neutrals remain a staple for work and events, while structured totes and clean crossbodies stay popular for everyday movement between city and travel.",
          "Custom and souvenir orders often favour cohesive palettes—greens, creams, and gold accents—that photograph well for weddings and corporate gifting.",
        ],
      },
    ],
  },
  {
    slug: "behind-the-scenes-crafting-a-bag",
    title: "Behind the scenes: crafting a bag from cut to stitch",
    date: "2026-04-08",
    readTime: "6 min read",
    excerpt: "A simple walkthrough of how a pattern becomes a finished piece in the workshop.",
    sections: [
      {
        paragraphs: [
          "It starts with pattern and leather selection—grain direction, thickness, and how the piece will wear at folds and handles.",
          "Pieces are cut, edges prepared, then assembled in order so linings and pockets stay accessible before final seams close the shell.",
        ],
      },
      {
        heading: "Finishing",
        paragraphs: [
          "Edge finishing, hardware setting, and a last quality pass ensure the bag is gift-ready—because details are where premium shows.",
        ],
      },
    ],
  },
  {
    slug: "starting-a-bag-business-first-steps",
    title: "Starting a bag business: first steps",
    date: "2026-04-10",
    readTime: "5 min read",
    excerpt: "Skills, sourcing, and positioning—before you scale.",
    sections: [
      {
        paragraphs: [
          "Build skill first: consistent construction matters more than a large catalogue. Training or mentorship can shorten the trial-and-error phase.",
          "Define who you serve—everyday carry, events, corporate gifts—and price for materials, time, and finishing, not just competitors’ tags.",
        ],
      },
      {
        heading: "Presence & trust",
        paragraphs: [
          "Clear photos, honest lead times, and responsive communication build trust before someone places a custom order. Start small, deliver well, then grow.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): JournalPost | undefined {
  return JOURNAL_POSTS.find((p) => p.slug === slug);
}
