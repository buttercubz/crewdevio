/* @jsx insertionJsx */

import { Fragment, mount, render, createElement, insertionJsx } from "insertion";

import { Router, Route, Switch, Link, Redirect } from "insertion/router";

import Navigation from "./navigation.js";
import ShowCase from "./showcase.js";
import Project from "./projects.js";
import About from "./about.js";

function App() {
  return insertionJsx(
    Fragment,
    null,
    insertionJsx(
      Router,
      null,
      insertionJsx(
        Switch,
        null,
        insertionJsx(
          Route,
          { exact: true, path: "/" },
          insertionJsx(
            "div",
            { className: "container" },
            insertionJsx(Navigation, null),
            insertionJsx(ShowCase, null),
            insertionJsx(Project, null),
            insertionJsx(About, null)
          )
        ),
        insertionJsx(
          Route,
          { path: "*" },
          insertionJsx(
            "h1",
            null,
            "error 404"
          )
        )
      )
    )
  );
}

const app = createElement(insertionJsx(App, null));

const element = render(app);

mount(element);