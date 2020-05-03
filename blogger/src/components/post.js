import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
} from "reactstrap"
import { slugify } from "../util/utilfunctions"

const Post = ({ title, date, author, path, body, fluid, tags }) => {
  let count = 0
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
          <ul className="post-tags">
            {tags.map(tag => (
              <li key={count++}>
                <Link to={`tags/${slugify(tag)}`}>
                  <Badge color="primary" className="text-uppercase">
                    {tag}
                    {count}
                  </Badge>
                </Link>
              </li>
            ))}
          </ul>
          <Link to={path} className="btn btn-outline-primary float-right">
            Read More
          </Link>
        </CardBody>
      </Card>
    </div>
  )
}

export default Post
