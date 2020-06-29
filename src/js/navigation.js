/* @jsx insertionJsx */

import insertionJsx from "insertion";

import { Link } from "insertion/router";

function Navigation() {
  return insertionJsx(
    "nav",
    { className: "nav-main" },
    insertionJsx(
      "div",
      { className: "main-logo btn" },
      insertionJsx("img", { src: "images/logo.png", alt: "CrewView logo" }),
      insertionJsx(
        "h1",
        null,
        "Crew ",
        insertionJsx(
          "span",
          { className: "color-red" },
          " Dev"
        )
      )
    ),
    insertionJsx(
      "ul",
      { className: "nav-menu" },
      insertionJsx(
        "li",
        null,
        insertionJsx(
          Link,
          { to: "/" },
          "Home"
        )
      ),
      insertionJsx(
        "li",
        null,
        insertionJsx(
          Link,
          { to: "/projects" },
          "Projects"
        )
      ),
      insertionJsx(
        "li",
        null,
        insertionJsx(
          Link,
          { to: "/about" },
          "About Us"
        )
      )
    )
  );
}

export default Navigation;