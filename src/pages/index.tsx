import React, { useRef } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WhoIAm from "../components/styled/home/whoIAm"
import { Container } from "../components/styled/utils"

import HandCanvas from "../components/webgl/handCanvas"

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

const WhoIAmSection = styled.section`
  position: relative;
  background: white;
  overflow: hidden;
  height: 100vh;
`

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

const IndexPage = () => {
  const whoIAmRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  return (
    <Layout>
      <SEO title="Home" />

      <Header ref={headerRef}>
        <Container>
          <HeaderCopy>
            <HeaderHeading>HELLO, I&apos;M HELGARD</HeaderHeading>
          </HeaderCopy>
        </Container>
        <HandCanvas
          navRefs={[
            whoIAmRef,
            useRef<HTMLDivElement>(null),
            useRef<HTMLDivElement>(null),
            useRef<HTMLDivElement>(null),
            useRef<HTMLDivElement>(null),
            headerRef,
          ]}
        />
      </Header>
      <WhoIAmSection ref={whoIAmRef}>
        <WhoIAm />
      </WhoIAmSection>
    </Layout>
  )
}

export default IndexPage
