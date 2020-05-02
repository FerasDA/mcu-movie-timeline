import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const movieCard = { background: "red", color: "white" }
const showCard = { background: "blue", color: "white" }

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
      <div style={{ backgroundColor: "#000" }}>
        <VerticalTimeline>
          {data.allDataJson.edges.map(({ node }) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={node.type === "movie" ? movieCard : showCard}
              date={node.subTitle}
              iconStyle={node.type === "movie" ? movieCard : showCard}
            >
              <h3 className="vertical-timeline-element-title">{node.title}</h3>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Timeline
