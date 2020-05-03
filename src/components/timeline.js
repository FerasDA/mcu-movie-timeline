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
  //           isMovie
  //         }
  //       }
  //     }
  //   }
  // `)
  // const contentfulData = useStaticQuery(graphql`
  //   query allContentfulMcuEvent {
  //     allContentfulMcuEvent(sort: { fields: createdAt, order: ASC }) {
  //       edges {
  //         node {
  //           title
  //           subTitle
  //           isMovie
  //           img {
  //             file {
  //               url
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  const contentfulData = useStaticQuery(graphql`
    query allContentfulMcuOrderedTimeline {
      allContentfulMcuOrderedTimeline {
        edges {
          node {
            allTitlesChronologically {
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
    }
  `)

  return (
    <>
      <div style={{ backgroundColor: "#000" }}>
        <VerticalTimeline>
          {contentfulData.allContentfulMcuOrderedTimeline.edges.map(
            ({ node }) =>
              node.allTitlesChronologically.map((event, index) => (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={event.isMovie ? movieCard : showCard}
                  date={event.subTitle}
                  iconStyle={event.isMovie ? movieCard : showCard}
                  key={index}
                >
                  <h3 className="vertical-timeline-element-title">
                    {event.title}
                  </h3>
                  {event.img ? (
                    <img
                      style={{ paddingTop: "50px" }}
                      alt={event.title}
                      src={event.img.file.url}
                    />
                  ) : null}
                </VerticalTimelineElement>
              ))
          )}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Timeline
