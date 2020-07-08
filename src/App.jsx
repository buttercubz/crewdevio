import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Fragment } from "react";

import Navigation from "Components/Navigation";
import HomePage from "Pages/HomePage";
import ProjectPage from "Pages/ProjectPage";
import ProjectsPage from "Pages/ProjectsPage";
import TeamPage from "Pages/TeamPage";
import NotFound from "Pages/NotFound";

function App() {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/team" component={TeamPage} />
          <Route path="/projects/:repo" component={ProjectPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
