import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/globals/background"
import Info from "../components/home/info"
import Products from "../components/home/products"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Background
      img={data.backgroundone.childImageSharp.fluid}
      title="Built for running"
      subheading="Best choice for athletes"
      styleClass="background"
    />
    <Products />
    <Background
      img={data.backgroundtwo.childImageSharp.fluid}
      title="Check our selection"
      styleClass="background"
    ></Background>
    <Info />
  </Layout>
)

export const query = graphql`
  {
    backgroundone: file(relativePath: { eq: "second_background.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    backgroundtwo: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
