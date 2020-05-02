// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const title = this.props.siteTitle
    return (
      <div>
        <Navbar fixed="top" light expand="sm">
          <div className="container">
            <NavbarBrand href="/">{title}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/about/">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/team/">Team</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/tags/">Tags</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
