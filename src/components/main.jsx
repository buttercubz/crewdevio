/* @jsx insertionJsx */

import { Fragment, insertionJsx } from "insertion";

import { Router, Route, Switch } from "insertion/router";

import Navigation from "./navigation.jsx";
import ShowCase from "./showcase.jsx";
import Project from "./projects.jsx";
import Error404 from "./404.jsx";
import About from "./about.jsx";
import Team from "./Team.jsx";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Navigation />
          <Route exact path="/">
            <div className="container">
              <ShowCase />
              <Project />
              <About />
            </div>
          </Route>
          <Route path="/team">
              <Team />
          </Route>

          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
