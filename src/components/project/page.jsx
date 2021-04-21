import React, { useState, useEffect } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { getRepoMD } from "../../utils/index.js";
import { Loading } from "./Container";

function ProjectPage({ match }) {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    let data = getRepoMD(match.params.repo);
    data.then((md) => setMarkdown(md));
  }, [match.params.repo]);

  if (markdown !== null) {
    return (
      <div className="container-project">
        <div className="glass link-to">
          <h3>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://github.com/crewdevio/${match?.params.repo}`}
            >
              View Repository
            </a>
          </h3>
        </div>
        <MarkdownPreview source={markdown} />
      </div>
    );
  }

  return <Loading />;
}
export default ProjectPage;
