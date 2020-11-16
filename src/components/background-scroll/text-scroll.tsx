import React, { FunctionComponent, useLayoutEffect } from "react"
import { motion, useMotionValue } from "framer-motion"

interface TextScrollProps {
  direction?: "left" | "right"
  start?: number
  width: number
}

const TextScroll: FunctionComponent<TextScrollProps> = ({
  children,
  direction = "right",
  start = 0,
  width,
}) => {
  const x = useMotionValue(start)

  useLayoutEffect(() => {
    let position = x.get()

    const step = () => {
      if (direction === "right") {
        if (position <= width) {
          position += 0.5
        } else {
          position = 0 - width
        }

        x.set(position)
      } else {
        if (position >= 0 - width) {
          position -= 0.5
        } else {
          position = width
        }

        x.set(position)
      }

      requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [])
  return <motion.p style={{ x, position: "absolute" }}>{children}</motion.p>
}

export default TextScroll
