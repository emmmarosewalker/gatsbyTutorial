import React from "react"
import { graphql } from "gatsby"
import Accordion from "../components/accordion"
import WordTree from "../components/wordTree"
import Contact from "../components/contact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomepageBanner from "../components/homeBanner"

const IndexPage = ( {data} ) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomepageBanner />
    <div className="main">
      <div style={{textAlign: "center", 
      maxWidth: "80%",
      margin: "5rem auto 2rem auto"
      }} dangerouslySetInnerHTML={{ __html: data.aboutMe.html }} />
      <div style={{height: "100px", width: "1px", backgroundColor: "#666", margin:"2rem auto"}}></div>
      <WordTree style={{height: 600}} />
      <Accordion clsName="skillsAccordion" hTML={data.skills}></Accordion>
      <div className="education" dangerouslySetInnerHTML={{ __html: data.education.html }} />
      <h2>Drop a line.</h2>
      <Contact />
    </div>
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
        htmlAst
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
