import React from "react";
import { Link } from "react-router-dom";

const ProjectInfo = (props) => {
  const selectedItem = props.data.filter((item) => item.id == props.id);
  console.log(selectedItem);

  const moreInfo = selectedItem.length
    ? selectedItem.map((item) => {
        const { id, timeFrame, projectName, jobTitle, description } = item;
        return (
          <li key={id}>
            <h2>{jobTitle} </h2>
            <h3>{description}</h3>
          </li>
        );
      })
    : "Sorry, something went wrong";

  return (
    <React.Fragment>
      <h3>Further Project Info</h3>
      <ul>{moreInfo}</ul>
      <Link to="/project" style={{ textDecoration: "none" }}>
        Back
      </Link>
    </React.Fragment>
  );
};

export default ProjectInfo;
