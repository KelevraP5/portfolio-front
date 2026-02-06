// import { MetadataRoute } from "next";
// import { getAllProjects } from "@/src/graphqlServices/projectServices";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const baseUrl = "https://ton-domaine.fr";

//   // Pages statiques
//   const staticPages = [
//     "",
//     "/a-propos",
//     "/realisations",
//     "/contact",
//   ];

//   const staticUrls = staticPages.map((path) => ({
//     url: `${baseUrl}${path}`,
//     lastModified: new Date(),
//   }));

//   // Pages dynamiques (projets)
//   const projects = await getAllProjects();

//   const projectUrls = projects.map((project: any) => ({
//     url: `${baseUrl}/realisations/${project.slug}`,
//     lastModified: project.modified
//       ? new Date(project.modified)
//       : new Date(),
//   }));

//   return [...staticUrls, ...projectUrls];
// }
