import React, { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../components/styled/utils"
import HandCanvas from "../components/webgl/handCanvas"
import WhoIAm from "../components/styled/home/whoIAm"
import Portfolio from "../components/styled/home/portfolio"
import Contact from "../components/styled/home/contact"

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
  min-height: 100vh;
`

const PortfolioSection = styled.section`
  padding: 120px 0;
`

const ContactSection = styled.section`
  background: #2c2f33;
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

      <Header ref={headerRef}>
        <Container>
          <HeaderCopy>
            <HandCanvas />
            <HeaderHeading>HELLO, I&apos;M HELGARD</HeaderHeading>
          </HeaderCopy>
        </Container>
      </Header>
      <WhoIAmSection ref={whoIAmRef}>
        <WhoIAm />
      </WhoIAmSection>
      <PortfolioSection>
        <Portfolio />
      </PortfolioSection>
      <ContactSection ref={contactRef}>
        <Contact />
      </ContactSection>
    </Layout>
  )
}

export default IndexPage
