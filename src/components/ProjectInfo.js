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
            <h3>{jobTitle} </h3>

            <h4>
              {projectName}, from {timeFrame}
            </h4>
            <h5>
              {description.map((des) => (
                <p>{des}</p>
              ))}
            </h5>
          </li>
        );
      })
    : "Sorry, something went wrong";

  return (
    <React.Fragment>
      <h2>Further project description:</h2>
      <ul>{moreInfo}</ul>
      <Link to="/project" style={{ textDecoration: "none" }}>
        Back
      </Link>
    </React.Fragment>
  );
};

export default ProjectInfo;
