import React from "react";

import { Link } from "react-router-dom";

import "./css.css";

function Notfound() {
  return (
    <figure>
      <div className="sad-mac"></div>
      <Link to="/">
        <figcaption>
          <span className="sr-text">Error 404: Not Found</span>
          <span className="e"></span>
          <span className="r"></span>
          <span className="r"></span>
          <span className="o"></span>
          <span className="r"></span>
          <span className="_4"></span>
          <span className="_0"></span>
          <span className="_4"></span>
          <span className="n"></span>
          <span className="o"></span>
          <span className="t"></span>
          <span className="f"></span>
          <span className="o"></span>
          <span className="u"></span>
          <span className="n"></span>
          <span className="d"></span>
        </figcaption>
      </Link>
    </figure>
  );
}

export default Notfound;
