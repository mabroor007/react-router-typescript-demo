import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{ id: string }> {}

// Page Component
export const AboutSpecificPage: React.FC<Props> = ({ match, location }) => {
  console.log(location);

  return (
    <div>
      <p>Hai i am specfically the person with name :{match.params.id}</p>
    </div>
  );
};
