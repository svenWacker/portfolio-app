import React from "react";
import { Link } from "react-router-dom";

const WorkInfo = (props) => {
  const selectedItem = props.data.filter((item) => item.id == props.id);
  console.log(selectedItem);

  const moreInfo = selectedItem.length
    ? selectedItem.map((item) => {
        const { id, timeFrame, projectName, jobTitle, description } = item;
        return (
          <li key={id} style={{ listStyle: "none" }}>
            <h3 className="jobTitle">{jobTitle} </h3>

            <h4>
              {projectName}, {timeFrame}
            </h4>
            <ul style={{ paddingLeft: "1.5rem" }}>
              {description.map((des) => (
                <li style={{ fontSize: "1.4rem" }}>{des}</li>
              ))}
            </ul>
          </li>
        );
      })
    : "Sorry, something went wrong";

  return (
    <React.Fragment>
      <h2>Further work description:</h2>
      <ul className="projects">{moreInfo}</ul>
      <Link to="/project" className="link">
        <button className="button-design">Back</button>
      </Link>
    </React.Fragment>
  );
};

export default WorkInfo;
