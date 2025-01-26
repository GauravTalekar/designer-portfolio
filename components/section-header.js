import clsx from "clsx"

const SectionHeader = ({ title, clx }) => {
  return (
    <h2 className={
      clsx(
        "section-heading",
        clx
      )
    }
    >
      {title}
    </h2>
  )
}

export default SectionHeader