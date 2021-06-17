import React from "react";
import { Link } from "react-router-dom";
const Works = ({ data }) => {
  const items = data.map((item) => {
    const { id, timeFrame, projectName, jobTitle } = item;
    return (
      <li key={id} style={{ listStyle: "none" }}>
        <Link to={`/project/${id}`}>
          <h3 style={{ textDecoration: "none" }} className="jobTitle">
            {jobTitle}
          </h3>
        </Link>
        <h4>{projectName}</h4>
        <h4>{timeFrame}</h4>
        <h6>{}</h6>
      </li>
    );
  });
  return (
    <React.Fragment>
      <h2>Works </h2>
      <div>
        <ul style={{ textDecoration: "none" }} className="projects">
          {items}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Works;
