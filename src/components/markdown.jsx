import React, { Fragment, useState, useEffect } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

function Markdown({ match }) {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/crewdevio/${match.params.repo}/master/README.md`
    )
      .then((response) => response.text())
      .then((data) => {
        setMarkdown(data);
      });
  }, []);

  if (markdown !== null) {
    return (
      <Fragment>
        <MarkdownPreview source={markdown} />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <h1 className="loading">loading</h1>
      </Fragment>
    );
  }
}

export default Markdown;
