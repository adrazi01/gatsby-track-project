import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/globals/background"
import LoginBox from "../components/home/loginbox"

const LoginPage = ({ data }) => (
  <Layout>
    <SEO title="Login" />
    <Background
      img={data.img.childImageSharp.fluid}
      title="Login to your account"
      styleClass="login-background"
    />
    <LoginBox />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "background6.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default LoginPage
