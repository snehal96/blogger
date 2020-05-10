import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { slugify } from "../util/utilfunctions"
import { Button, Badge } from "reactstrap"

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCount } = pageContext
  return (
    <Layout laytitle="All Tags">
      <SEO title="All tags" keywords={["tags", "topics"]} />
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Button color="primary" href={`/tags/${slugify(tag)}`}>
              {tag} <Badge color="light">{tagPostCount[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default tagsPage
