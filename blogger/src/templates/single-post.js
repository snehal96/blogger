import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import SEO from "../components/seo"
import { slugify } from "../util/utilfunctions"
import { graphql, Link } from "gatsby"
import { Row, Col, Card, CardBody, CardSubtitle, Badge } from "reactstrap"
import Img from "gatsby-image"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} />
      <Col md="8">
        <h1>{post.title}</h1>
      </Col>
      <Row>
        <Col md="8">
          <Card>
            <Img
              className="card-image-top"
              fluid={post.image.childImageSharp.fluid}
              style={{ height: "45vh", width: "45vh", marginLeft: "25%" }}
            />
            <CardBody>
              <CardSubtitle>
                <span className="text-info">{post.date}</span> by{" "}
                <span className="text-info">{post.author}</span>
              </CardSubtitle>
              <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
              <ul className="post-tags">
                {post.tags.map(tag => (
                  <li key={tag}>
                    <Link to={`/tags/${slugify(tag)}`}>
                      <Badge color="primary">{tag}</Badge>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Sidebar />
        </Col>
      </Row>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogpostbyslug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default SinglePost
