import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomepageBanner from "../components/homeBanner"

const IndexPage = ( {data} ) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomepageBanner />
    <div dangerouslySetInnerHTML={{ __html: data.aboutMe.html }} />
    <div dangerouslySetInnerHTML={{ __html: data.skills.html }} />
    <div dangerouslySetInnerHTML={{ __html: data.education.html }} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
 
export const pageQuery = graphql`
  query {
    aboutMe: markdownRemark(frontmatter: { path: { eq: "/about-me" } }){
        html
        frontmatter {
          path
          title
        }
      }
    skills: markdownRemark(frontmatter: { path: { eq: "/skills" } }){
        html
        frontmatter {
          path
          title
        }
      }
    education: markdownRemark(frontmatter: { path: { eq: "/education" } }){
        html
        frontmatter {
          path
          title
        }
      }
  }
`

export default IndexPage
