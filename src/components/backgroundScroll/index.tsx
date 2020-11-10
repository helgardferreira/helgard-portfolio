import React from "react"
import InfiniteTextScroll from "./infiniteTextScroll"

const BackgroundScroll = () => {
  return (
    <div>
      <InfiniteTextScroll width={2200} height="500px">
        creative
      </InfiniteTextScroll>
      <InfiniteTextScroll direction="left" width={3000} height="500px">
        intelligence
      </InfiniteTextScroll>
    </div>
  )
}

export default BackgroundScroll
