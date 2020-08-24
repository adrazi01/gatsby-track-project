import React from "react"
import BackgroundImage from "gatsby-background-image"
import Link from "gatsby"

export default function background({
  img,
  styleClass,
  title,
  subheading,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-black pl-5 pb-5 text-middle display-3 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

background.defaultProps = {
  title: "default title",
  styleClass: "background",
}
