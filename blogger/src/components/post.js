import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"

const Post = ({ title, date, author, path, body, fluid }) => {
  return (
    <div>
      <Card>
        <Link to={path}>
          <Img
            className="card-image-top"
            fluid={fluid}
            style={{ height: "45vh", width: "45vh", marginLeft: "25%" }}
          />
        </Link>
        <CardBody>
          <CardTitle>
            <Link to={path}>{title}</Link>
          </CardTitle>
          <CardSubtitle>
            <span className="text-info">{date}</span> by{" "}
            <span className="text-info">{author}</span>
          </CardSubtitle>
          <CardText>{body}</CardText>
          <Link to={path} className="btn btn-outline-primary float-right">
            Read More
          </Link>
        </CardBody>
      </Card>
    </div>
  )
}

export default Post
