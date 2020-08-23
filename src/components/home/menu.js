import React, { Component } from "react"
import Title from "../globals/title"
import Img from "gatsby-image"

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      trackItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }
  handleItems = category => {
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { trackItems: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { trackItems: items }
      })
    }
  }
  render() {
    return (
      <section className="py-4">
        <div className="container">
          <Title title="Browse our selection" />
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {this.state.categories.map((category, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    className="btn btn-blue text-capitalize m-3"
                    onClick={() => {
                      this.handleItems(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="row">
            {this.state.trackItems.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-8 col-sm-6 col-md-4 col-lg-3 mx-auto my-3"
                >
                  <div className="card" style={{ minHeight: "100%" }}>
                    <Img fluid={node.image.fluid} />
                    <div className="card-body text-center">
                      <h6>{node.title}</h6>
                      <h6>{node.price}$</h6>
                      <button className="btn btn-blue mt-3 text-capitalize">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
