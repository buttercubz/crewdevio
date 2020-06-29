/* @jsx insertionJsx */

import insertionJsx from "insertion";

function About() {
  return insertionJsx(
    "section",
    null,
    insertionJsx(
      "h1",
      { "class": "about-title" },
      "About ",
      insertionJsx(
        "span",
        { "class": "color-red" },
        "Us"
      )
    ),
    insertionJsx(
      "div",
      { "class": "about" },
      insertionJsx(
        "p",
        null,
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto porro, voluptas tenetur ",
        insertionJsx(
          "span",
          { "class": "color-red" },
          "commodi"
        ),
        " ",
        "deleniti temporibus voluptates aut sunt omnis recusandae suscipit nobis ratione mollitia, iusto, similique quas doloremque. Iste, natus?"
      ),
      insertionJsx("img", { src: "./images/Programming-rafiki.svg" })
    )
  );
}

export default About;