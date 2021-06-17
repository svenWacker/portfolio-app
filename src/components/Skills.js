import React from "react";
import { Link } from "react-router-dom";

const Skills = ({ data }) => {
  const items = data.map((item) => {
    const { id, skillName, description } = item;
    return (
      <li key={id} style={{ listStyle: "none" }}>
        <h3 style={{ textDecoration: "none" }} className="skillsTitle">
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
      <div className="skills-wrapper">
        <div className="list">
          <ul className="skills">{items}</ul>
        </div>
        <div className="items">
          <h3 className="technologyTitle">Technologies</h3>
          <div class="technologies-container">
            <img
              src={`${process.env.PUBLIC_URL}/technologies/css.png`}
              alt="css"
            />
            <img
              src={`${process.env.PUBLIC_URL}/technologies/github.png`}
              alt="github"
            />
            <img
              src={`${process.env.PUBLIC_URL}/technologies/html-5.png`}
              alt="html-5"
            />
            <img
              src={`${process.env.PUBLIC_URL}/technologies/java-script.png`}
              alt="java-script"
            />
            <img
              src={`${process.env.PUBLIC_URL}/technologies/nodemon.svg`}
              alt="nodemon"
            />
            <img
              src={`${process.env.PUBLIC_URL}/technologies/slack.png`}
              alt="slack"
            />
            <img
              src={`${process.env.PUBLIC_URL}/technologies/vsc.png`}
              alt="vsc"
            />
            <img
              src={`${process.env.PUBLIC_URL}/technologies/zoom.png`}
              alt="zoom"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Skills;
