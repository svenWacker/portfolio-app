import React from "react";
import { Link } from "react-router-dom";

const Skills = ({ data }) => {
  const items = data.map((item) => {
    const { id, skillName, despription } = item;
    return (
      <li key={id} style={{ listStyle: "none" }}>
        <h3 style={{ textDecoration: "none" }} className="jobTitle">
          {skillName}
        </h3>
        <h4>{despription}</h4>
      </li>
    );
  });
  return (
    <React.Fragment>
      <h2>Skills</h2>
      <div>
        <ul style={{ textDecoration: "none" }} className="projects">
          {items}
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Skills;
