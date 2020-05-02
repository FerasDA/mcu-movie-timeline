import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Timeline = () => {
  const data = useStaticQuery(graphql`
    query allMCUData {
      allDataJson {
        edges {
          node {
            title
            subTitle
            type
          }
        }
      }
    }
  `)
  return (
    <>
      <h2>Timeline</h2>
    <ul>
      {data.allDataJson.edges.map(({ node, index }) => (
        <li key={index}>{node.subTitle}: {node.title}</li>
      ))}
    </ul>
    </>
  )
}

export default Timeline

