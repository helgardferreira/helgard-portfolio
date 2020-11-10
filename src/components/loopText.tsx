import React, { FunctionComponent, ReactElement } from "react"
import { useSpring, animated, config } from "react-spring"
import { useCycle } from "framer-motion"

interface IProps {
  children: ReactElement<HTMLSpanElement>[]
}

const LoopText: FunctionComponent<IProps> = ({ children }) => {
  const [element, cycleChild] = useCycle(...children)

  const { opacity, y } = useSpring({
    to: async next => {
      while (true) {
        await next({ y: 10, opacity: 0, delay: 3500 })
        cycleChild()
        await next({ y: 0, opacity: 1, delay: 10 })
      }
    },
    from: { opacity: 1, y: 0 },
    config: {
      ...config.wobbly,
      clamp: true,
    },
  })

  return (
    <animated.div
      style={{
        opacity: opacity as any,
        translate3d: y.to(y => [0, `${y}px`, 0]),
      }}
    >
      {element}
    </animated.div>
  )
}

export default LoopText
