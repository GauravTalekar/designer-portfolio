import { clsx } from "clsx"

const SectionComponent = ({
  id,
  clx,
  children,
  maxWidth = "max-w-7xl",
  bgColor = "",
  border = "",
  ...props
}) => {
  return (
    <section
      id={id}
      className={clsx(
        `mx-auto ${maxWidth} px-6 lg:px-8 py-6 lg:py-8 text-shark-800 font-nunito my-6 lg:my-12 ${bgColor} ${border}`,
        clx
      )}
      {...props}
    >
      {children}
    </section>
  )
}

export default SectionComponent