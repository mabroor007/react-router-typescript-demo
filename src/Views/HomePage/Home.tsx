import Nav from "../../Components/NavigationBar";
import { Page } from "../../StyledComponents/Window.styled";
import { H3Styled, IMGStyled } from "../../StyledComponents/Styled";
import React from "react";

export default function HomePage() {
  return (
    <Page>
      <Nav />
      <H3Styled>Home Page</H3Styled>
      <IMGStyled src="http://picsum.photos/500" alt="A random image" />
    </Page>
  );
}
