import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/globals/background"
import Menu from "../components/home/menu"

const ShopPage = ({ data }) => (
  <Layout>
    <SEO title="Shop" />
    <Background
      img={data.img.childImageSharp.fluid}
      title="Browse new releases"
      styleClass="shop-background"
    />
    <Menu items={data.menu} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulTrackItem {
      edges {
        node {
          id
          title
          price
          category
          image {
            fluid(maxHeight: 426) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ShopPage
