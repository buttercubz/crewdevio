import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Fragment } from "react";

import Navigation from "./navigation";
import Markdown from "./markdown";
import ShowCase from "./showcase";
import Notfound from "./Notfound";
import Project from "./projects";
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

          <Route path="/projects/:repo" component={Markdown} />

          <Route path="/projects">
            <Project />
          </Route>
          <Route exact path="/">
            <div className="container">
              <ShowCase />
              <Project two={true} title="two of our" />
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
