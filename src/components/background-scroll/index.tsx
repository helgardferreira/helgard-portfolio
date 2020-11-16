import React from "react"
import InfiniteTextScroll from "./infinite-text-scroll"

const BackgroundScroll = () => {
  return (
    <div>
      {/* <InfiniteTextScroll width={2200} height="500px"> */}
      <InfiniteTextScroll width={2000} height="500px">
        {/* creative */}
        helgard
      </InfiniteTextScroll>
      <InfiniteTextScroll direction="left" width={2000} height="500px">
        {/* <InfiniteTextScroll direction="left" width={3000} height="500px"> */}
        {/* intelligence */}
        ferreira
      </InfiniteTextScroll>
    </div>
  )
}

export default BackgroundScroll
