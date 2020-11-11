import React, { FunctionComponent } from "react"
import styled from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Card = styled.div`
  /* background: #ebebeb; */
  background: #2c2f33;
  border-radius: 8px;

  color: white;

  overflow: hidden;

  h3 {
    font-family: "Lato", sans-serif;
    margin-bottom: 8px;
  }

  time {
    display: block;
    margin-bottom: 4px;
  }
`

// interface PortfolioItemProps {}

const PortfolioItem: FunctionComponent = ({ children }) => {
  return <Card>{children}</Card>
}

export default PortfolioItem
