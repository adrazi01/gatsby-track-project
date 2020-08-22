import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function background({ img, styleClass, title, children }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-black text-middle display-4 font-weight-bold">
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
