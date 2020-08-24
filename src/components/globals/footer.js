import React from "react"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
            <h5>
              All rights reserved &copy;{new Date().getFullYear().toString()}
            </h5>
            <div className="brand-icons">
              <FontAwesomeIcon
                icon={faFacebookF}
                size="lg mr-2"
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg mr-2"
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg mr-2"
              ></FontAwesomeIcon>
              <FontAwesomeIcon icon={faGoogle} size="lg mr-2"></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
