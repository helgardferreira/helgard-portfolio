import React, { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledContainer } from "../components/styled/styled-utils"
import HandCanvas from "../components/webgl/hand-canvas"
import WhoIAm from "../components/styled/home/who-i-am"
import Portfolio from "../components/styled/home/portfolio"
import Contact from "../components/styled/home/contact"

import { UpdateNavRefAction } from "../state/reducers/navRef.reducer"

const StyledHeaderCopy = styled.div`
  min-height: 100vh;
`

const StyledHeading = styled.h1`
  position: absolute;
  z-index: -2;
  top: 50%;
  transform: translateY(-50%);

  font-size: 150px;
  line-height: 100%;

  /* user-select: none; */

  max-width: 50%;
  margin: 0;
`

const StyledHeader = styled.header`
  position: relative;
  min-height: 100vh;
`

const StyledWhoIAm = styled.section`
  position: relative;
  background: white;
  overflow: hidden;
  min-height: 100vh;
`

const StyledPortfolio = styled.section`
  background: #2c2f33;
  padding: 80px 0 120px 0;
`

const StyledContact = styled.section`
  /* background: #2c2f33; */
  background: #141414;
  padding: 120px 0;
`

const IndexPage = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const whoIAmRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<UpdateNavRefAction>({
      type: "UPDATE_NAV_REF",
      thumb: whoIAmRef,
      palm: headerRef,
      ring: contactRef,
    })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />

      <StyledHeader ref={headerRef}>
        <StyledContainer>
          <StyledHeaderCopy>
            <HandCanvas />
            <StyledHeading>HELLO, I&apos;M HELGARD</StyledHeading>
          </StyledHeaderCopy>
        </StyledContainer>
      </StyledHeader>
      <StyledWhoIAm ref={whoIAmRef}>
        <WhoIAm />
      </StyledWhoIAm>
      <StyledPortfolio>
        <Portfolio />
      </StyledPortfolio>
      <StyledContact ref={contactRef}>
        <Contact />
      </StyledContact>
    </Layout>
  )
}

export default IndexPage
