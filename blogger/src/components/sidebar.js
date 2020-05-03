import React from "react"
import { Card, CardBody, CardTitle, Form, FormGroup, Input } from "reactstrap"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const Sidebar = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className="text-uppercase text-center mb-3">
          NewsLetter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input type="email" name="email" placeholder="Your Email Address" />
          </FormGroup>
          <button className="btn btn-outline-success text-uppercase">
            Subscribe
          </button>
        </Form>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Advertisement
        </CardTitle>
        <img
          src="https://via.placeholder.com/320x200"
          alt="Ads"
          style={{ width: "100%" }}
        />
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          recent posts
        </CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={node.frontmatter.path}>
                    <Img
                      className="card-image-top"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                      style={{
                        height: "150px",
                        width: "150px",
                        margin: "auto",
                      }}
                    />
                  </Link>
                  <CardBody>
                    <CardTitle>
                      <Link to={node.frontmatter.path}>
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        />
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            image {
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Sidebar
