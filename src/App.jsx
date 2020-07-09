import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Fragment } from "react";

import Navigation from "./components/navigation.jsx";
import HomePage from "./components/homePage/home.jsx";
import ProjectPage from "./components/project/page.jsx";
import ProjectsPage from "./components/project/projectsPage.jsx";
import TeamPage from "./components/team.jsx";
import NotFound from "./components/notfound.jsx";

import "./style.css";

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
