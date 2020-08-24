import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/globals/background"
import AboutInfo from "../components/home/aboutinfo"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <Background
      img={data.img.childImageSharp.fluid}
      title="About us"
      styleClass="about-background"
    />
    <AboutInfo />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "background4.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
