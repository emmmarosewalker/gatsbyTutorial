import PropTypes from "prop-types"
import React from "react"
import Img from 'gatsby-image'
import {
    StaticQuery
} from "gatsby";

const HomepageBanner = () => (
    <StaticQuery query = {
        graphql `
                query {
                    logo: file(relativePath: { eq: "logo-svg-01.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    paperImg: file(relativePath: { eq: "paper.png" }) {
                        childImageSharp {
                          fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                    }
                    phoneImg: file(relativePath: { eq: "phone.png" }) {
                        childImageSharp {
                          fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                    }
                    letterImg: file(relativePath: { eq: "letter.png" }) {
                        childImageSharp {
                          fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                    }
                    laptopImg: file(relativePath: { eq: "laptop.png" }) {
                        childImageSharp {
                          fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                    }
                }
                `
    } 
    render = { data => (
        <div style = {{
                backgroundColor: "#e7e3f3",
                width: "100%",
                height: "500px",
                position: "relative",
                origin: "100% center",
            }} className="bannerBackground">

            {/* Logo */}
            <div style = {{
                    width: '20%',
                    height: '10%',
                    position: "absolute",
                    margin: "auto",
                    left: "0",
                    right: "0",
                    top: '40%',
            }}>
                <Img fluid={data.logo.childImageSharp.fluid} />
            </div>
            {/* Paper */}
            <div style = {{
                    width: '15%',
                    maxWidth: 100,
                    minWidth: 80,
                    height: '10%',
                    position: "absolute",
                    left: "12%",
                    top: '12%',
                    animation: 'rot 2s linear infinite'
            }}>
            <Img fluid={data.paperImg.childImageSharp.fluid} />
            </div>

            {/* Phone */}
            <div style = {{
                    width: '8%',
                    height: '10%',
                    minWidth: 40,
                    maxWidth: 60,
                    position: "absolute",
                    right: "15%",
                    top: '15%',
                    animation: 'rot 2.2s linear infinite'
            }}>
                <Img fluid={data.phoneImg.childImageSharp.fluid} />
            </div>

            {/* Letter */}
            <div style = {{
                    width: '15%',
                    maxWidth: 100,
                    minWidth: 80,
                    height: '10%',
                    position: "absolute",
                    right: "15%",
                    bottom: '20%',
                    animation: 'rot 2.1s linear infinite'
            }}>
                <Img fluid={data.letterImg.childImageSharp.fluid} />
            </div>

            {/* Laptop */}
            <div style = {{
                    width: '20%',
                    height: '10%',
                    maxWidth: 120,
                    minWidth: 70,
                    position: "absolute",
                    left: "10%",
                    bottom: '25%',
                    animation: 'rot 2.5s linear infinite'
            }}>
                <Img fluid={data.laptopImg.childImageSharp.fluid} />
            </div>

        </div>
    )}
    />
)

export default HomepageBanner