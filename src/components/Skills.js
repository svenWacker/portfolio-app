import React from "react";
import { Link } from "react-router-dom";

const Skills = ({ data }) => {
  const items = data.map((item) => {
    const { id, skillName, description } = item;
    return (
      <li key={id} style={{ listStyle: "none" }}>
        <h3 style={{ textDecoration: "none" }} className="jobTitle">
          {skillName}
        </h3>
        <ul style={{ paddingLeft: "1.5rem" }}>
          {description.map((des) => (
            <li style={{ fontSize: "1.4rem" }}>{des}</li>
          ))}
        </ul>
      </li>
    );
  });
  return (
    <React.Fragment>
      <h2>Skills</h2>
      <div>
        <ul style={{ textDecoration: "none" }} className="skills">
          {items}
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Skills;
