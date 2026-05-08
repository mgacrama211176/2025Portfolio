import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["#about", "#strengths", "#work", "#exp", "#stack", "#evo", "#contact"].map(
      (hash) => ({
        url: `${SITE.url}/${hash}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }),
    ),
  ];
}
