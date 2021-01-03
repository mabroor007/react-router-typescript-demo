import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="win">
      <Link to="/">HomePage</Link> | <Link to="/About">AboutPage</Link>
      <h3>Home Page</h3>
      <p>
        In this example we have 3 “pages” handled by the router: a home page, an
        about page, and a users page. As you click around on the differents, the
        router renders the matching Note: Behind the scenes a renders an with a
        real href, so people using the keyboard for navigation or screen readers
        will still be able to use this app
      </p>
    </div>
  );
}
