import React from "react"
import styled from "styled-components"
import BackgroundScroll from "../../../background-scroll"
import LoopText from "../../../loop-text"
import { StyledContainer } from "../../styled-utils"

const StyledCreative = styled.div`
  position: absolute;
  font-size: 500px;
  top: 0;

  p {
    margin: 0;
    color: transparent;
    line-height: 0.9;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.15);

    user-select: none;
  }
`

const StyledAboutCopy = styled.div`
  padding: 120px 0 140px 0;
  color: black;

  h2 {
    line-height: 100%;
    font-size: 100px;
    margin-bottom: 60px;
  }
`

const StyledDescription = styled.div`
  max-width: 65%;
  line-height: 120%;
  font-size: 42px;

  p:first-of-type {
    margin-bottom: 40px;
  }

  p {
    margin: 0;
  }

  strong {
    font-weight: bold;
    color: #29cc92;
  }
`

const WhoIAm = () => {
  return (
    <>
      <StyledCreative>
        <BackgroundScroll />
      </StyledCreative>
      <StyledContainer>
        <StyledAboutCopy>
          <h2>I&apos;m a problem solver with a flair for creativity</h2>
          <StyledDescription>
            <p>
              I&apos;m fluent in <strong>JavaScript</strong>,{" "}
              <strong>TypeScript</strong>, <strong>React</strong>,{" "}
              <strong>Vue</strong>, <strong>NodeJS</strong>, <strong>C#</strong>
              , and <strong>PostgreSQL</strong> – I love making applications
              that push boundaries and tease minds.
            </p>

            <p>I pride myself on</p>

            <LoopText>
              <span>
                <strong>creating</strong> unique experiences
              </span>
              <span>
                <strong>innovating</strong> on design
              </span>
              <span>
                <strong>perfecting</strong> brand identities
              </span>
              <span>
                <strong>bringing</strong> dreams to reality
              </span>
            </LoopText>
          </StyledDescription>
        </StyledAboutCopy>
      </StyledContainer>
    </>
  )
}

export default WhoIAm
