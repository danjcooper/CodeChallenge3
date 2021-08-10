import React from "react";

import "./style.css";

const Repo = (repoName) => {
  return (
    <section>
      <article className="repo">
        <h2>{repoName.repoName}</h2>
      </article>
      <button>more info</button>
    </section>
  );
};

export default Repo;
