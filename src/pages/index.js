import React from "react"
import { Link, graphql } from "gatsby"
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
    />
    <Products />
    <Background
      img={data.backgroundtwo.childImageSharp.fluid}
      title="Check our selection"
    >
      <Link to="/shop/">
        <button className="btn text-uppercase btn-blue">Browse</button>
      </Link>
    </Background>
    <Info />
  </Layout>
)

export const query = graphql`
  {
    backgroundone: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    backgroundtwo: file(relativePath: { eq: "background2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
