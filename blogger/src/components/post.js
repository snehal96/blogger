import React from "react"
import { Link } from "gatsby"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"

const Post = ({ title, date, author, path, body }) => {
  return (
    <div>
      <Card>
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
