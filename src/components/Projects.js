import React from "react";
import { Link } from "react-router-dom";
const Project = ({ data }) => {
  const items = data.map((item) => {
    const { id, timeFrame, projectName, jobTitle, description } = item;
    return (
      <li key={id}>
        <Link to={`/project/${id}`}>
          <h3>{jobTitle}</h3>
        </Link>
        <h4>{projectName}</h4>
        <h4>{timeFrame}</h4>
        <h6>{}</h6>
      </li>
    );
  });
  return (
    <React.Fragment>
      <h2>Projects </h2>
      <ul>{items}</ul>
    </React.Fragment>
  );
};

export default Project;
