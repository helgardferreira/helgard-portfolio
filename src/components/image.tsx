import React, { CSSProperties, FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

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

export interface ImageProps {
  fileName: string
  alt: string
  className?: string
  wrapperStyle?: CSSProperties
  imgStyle?: CSSProperties
  placeholderStyle?: CSSProperties
}

const Image: FunctionComponent<ImageProps> = ({
  fileName,
  alt,
  className,
  wrapperStyle,
  imgStyle,
  placeholderStyle,
}) => {
  const data: {
    allImageSharp: {
      nodes: {
        id: string
        fluid: FluidObject & { originalName: string }
      }[]
    }
  } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          id
          fluid(maxWidth: 800) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.allImageSharp?.nodes) return <div>Pictures were not found</div>

  const fluid = data.allImageSharp.nodes.find(
    ({ fluid }) => fluid.originalName === fileName
  )?.fluid

  if (!fluid) return <div>Picture was not found</div>

  return (
    <Img
      fluid={fluid}
      alt={alt}
      className={className}
      style={wrapperStyle}
      imgStyle={imgStyle}
      placeholderStyle={placeholderStyle}
    />
  )
}

export default Image
