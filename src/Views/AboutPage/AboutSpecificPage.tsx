import { RouteComponentProps } from "react-router-dom";
import Nav from "../../Components/NavigationBar";
import { PStyled } from "../../StyledComponents/Styled";
import { Page } from "../../StyledComponents/Window.styled";

interface Props extends RouteComponentProps<{ id: string }> {}

// Page Component
export const AboutSpecificPage: React.FC<Props> = ({ match, location }) => {
  return (
    <Page>
      <Nav />
      <PStyled>
        Hai i am specfically the person with name :{match.params.id}
      </PStyled>
    </Page>
  );
};
