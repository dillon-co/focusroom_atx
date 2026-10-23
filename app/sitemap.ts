import type { MetadataRoute } from "next";

const SITE = "https://www.thefocusroomatx.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE, priority: 1 }, { url: `${SITE}/apply`, priority: 0.8 }, { url: `${SITE}/privacy`, priority: 0.2 }, { url: `${SITE}/terms`, priority: 0.2 }];
}
