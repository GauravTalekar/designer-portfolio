import Image from "next/image";
import Link from "next/link";

const MasonryItem = ({ img }) => {
  return (
    <figure className="relative overflow-hidden rounded mt-4">
      <Link
        href={`/work/${img.link}`}
        aria-label={`Learn more about ${img.title}`}
        className="overflow-hidden rounded shadow-sm hover:shadow-md relative inline-block group"
      >
        <Image
          src={img.src}
          alt={img.alt || `Preview of ${img.title}`}
          width={img.width}
          height={img.height}
          loading="lazy"
          className="rounded h-full w-full object-cover"
        />

        {/* Overlay for desktop hover */}
        <figcaption className="absolute inset-0 bg-cerise-900/60 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3">
          <h3 className="text-dull-lavender-50 text-3xl font-montserrat font-semibold uppercase text-center hidden md:block">
            {img.title}
          </h3>
          <p className="text-dull-lavender-50 text-lg font-montserrat uppercase mt-3">
            Learn More
          </p>
        </figcaption>

        {/* Mobile overlay (always visible on small screens) */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center md:hidden">
          <h3 className="text-sm font-montserrat uppercase p-2">{img.title}</h3>
        </div>
      </Link>
    </figure>
  );
};

export default MasonryItem;
