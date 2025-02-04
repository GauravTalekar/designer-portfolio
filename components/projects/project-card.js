import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({ src, alt, title, link }) => {
  return (
    <li className="group relative overflow-hidden fade-in transition-all ease-out duration-500 delay-200">
      <Link
        className="overflow-hidden rounded shadow-sm hover:shadow-md relative inline-block group"
        href={`/work/${link}`}
        title="Click to know more about screen title">
        <Image
          src={src}
          alt={alt}
          width={1080}
          height={1080}
          loading="lazy"
          className="rounded h-full w-full"
        />

        <div className="absolute rounded inset-0 bg-cerise-900/60 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3">
          <h3 className="text-dull-lavender-50 text-3xl font-montserrat font-semibold uppercase text-center">
            {title}
          </h3>
          <p className="text-dull-lavender-50 text-lg font-montserrat uppercase mt-3">LEARN MORE</p>
        </div>
        <div className="absolute rounded inset-0 bg-cerise-900/60 opacity-0 max-md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3">
          <p className="text-dull-lavender-50 text-lg font-montserrat uppercase">LEARN MORE</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center md:hidden lg:hidden">
          <h3 className="text-sm font-montserrat uppercase p-2">{title}</h3>
        </div>
      </Link>
    </li>
  )
}

export default ProjectCard