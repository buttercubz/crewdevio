import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./Navigation";
import ShowCase from "./Showcase";
import Project from "./Projects";
import Notfound from "./Notfound";
import About from "./About";
import Team from "./Team";

function App() {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/team">
            <Team />
          </Route>
          <Route exact path="/">
            <div className="container">
              <ShowCase />
              <Project />
              <About />
            </div>
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
