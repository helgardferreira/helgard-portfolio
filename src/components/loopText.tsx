import React, { FunctionComponent, ReactElement, useEffect } from "react"
import { useCycle, AnimatePresence, motion } from "framer-motion"
import styled from "styled-components"

const AnimatedText = styled(motion.div)`
  position: relative;

  span {
    position: absolute;
  }
`

interface LoopTextProps {
  children: ReactElement<HTMLSpanElement>[]
}

const LoopText: FunctionComponent<LoopTextProps> = ({ children }) => {
  // const [element, cycleChild] = useCycle(...children)
  const [index, cycleIndex] = useCycle(...Array(children.length).keys())

  useEffect(() => {
    const token = setInterval(() => {
      cycleIndex()
    }, 3200)
    return () => {
      clearInterval(token)
    }
  }, [])

  return (
    <AnimatePresence>
      {children.map((element, i) =>
        i === index ? (
          <AnimatedText
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
          >
            {element}
          </AnimatedText>
        ) : null
      )}
    </AnimatePresence>
  )
}

export default LoopText
