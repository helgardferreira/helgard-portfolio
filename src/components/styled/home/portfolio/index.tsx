import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Container } from "../../utils"
import Image, { ImageProps } from "../../../image"
import { useDispatch } from "react-redux"
import { UpdateNavRefAction } from "../../../../state/reducers/navRef.reducer"

const PortfolioGrid = styled.div`
  width: 65%;
  display: grid;
  /* justify-content: space-between; */
  /* grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(320px, 420px));
  grid-auto-rows: minmax(450px, 500px);
  gap: 40px;
  margin-bottom: 40px;
`

const PortfolioItem = styled.div`
  position: relative;
  z-index: 1;

  background: #2c2f33;
  border-radius: 4px;

  color: white;

  overflow: hidden;

  h3 {
    font-family: "Lato", sans-serif;
    margin-bottom: 8px;
  }

  time {
    display: block;
    margin: 4px 0;
  }

  p {
    margin: 0;
  }
`

const StyledImage = styled(Image)<ImageProps>`
  height: 220px;
  background: white;
`

const PortfolioContent = styled.div`
  height: 240px;
  padding: 20px;
`

const PortfolioLinks = styled.div`
  padding: 0 20px;
`

const TechSpan = styled.span<{ color: string }>`
  padding: 4px 10px;
  border-radius: 2px;
  background: ${props => props.color};
  color: white;
`

const Portfolio = () => {
  const fullTimeRef = useRef<HTMLHeadingElement>(null)
  const freelanceRef = useRef<HTMLHeadingElement>(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<UpdateNavRefAction>({
      type: "UPDATE_NAV_REF",
      index: fullTimeRef,
      middle: freelanceRef,
    })
  }, [])

  return (
    <Container>
      <h2 ref={fullTimeRef}>FULL-TIME</h2>
      <PortfolioGrid>
        <PortfolioItem>
          <StyledImage
            fileName="mezzanine-logo.png"
            alt=""
            imgStyle={{
              objectFit: "contain",
            }}
          />

          <PortfolioContent>
            <h3>Mezzanine Ware (Pty.) Ltd.</h3>
            <a
              href="https://mezzanineware.com/"
              target="_blank"
              rel="noreferrer"
            >
              mezzanineware.com
            </a>
            <time>2019 - 2020</time>
            <p>
              Level 3 developer that worked on the frontend and backend for the{" "}
              <strong>National Department of Health&apos;s</strong>{" "}
              <strong>Stock Visibility Solution</strong>.
            </p>
          </PortfolioContent>

          <PortfolioLinks>
            <TechSpan color="#f0db4f">JavaScript</TechSpan>{" "}
            <TechSpan color="#f89820">Java</TechSpan>{" "}
            <TechSpan color="#008bb9">PostgreSQL</TechSpan>
          </PortfolioLinks>
        </PortfolioItem>

        <PortfolioItem>
          <StyledImage
            fileName="proteus-logo-alt.png"
            alt=""
            imgStyle={{
              objectFit: "contain",
              padding: "30px 0",
            }}
          />

          <PortfolioContent>
            <h3>ProteusEMS</h3>
            <a href="https://proteusems.com/" target="_blank" rel="noreferrer">
              proteusems.com
            </a>
            <time>2017 - 2019</time>
            <p>
              Created the frontend and backend for a nursing{" "}
              <strong>education management system</strong> for the{" "}
              <strong>
                Saudi Arabian Ministry of National Guard - Health Affairs.
              </strong>
            </p>
          </PortfolioContent>

          <PortfolioLinks>
            <TechSpan color="#41B883">Vue</TechSpan>{" "}
            <TechSpan color="#68A063">Node</TechSpan>{" "}
            <TechSpan color="#008bb9">PostgreSQL</TechSpan>
          </PortfolioLinks>
        </PortfolioItem>
      </PortfolioGrid>

      <h2 ref={freelanceRef}>FREELANCE & PERSONAL</h2>
      <PortfolioGrid>
        <PortfolioItem>
          <StyledImage
            fileName="cutlass-logo.png"
            alt=""
            wrapperStyle={{
              background: "black",
            }}
            imgStyle={{
              padding: "30px 0",
              objectFit: "contain",
            }}
          />

          <PortfolioContent>
            <h3>Cutlass Design Studios</h3>
            <a
              href="https://www.cutlass.studio/"
              target="_blank"
              rel="noreferrer"
            >
              cutlass.studio
            </a>
            <time>2020</time>
            <p>
              Personal website created in collaboration with a talented designer
              to represent us in freelancing with clients.
            </p>
          </PortfolioContent>

          <PortfolioLinks>
            <TechSpan color="#61DBFB">React</TechSpan>{" "}
            <TechSpan color="#663399">Gatsby</TechSpan>{" "}
            <TechSpan color="#961A1F">WebGL</TechSpan>
          </PortfolioLinks>
        </PortfolioItem>
        <PortfolioItem>
          <StyledImage fileName="triptraka-mockup.jpg" alt="" />

          <PortfolioContent>
            <h3>Arcfyre TripTraka</h3>
            <a
              href="https://play.google.com/store/apps/details?id=za.co.smartpalm.triptraka.arcfyre&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              play.google.com
            </a>
            <time>2019</time>
            <p>
              A trip management app for the clients of Arcfyre International.
            </p>
          </PortfolioContent>

          <PortfolioLinks>
            <TechSpan color="#41B883">Vue</TechSpan>{" "}
            <TechSpan color="#498AFF">Ionic</TechSpan>{" "}
            <TechSpan color="#68A063">Node</TechSpan>{" "}
            <TechSpan color="#FF9900">AWS</TechSpan>
          </PortfolioLinks>
        </PortfolioItem>
        <PortfolioItem>
          <StyledImage fileName="arcpay-mockup.jpg" alt="" />

          <PortfolioContent>
            <h3>Arcfyre Arcpay</h3>
            <a
              href="https://play.google.com/store/apps/details?id=za.co.smartpalm.arcpay"
              target="_blank"
              rel="noreferrer"
            >
              play.google.com
            </a>
            <time>2019</time>
            <p>
              A payment processing app for the clients of Arcfyre International.
            </p>
          </PortfolioContent>

          <PortfolioLinks>
            <TechSpan color="#41B883">Vue</TechSpan>{" "}
            <TechSpan color="#498AFF">Ionic</TechSpan>{" "}
            <TechSpan color="#68A063">Node</TechSpan>{" "}
            <TechSpan color="#FF9900">AWS</TechSpan>
          </PortfolioLinks>
        </PortfolioItem>
        <PortfolioItem>
          <StyledImage fileName="pdm-mockup.jpg" alt="" />

          <PortfolioContent>
            <h3>PDM Global</h3>
            <time>2019</time>
            <p>
              A client and agent management system for the clients and agents of
              Praesidium Global.
            </p>
          </PortfolioContent>

          <PortfolioLinks>
            <TechSpan color="#41B883">Vue</TechSpan>{" "}
            <TechSpan color="#498AFF">Ionic</TechSpan>{" "}
            <TechSpan color="#68A063">Node</TechSpan>{" "}
            <TechSpan color="#FF9900">AWS</TechSpan>
          </PortfolioLinks>
        </PortfolioItem>
      </PortfolioGrid>
    </Container>
  )
}

export default Portfolio
