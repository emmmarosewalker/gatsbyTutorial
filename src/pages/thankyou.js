import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Thankyou = () => (
  <Layout>
    <SEO title="Contact form confirmation page" />
    <h1>Message Submitted.</h1>
    <p>Thank you, your message has been received. <Link to="/">Return home. </Link></p>
    <br />
  </Layout>
)

export default Thankyou
