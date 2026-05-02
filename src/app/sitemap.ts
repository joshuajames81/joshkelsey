import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://joshkelsey.org";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sermons`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/writing`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${base}/writing/the-church-is-not-the-fount`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/writing/thirteen-years-in-nyc`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/writing/on-preaching-the-whole-text`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Dinner Parties training library
    { url: `${base}/dinner-parties`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/dinner-parties/vision`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/dinner-parties/the-night`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/dinner-parties/leadership-roles`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/dinner-parties/culture`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/dinner-parties/heart-of-a-leader`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/dinner-parties/raising-leaders`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/dinner-parties/multiplication`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/dinner-parties/sustainability`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/dinner-parties/invitation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/dinner-parties/menu-ideas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/dinner-parties/leaders-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/press`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/press/eternity-news-dinner-party-church`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Other sections
    { url: `${base}/church-planting`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/for-leaders`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/podcast`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}
