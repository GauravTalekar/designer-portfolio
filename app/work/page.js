import FadeInObserver from "@/components/fade-in-observer";
import ProjectsSection from "@/components/projects/projects-section";
import { projects as allProjects } from "@/data/projects";

export const metadata = {
  title: 'Projects Created By - Gaurav Talekar',
};

export async function generateMetadata() {
  return {
    title: "Projects Created By - Gaurav Talekar",
    description: "Explore Gaurav Talekar's projects and details about each artifact crafted with details.",
    openGraph: {
      title: "Projects Created By - Gaurav Talekar",
      description: "Explore Gaurav Talekar's projects and details about each artifact crafted with details.",
      url: `https://${data.domain}/about`,
      images: [
        {
          url: "/images/gaurav-talekar.jpg",
          width: 1080,
          height: 1080,
          alt: "Portrait of Gaurav Talekar"
        },
      ],
      type: "website",
    },
    twitter: {
      card: 'summary_large_image',
      title: "Projects Created By - Gaurav Talekar",
      description: "Explore Gaurav Talekar's projects and details about each artifact crafted with details.",
      images: ["/images/gaurav-talekar.jpg"],
    },
  }
}

const ITEMS_PER_PAGE = 6;

export default async function Work({ searchParams }) {

  // Await searchParams to avoid the sync-dynamic-apis error.
  const sp = await searchParams;
  
  // Normalize search parameters to ensure defaults if none are provided.
  const queryParams = {
    q: sp.q || "",
    type: sp.type || "",
    sort: sp.sort || "desc",
    page: sp.page || "1",
  };

  // Create a copy of the projects array for filtering.
  let filteredProjects = [...allProjects];

  // 1. Filter by project name if a search query is provided.
  if (queryParams.q) {
    const qLower = queryParams.q.toLowerCase();
    filteredProjects = filteredProjects.filter((project) =>
      project["project-name"].toLowerCase().includes(qLower)
    );
  }

  // 2. Filter by project type if provided.
  if (queryParams.type) {
    filteredProjects = filteredProjects.filter(
      (project) => project.type === queryParams.type
    );
  }

  // 3. Sort by "made-in" date.
  // "desc" (newest first) is the default.
  filteredProjects.sort((a, b) => {
    if (queryParams.sort === "asc") {
      return new Date(a["made-in"]) - new Date(b["made-in"]);
    } else {
      return new Date(b["made-in"]) - new Date(a["made-in"]);
    }
  });

  // 4. Pagination.
  const page = parseInt(queryParams.page) || 1;
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  return (
    <>
      <FadeInObserver />
      <ProjectsSection
         projects={paginatedProjects}
         currentPage={page}
         totalPages={totalPages}
         queryParams={queryParams}
      />
    </>
  );
}