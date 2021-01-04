import styled from "styled-components";

interface Props {
  background: string;
}

export const Button = styled.button<Props>`
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.background};
  transition: all 0.3s;
  font-size: 1rem;
  margin: 1rem;

  &:hover {
    background-color: #333;
    color: white;
  }
`;
