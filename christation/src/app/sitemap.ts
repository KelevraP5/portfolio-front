import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.WP_SITE_URL!;

  // Pages statiques
  const staticPages = [
    "",
    "/a-propos",
    "/realisations",
    "/contact",
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  return [...staticUrls];
}
