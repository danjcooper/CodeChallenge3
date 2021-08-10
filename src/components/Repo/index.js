import React from "react";
import "./style.css";

const Repo = ({ repoName, issues, forks, stars, commits }) => {
  return (
    <article className="RepoInfo">
      <h2>{repoName}</h2>
      <h3>
        Stars: <span className="dataPoint">{stars}</span>
      </h3>
      <h3>
        Commits: <span className="dataPoint">{commits}</span>
      </h3>
      <h3>
        Forks: <span className="dataPoint">{forks}</span>
      </h3>
      <h3>
        Issues: <span className="dataPoint">{issues}</span>
      </h3>
    </article>
  );
};

export default Repo;
