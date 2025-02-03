import React from "react"
import clsx from "clsx"
import Link from "next/link"


const LinkButton = ({ link, title, clx, children, ...props }) => {
  return (
    <Link
      className={
        clsx(
          clx,
          "hover:-translate-y-1 hover:scale-110", 
          "transition delay-150 duration-300 ease-in-out"
        )
      }
      title={title}
      href={link}
      {...props}
    >
      {children}
    </Link>
  )
}

export default LinkButton