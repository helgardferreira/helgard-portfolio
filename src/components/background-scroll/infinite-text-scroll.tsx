import React, { FunctionComponent } from "react"
import TextScroll from "./text-scroll"

interface InfiniteTextScrollProps {
  direction?: "left" | "right"
  height: number | string
  width: number
}

const InfiniteTextScroll: FunctionComponent<InfiniteTextScrollProps> = ({
  children,
  direction,
  height,
  width,
}) => {
  return (
    <div style={{ position: "relative", height }}>
      <TextScroll direction={direction} width={width} start={0}>
        {children}
      </TextScroll>
      <TextScroll direction={direction} width={width} start={-width}>
        {children}
      </TextScroll>
    </div>
  )
}

export default InfiniteTextScroll
