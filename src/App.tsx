import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { AboutPage } from "./Views/AboutPage/About";
import { AboutSpecificPage } from "./Views/AboutPage/AboutSpecificPage";
import HomePage from "./Views/HomePage/Home";
import NotFound from "./Views/NotFoundPage/NotFound";

export default function App() {
  return (
    <div className="App">
      <Router>
        <h1>Fury App</h1>
        <Link to="/">HomePage</Link> | <Link to="/About">AboutPage</Link>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/About" component={AboutPage} />
          <Route exact path="/About/:id" component={AboutSpecificPage} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
