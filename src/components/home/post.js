import React from "react"
import { Link } from "gatsby"
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap"

const Post = ({ title, author, path, date, body }) => {
  return (
    <Card className="my-3">
      <CardBody>
        <CardTitle>
          <Link to={path}>
            {" "}
            <h4 className="text-black">{title}</h4>
          </Link>
        </CardTitle>
        <CardSubtitle>
          <h6 className="text-info">{date}</h6>{" "}
          <h6 className="text-info">{author}</h6>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <Link to={path} className="btn btn-blue float-right">
          Read more
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
