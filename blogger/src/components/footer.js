import React from "react"
import { Navbar } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faLinkedinIn,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <Navbar fixed="bottom">
    <div className="container">
      <h4 className="text-center" style={{ fontWeight: "bolder" }}>
        100 Days Blogging
      </h4>
      <ul style={{ marginBottom: "0px" }}>
        <li className="text-left ml-auto" style={{ marginBottom: "5px" }}>
          Follow us on
        </li>
        <li className="social-media-links">
          <ul className="social-links-list">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
              >
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </Navbar>
)

export default Footer
