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
        `py-12 lg:py-20 text-shark-800 font-nunito ${bgColor} ${border}`,
        clx
      )}
      {...props}
    >
      <div className={`mx-auto ${maxWidth} px-6 lg:px-8`}>
        {children}
      </div>
    </section>
  )
}

export default SectionComponent