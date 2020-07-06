import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./navigation";
import ShowCase from "./showcase";
import Project from "./projects";
import Notfound from "./Notfound";
import About from "./about";
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
