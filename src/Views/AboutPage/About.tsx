import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Nav from "../../Components/NavigationBar";
import {
  H3Styled,
  PStyled,
  ToSpecificButton,
} from "../../StyledComponents/Styled";
import { Page } from "../../StyledComponents/Window.styled";

interface Props extends RouteComponentProps {}

export const AboutPage: React.FC<Props> = ({ history }) => {
  const handleGotoSpecificAboutPage = () => {
    history.push("/About/mabroor", {
      peoples: ["Tina", "Mina", "Shiela"],
      mabroor: {
        name: "Mabroor Ahmad",
        age: "20",
        skill: "Full Stack Developer",
      },
    });
  };

  return (
    <Page>
      <Nav />
      <H3Styled>AboutPage</H3Styled>
      <PStyled>
        In this example we have 3 “pages” handled by the router: a home page, an
        about page, and a users page. As you click around on the differents, the
        router renders the matching Note: Behind the scenes a renders an with a
        real href, so people using the keyboard for navigation or screen readers
        will still be able to use this app
      </PStyled>
      <ToSpecificButton onClick={handleGotoSpecificAboutPage}>
        Go to Specific about page
      </ToSpecificButton>
    </Page>
  );
};
