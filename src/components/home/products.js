import React from "react"
import Product from "./product"
import Title from "../globals/title"
import { StaticQuery, graphql } from "gatsby"

const GetProducts = graphql`
  {
    products: allContentfulTrackNew {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default function products() {
  return (
    <StaticQuery
      query={GetProducts}
      render={data => {
        return (
          <section className="py-4">
            <div className="container">
              <Title title="New releases" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
