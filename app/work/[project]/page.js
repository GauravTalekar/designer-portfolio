import FadeInObserver from "@/components/fade-in-observer";
import ParagraphTemplate from "@/components/paragraph-template";
import ProjectLightbox from "@/components/projects/lightbox";
import SectionComponent from "@/components/section-component";
import SectionHeader from "@/components/section-header";
import { projects } from "@/data/projects";
import { data } from "@/data/site-details";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((project) => ({
    project: project["link"], // Generates routes dynamically
  }));
}

export async function generateMetadata({ params }) {
  const slug = (await params)
  const project = projects.find((p) => p.link === slug.project);
  
  let joinedDescription = project["about"].map(item => item.text).join('. ');
  const maxLength = 10000;
  const description = joinedDescription.length > maxLength
    ? joinedDescription.slice(0, maxLength) + '...'
    : joinedDescription;

  return {
    title: `${project["project-name"]} - Project by Gaurav Talekar`,
    description: description,
    openGraph: {
      title: `${project["project-name"]} - Project by Gaurav Talekar`,
      description: description,
      url: `https://${data.domain}/work/${slug.project}`,
      images: [
        {
          url: project["thumbnail"],
          alt: `Thumbnail for ${project["project-name"]}`
        },
      ],
      type: "article",
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project["project-name"]} - Project by Gaurav Talekar`,
      description: description,
      images: [project["thumbnail"]],
    },
  };
}


function getDateInFormat(date) {
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let formattedDate = months[date.getMonth()] + " " + date.getFullYear();

  return formattedDate;
}

export default async function ProjectPage({ params }) {
  const slug = (await params)
  const project = projects.find((p) => p.link === slug.project);

  if (!project) return <h1>Project not found</h1>;

  return (
    <>
      <FadeInObserver />
      <SectionComponent id="project-section" aria-label="Project Overview Section" bgColor="bg-white">
        <SectionHeader
          title={project["project-name"]}
          clx={"flex justify-center items-center text-center text-shark-800 font-montserrat font-bold"}
        />
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-12">
          <div className="md:w-2/3 fade-in transition-all ease-out duration-500 delay-200 text-xl">
            <ParagraphTemplate paragraphs={project.about} />
          </div>
          <div className="md:w-1/3 flex justify-center fade-in transition-all ease-out duration-500 delay-200">
            <ul className="list-group border border-gray-400 h-full w-full text-base" aria-label="Project Details">
              <li className="list-group-item p-4 border-b text-lg font-montserrat">
                <strong className="font-montserrat uppercase">Summary</strong>
              </li>
              <li className="list-group-item p-4 border-b">
                <strong className="font-montserrat uppercase">Type</strong>
                <p className="capitalize">
                  {project.type}
                </p>
              </li>
              <li className="list-group-item p-4 border-b">
                <strong className="font-montserrat uppercase">Created On</strong>
                <p className="capitalize">
                  {getDateInFormat(project["made-in"])}
                </p>
              </li>
              <PublishedOnComponent publishedOnData={project["published-on"]} />
              <li className="list-group-item p-4">
                <strong className="font-montserrat uppercase">Created With</strong>
                <p className="capitalize">{project["tools-used"].join(", ")}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <ProjectLightbox images={project["images-list"]} />
        </div>
      </SectionComponent >
    </>
  );
}

const PublishedOnComponent = ({ publishedOnData }) => {
  // Check if "published-on" key exists
  if (!publishedOnData) {
    return null; // Return nothing if "published-on"
  }

  const { name, link } = publishedOnData;

  return (
    <li className="list-group-item p-4 border-b">
      <strong className="font-montserrat uppercase">Published On</strong>
      {link ? (
        // Render Next.js Link if "link" exists
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer text-dull-lavender-600 hover:text-cerise-600 transition delay-150 duration-300 ease-in-out"
          title={`View ${name}`}
          aria-label={`Visit the source where ${name} was published`}
        >
          {name}
        </Link>
      ) : (
        // Render a <p> tag if "link" doesn't exist
        <p className="text-shark-800">
          {name}
        </p>
      )}
    </li>
  );
};