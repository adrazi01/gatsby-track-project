import React from "react"
import Post from "./post"
import { StaticQuery, graphql } from "gatsby"

const GetPosts = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY do MMM")
            author
            path
          }
          excerpt
        }
      }
    }
  }
`
export default function products() {
  return (
    <StaticQuery
      query={GetPosts}
      render={data => {
        return (
          <section>
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  path={node.frontmatter.path}
                  date={node.frontmatter.date}
                  body={node.excerpt}
                />
              ))}
            </div>
          </section>
        )
      }}
    />
  )
}
