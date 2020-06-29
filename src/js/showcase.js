/* @jsx insertionJsx */

import insertionJsx from "insertion";

function ShowCase() {
  return insertionJsx(
    "section",
    null,
    insertionJsx(
      "div",
      { "class": "showcase" },
      insertionJsx(
        "h1",
        { "class": "title" },
        "Crew",
        insertionJsx(
          "span",
          { "class": "color-red" },
          " Dev"
        )
      ),
      insertionJsx(
        "div",
        { "class": "welcome-message" },
        insertionJsx("img", { "class": "logo", src: "./images/logo.png", alt: "CrewDev logo" }),
        insertionJsx(
          "p",
          null,
          insertionJsx(
            "span",
            { "class": "color-red font-size-double" },
            "open source first, better world"
          )
        )
      ),
      insertionJsx("hr", { "class": "divider-right" })
    )
  );
}

export default ShowCase;