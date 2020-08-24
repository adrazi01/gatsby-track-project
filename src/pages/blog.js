import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/globals/background"
import Posts from "../components/home/posts"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <Background
      img={data.backgroundone.childImageSharp.fluid}
      title="Check our blog"
      styleClass="blog-background"
    />
    <Posts />
  </Layout>
)

export const blogQuery = graphql`
  {
    backgroundone: file(relativePath: { eq: "second_background.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default BlogPage
