import { projects } from "@/data/projects";
import { data } from "@/data/site-details";

export default async function sitemap() {
  const baseUrl = `https://${data.domain}`;

  const staticPages = [
    { url: `${baseUrl}/about`, lastModified: new Date('02, 09, 2025').toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date('02, 09, 2025').toISOString() },
    { url: `${baseUrl}/resume`, lastModified: new Date('02, 09, 2025').toISOString() },
    { url: `${baseUrl}/services`, lastModified: new Date('02, 09, 2025').toISOString() },
  ];

  // Dynamically generate URLs for project pages
  const allProjects = projects;
  const projectPages = allProjects.map((project) => ({
    url: `${baseUrl}/work/${project.link}`,
    lastModified: project.lastModified.toISOString(),
    // changeFrequency: 'monthly',
    // priority: 0.8,
  }));

  // Combine static and dynamic pages
  return [...staticPages, ...projectPages];
}
