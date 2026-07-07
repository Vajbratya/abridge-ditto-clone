import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";
import { allLaudosPages } from "./laudos-page-utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return allLaudosPages.map((page) => {
    const isHome = page.slug === "";
    const isTemplate = page.slug.startsWith("templates/");
    const isBlog = page.slug.startsWith("blog/");

    return {
      url: `${SITE_ORIGIN}${isHome ? "" : `/${page.slug}`}`,
      changeFrequency: isTemplate ? "monthly" : isBlog ? "weekly" : "weekly",
      priority: isHome ? 1 : isTemplate ? 0.72 : isBlog ? 0.78 : 0.82,
    };
  });
}
