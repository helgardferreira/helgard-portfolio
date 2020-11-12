import React, { FunctionComponent } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

interface IProps {
  className?: string
  shadowColor?: string
  showShadow?: boolean
  type?: "button" | "submit" | "reset"
}

const AnimatedButton = styled(motion.button)`
  text-transform: uppercase;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  position: relative;

  background-color: rgba(255, 255, 255, 0.9);

  border: none;
  cursor: pointer;

  &:active {
    outline: none;
  }
`

const Button: FunctionComponent<IProps> = ({
  children,
  className,
  shadowColor,
  showShadow,
  type,
}) => {
  return (
    <AnimatedButton
      type={type}
      className={className}
      whileHover={{
        y: -5,
        boxShadow: showShadow
          ? `0 10px 20px ${shadowColor ? shadowColor : `rgba(11, 17, 24, 0.2)`}`
          : `none`,
      }}
      whileTap={{
        y: -1,
        boxShadow: showShadow
          ? `0 5px 10px ${shadowColor ? shadowColor : `rgba(11, 17, 24, 0.2)`}`
          : `none`,
      }}
    >
      {children}
    </AnimatedButton>
  )
}

export default Button
