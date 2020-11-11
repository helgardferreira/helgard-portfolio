import React from "react"
import styled from "styled-components"
import { Container } from "../../utils"
import PortfolioItem from "./portfolioItem"
import Image, { ImageProps } from "../../../image"

const PortfolioGrid = styled.div`
  width: 65%;
  display: grid;
  /* justify-content: space-between; */
  /* grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(320px, 420px));
  grid-auto-rows: 460px;
  gap: 40px;
  margin-bottom: 40px;
`

const StyledImage = styled(Image)<ImageProps>`
  height: 220px;
  background: white;
`

const PortfolioContent = styled.div`
  padding: 20px;
`

const Portfolio = () => {
  return (
    <Container>
      <h2>FULL-TIME</h2>
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
            <time>2019 - 2020</time>
            <p>
              Level 3 developer that worked on the frontend and backend for the
              National Department of Health&apos;s Stock Visibility Solution.
            </p>
          </PortfolioContent>
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
            <time>2017 - 2019</time>
          </PortfolioContent>
        </PortfolioItem>
      </PortfolioGrid>

      <h2>FREELANCE</h2>
      <PortfolioGrid>
        <PortfolioItem>
          <StyledImage fileName="triptraka-mockup.jpg" alt="" />

          <PortfolioContent>
            <h3>Arcfyre TripTraka</h3>
          </PortfolioContent>
        </PortfolioItem>
        <PortfolioItem>
          <StyledImage fileName="arcpay-mockup.jpg" alt="" />

          <PortfolioContent>
            <h3>Arcfyre Arcpay</h3>
          </PortfolioContent>
        </PortfolioItem>
        <PortfolioItem>
          <StyledImage fileName="pdm-mockup.jpg" alt="" />

          <PortfolioContent>
            <h3>PDM Global</h3>
          </PortfolioContent>
        </PortfolioItem>

        {/* <PortfolioItem /> */}
      </PortfolioGrid>
    </Container>
  )
}

export default Portfolio
