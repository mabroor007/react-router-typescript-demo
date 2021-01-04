import styled, { StyledComponent } from "styled-components";

interface Props {
  background?: string;
}

export const Page = styled.div<Props>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  /* &:hover {
    background-color: greenyellow;
  }  */
`;
