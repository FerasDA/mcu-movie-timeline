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
  // const data = useStaticQuery(graphql`
  //   query allMCUData {
  //     allDataJson {
  //       edges {
  //         node {
  //           title
  //           subTitle
  //           type
  //         }
  //       }
  //     }
  //   }
  // `)
  const contentfulData = useStaticQuery(graphql`
    query allContentfulMcuEvent {
      allContentfulMcuEvent(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            title
            subTitle
            isMovie
            img {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <div style={{ backgroundColor: "#000" }}>
        <VerticalTimeline>
          {contentfulData.allContentfulMcuEvent.edges.map(({ node }) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={node.isMovie ? movieCard : showCard}
              date={node.subTitle}
              iconStyle={node.isMovie ? movieCard : showCard}
            >
              <h3 className="vertical-timeline-element-title">{node.title}</h3>
              {node.img ? (
                <img
                  style={{ paddingTop: "50px" }}
                  alt={node.title}
                  src={node.img.file.url}
                />
              ) : null}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Timeline
