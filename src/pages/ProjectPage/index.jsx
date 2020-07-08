import React, { Fragment, useState, useEffect } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { getRepoMD } from "Utilities";

import "./css.css";

function ProjectPage({ match }) {
  const [markdown, setMarkdown] = useState(null);
  useEffect(function getMDToRender() {
    let data = getRepoMD(match.patams.repo)
    setMarkdown(data);
  }, []);
  return (
    <div classNam="container-project">
      {<MarkdownPreview source={markdown} /> ? (
        markdown !== null
      ) : (
        <h1 className="loading">loading</h1>
      )}
    </div>
  );
}
export default ProjectPage;
