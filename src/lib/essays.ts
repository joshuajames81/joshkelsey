// The real essays that exist under /writing. Powers the home Writing feed,
// the Writing index, related-essay links, and per-essay schema. No invented
// essays. Titles preserved exactly as published.

export type Essay = {
  slug: string;
  title: string;
  blurb: string;
  meta: string; // short mono line, no dashes
  displayDate: string;
  readTime: string;
  cover: string; // /site-images/<file>.jpg, grayscale
  alt: string;
};

export const essays: Essay[] = [
  {
    slug: "worry-is-the-misuse-of-your-imagination",
    title: "Worry Is the Misuse of Your Imagination",
    blurb:
      "One part of the brain holds your memories, imagines what does not yet exist, and teaches you to be afraid. So worry is not an intruder. It is your highest faculty, aimed the wrong way.",
    meta: "Essay · 7 min read",
    displayDate: "July 2026",
    readTime: "7 min read",
    cover: "/site-images/featured-worry.jpg",
    alt: "A lone figure in shadow, lit from behind",
  },
  {
    slug: "you-cant-make-it-grow",
    title: "You Can't Make It Grow",
    blurb:
      "On auxin, the Greek verb Paul used in 1 Corinthians 3:6, and the one thing none of us can actually do: make the growth happen.",
    meta: "On control · 6 min",
    displayDate: "May 2026",
    readTime: "6 min read",
    cover: "/site-images/land-regrowth.jpg",
    alt: "New growth returning to cleared land",
  },
  {
    slug: "the-press",
    title: "The Press",
    blurb:
      "Gethsemane means press of oils. On the Hebrew gat shemanim, Isaiah's oil of gladness, and why the oil of joy is the oil of crushing.",
    meta: "Gethsemane · 6 min",
    displayDate: "May 2026",
    readTime: "6 min read",
    cover: "/site-images/rome-columns.jpg",
    alt: "Ancient stone columns in low light",
  },
  {
    slug: "the-first-and-the-last",
    title: "The First and the Last",
    blurb:
      "One ran 1:59:30. The other ran 12:16:00. On Sabastian Sawe, Clair Roberts, and what both of them teach us about finishing, faith, and the race called life.",
    meta: "On finishing · 8 min",
    displayDate: "April 2026",
    readTime: "8 min read",
    cover: "/site-images/airplane-window.jpg",
    alt: "A view of the horizon through an airplane window",
  },
  {
    slug: "the-church-is-not-the-fount",
    title: "The church is not the Fount",
    blurb:
      "On the hymn that gave our church its name, the theology behind it, and why it matters more now than ever.",
    meta: "The Fount · 6 min",
    displayDate: "April 2026",
    readTime: "6 min read",
    cover: "/site-images/nyc-follow-jesus-sign.jpg",
    alt: "A hand painted sign on a New York City street",
  },
  {
    slug: "thirteen-years-in-nyc",
    title: "Thirteen years in New York City",
    blurb:
      "What I've learned about pastoring, planting, and loving a city that does not love back easily.",
    meta: "New York · 9 min",
    displayDate: "March 2026",
    readTime: "9 min read",
    cover: "/site-images/nyc-williamsburg-bridge.jpg",
    alt: "The Williamsburg Bridge over the East River",
  },
  {
    slug: "on-preaching-the-whole-text",
    title: "On preaching the whole text",
    blurb:
      "Preaching isn't a question of style. It's a question of whose voice is supposed to be loudest in the room.",
    meta: "Preaching · 7 min",
    displayDate: "February 2026",
    readTime: "7 min read",
    cover: "/site-images/bible-silhouettes.jpg",
    alt: "Silhouetted figures against soft light",
  },
];

export const featuredEssay = essays[0];
export const feedEssays = essays.slice(1); // the six real essays under the feature

export function relatedEssays(slug: string, n = 3): Essay[] {
  return essays.filter((e) => e.slug !== slug).slice(0, n);
}
