import React, { useState, useEffect } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { getRepoMD } from "../../utils/index.js";

function ProjectPage({ match }) {
  const [markdown, setMarkdown] = useState(null);

  useEffect(function getMDToRender() {
    let data = getRepoMD(match.params.repo);
    data.then((md) => setMarkdown(md));
  }, [match.params.repo]);

  if (markdown !== null) {
    return (
      <div className="container-project">
        <MarkdownPreview source={markdown} />
      </div>
    );
  }
  return <h1 className="loading">loading</h1>;
}
export default ProjectPage;
