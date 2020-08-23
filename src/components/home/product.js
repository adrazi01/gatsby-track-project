import React from "react"
import Img from "gatsby-image"

export default function product({ product }) {
  return (
    <div className="col-8 col-sm-6 col-md-4 col-lg-3 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6>{product.price}$</h6>
          <button className="btn btn-blue mt-3 text-capitalize">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
