import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from "../util/authors"
import { slugify } from "../util/utilfunctions"
import JohnImage from "../images/john.jpg"
import JaneImage from "../images/jane.jpg"
import { Row, Card, CardTitle, CardText, Button, CardBody } from "reactstrap"

const TeamPage = () => (
  <Layout laytitle="Our Team">
    <SEO title="Team" keywords={[`gatsby`, `application`, `react`]} />
    <Row className="mb-4">
      <div className="col-md-3">
        <img
          src={JohnImage}
          alt="John Profile"
          style={{ maxWidth: "100%", minHeight: "84%" }}
        />
      </div>
      <div className="col-md-8">
        <Card>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[0].name)}`}
            >
              View Posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img
          src={JaneImage}
          alt="Jane Profile"
          style={{ maxWidth: "100%", minHeight: "84%" }}
        />
      </div>
      <div className="col-md-8">
        <Card>
          <CardBody>
            <CardTitle>{authors[1].name}</CardTitle>
            <CardText>{authors[1].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[1].name)}`}
            >
              View Posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
