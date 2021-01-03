import { useHistory } from "react-router-dom";

export default function NotFound() {
  const history = useHistory();

  // Go to Home page
  const handleHomePageClick = () => {
    history.push("/");
  };

  return (
    <div>
      <h2>Sorry Page Not Found!</h2>
      <button onClick={handleHomePageClick}>Go to Home page</button>
    </div>
  );
}
