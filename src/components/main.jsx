/* @jsx insertionJsx */

import { Fragment, insertionJsx } from "insertion";

import { Router, Route, Switch, Link, Redirect } from "insertion/router";

import Navigation from "./navigation.jsx";
import ShowCase from "./showcase.jsx";
import Project from "./projects.jsx";
import About from "./about.jsx";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="container">
              <Navigation />
              <ShowCase />
              <Project />
              <About />
            </div>
          </Route>

          <Route path="*">
            <h1>error 404</h1>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
