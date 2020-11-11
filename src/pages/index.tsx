import React, { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WhoIAm from "../components/styled/home/whoIAm"
import Portfolio from "../components/styled/home/portfolio"
import { Container } from "../components/styled/utils"
import HandCanvas from "../components/webgl/handCanvas"

import { UpdateNavRefAction } from "../state/reducers/navRef.reducer"

/* const HeaderHeading = styled.h1`
  position: absolute;
  top: 0;

  font-size: min(16vw, 300px);
`

const ArtistName = styled.h2`
  position: absolute;
  bottom: 0;

  font-size: min(23vw, 430px);
` */

const HeaderCopy = styled.div`
  height: 100vh;
`

const HeaderHeading = styled.h1`
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

const Header = styled.header`
  position: relative;
  height: 100vh;
`

const WhoIAmSection = styled.section`
  position: relative;
  background: white;
  overflow: hidden;
  height: 100vh;
`

const PortfolioSection = styled.section`
  padding: 120px 0;
`

const IndexPage = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const whoIAmRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<UpdateNavRefAction>({
      type: "UPDATE_NAV_REF",
      thumb: whoIAmRef,
      index: portfolioRef,
      middle: null,
      ring: null,
      pinkie: null,
      palm: headerRef,
    })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />

      <Header ref={headerRef}>
        <Container>
          <HeaderCopy>
            <HeaderHeading>HELLO, I&apos;M HELGARD</HeaderHeading>
          </HeaderCopy>
        </Container>
        <HandCanvas />
      </Header>
      <WhoIAmSection ref={whoIAmRef}>
        <WhoIAm />
      </WhoIAmSection>
      <PortfolioSection ref={portfolioRef}>
        <Portfolio />
      </PortfolioSection>
    </Layout>
  )
}

export default IndexPage
