/* @jsx insertionJsx */

import {
  Fragment,
  mount,
  render,
  createElement,
  insertionJsx,
} from "insertion";

import { Router, Route, Switch, Link, Redirect } from "insertion/router";

import Navigation from "./navigation.js";
import ShowCase from "./showcase.js";
import Project from "./projects.js";
import About from "./about.js";

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

const app = createElement(<App />);

const element = render(app);

mount(element);
