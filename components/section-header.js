import clsx from "clsx";

const SectionHeader = ({ title, clx }) => {
  return (
    <h2
      className={clsx(
        "tracking-wider uppercase transition-all ease-out duration-500 fade-in",
        "my-10 text-4xl leading-10", // Small screens
        "md:my-10 md:text-4xl md:leading-10", // Medium screens
        "lg:my-12 lg:text-6xl lg:leading-[60px]", // Large screens
        clx
      )}
      aria-label={title}
    >
      {title}
    </h2>
  );
};

export default SectionHeader;