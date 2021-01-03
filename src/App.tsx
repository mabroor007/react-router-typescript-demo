import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { AboutPage } from "./Views/AboutPage/About";
import { AboutSpecificPage } from "./Views/AboutPage/AboutSpecificPage";
import HomePage from "./Views/HomePage/Home";
import NotFound from "./Views/NotFoundPage/NotFound";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Wrapper />
    </BrowserRouter>
  );
};

const Wrapper: React.FC = () => {
  const location = useLocation();
  return (
    <div>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          in={true}
          timeout={500}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/About" component={AboutPage} />
            <Route exact path="/About/:id" component={AboutSpecificPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
