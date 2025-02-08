import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ src, alt, title, link }) => {
  return (
    <div className="group relative overflow-hidden">
      <Link
        className="overflow-hidden rounded shadow-sm hover:shadow-md relative inline-block group focus:outline-none focus:ring-0"
        href={`/work/${link}`}
        title={`View details of ${title}`}
        aria-label={`View details of ${title}`}
      >
        <Image
          src={src}
          alt={alt}
          width={1080}
          height={1080}
          loading="lazy"
          className="rounded h-full w-full"
          quality={85}
        />

        {/* Overlay for hover effect */}
        <div
          className="absolute inset-0 bg-cerise-900/60 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3"
          aria-hidden="true"
        >
          <h2 className="text-dull-lavender-50 text-3xl font-montserrat font-semibold uppercase text-center">
            {title}
          </h2>
          <p className="text-dull-lavender-50 text-lg font-montserrat uppercase mt-3">
            Learn More
          </p>
        </div>

        {/* Mobile View Overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center md:hidden lg:hidden p-2"
          aria-hidden="true"
        >
          <h2 className="text-sm font-montserrat uppercase">{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
