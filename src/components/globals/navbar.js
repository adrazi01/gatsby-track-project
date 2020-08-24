import React, { Component } from "react"
import { Link } from "gatsby"
import Logo from "../../images/track_logo.png"
import { FaShoppingCart } from "react-icons/fa"

export default class navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
      {
        id: 3,
        path: "/shop",
        text: "shop",
      },
      {
        id: 4,
        path: "/blog",
        text: "blog",
      },
      {
        id: 5,
        path: "/login",
        text: "login",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="track" />
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto" style={{ paddingRight: "8rem" }}>
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <li className="nav-item ml-sm-5">
              <FaShoppingCart className="cart-icon" />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
