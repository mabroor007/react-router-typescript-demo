import { Link } from "react-router-dom";
import { Button } from "../../StyledComponents/Button.styled";

export default function Nav() {
  return (
    <div>
      <Link to="/">
        <Button background="orange">HomePage</Button>
      </Link>
      <Link to="/About">
        <Button background="teal">AboutPage</Button>
      </Link>
    </div>
  );
}
