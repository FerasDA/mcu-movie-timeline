import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Timeline from "../components/timeline"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Every Movie and show in chronological order</h1>
    <Timeline />
  </Layout>
)

export default IndexPage
