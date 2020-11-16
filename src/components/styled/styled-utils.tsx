import styled from "styled-components"
import { Globals, ContentDistribution, ContentPosition } from "csstype"

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 1800px;
  padding: 0 120px;
`

export const StyledFlex = styled.div<{
  justifyContent?:
    | Globals
    | ContentDistribution
    | ContentPosition
    | "left"
    | "normal"
    | "right"
}>`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-around"};
  margin: 0 auto;
`
