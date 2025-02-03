import clsx from "clsx"

const SectionHeader = ({ title, clx }) => {

  return (
    <h2
      className={
        clsx(
          "section-heading fade-in transition-all ease-out duration-500",
          clx
        )
      }
    >
      {title}
    </h2>
  )
}

export default SectionHeader