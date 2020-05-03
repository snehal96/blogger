import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import Sidebar from "../components/sidebar"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col } from "reactstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome To 100 Days Blogging</h1>
    <Row>
      <Col md="8">
        <StaticQuery
          query={indexQuery}
          render={data => {
            return (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Post
                    key={node.id}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    date={node.frontmatter.date}
                    path={node.frontmatter.path}
                    body={node.frontmatter.body}
                    tags={node.frontmatter.tags}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                  />
                ))}
              </div>
            )
          }}
        />
      </Col>
      <Col md="4">
        <Sidebar></Sidebar>
      </Col>
    </Row>
  </Layout>
)

const indexQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            path
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
