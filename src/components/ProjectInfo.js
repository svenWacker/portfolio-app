import React from "react";
import { Link } from "react-router-dom";

const WorkInfo = (props) => {
  const selectedItem = props.data.filter((item) => item.id == props.id);
  console.log(selectedItem);

  const moreInfo = selectedItem.length
    ? selectedItem.map((item) => {
        const {
          id,
          timeFrame,
          projectName,
          jobTitle,
          description,
          projectDes,
        } = item;
        return (
          <li key={id} style={{ listStyle: "none" }}>
            <h3 className="jobTitle">{jobTitle} </h3>
            <h4>
              {projectName}, {timeFrame}
            </h4>
            <h5 style={{ fontSize: "1.3rem", textAlign: "justify" }}>
              {projectDes}
            </h5>
            <ul style={{ paddingLeft: "1.5rem" }}>
              {description.map((des) => (
                <li style={{ fontSize: "1.3rem" }}>{des}</li>
              ))}
            </ul>
          </li>
        );
      })
    : "Sorry, something went wrong";

  return (
    <React.Fragment>
      <h2 className="page-headings">Further work description:</h2>
      <ul className="projects">{moreInfo}</ul>
      <div className="link-container">
        <Link to="/project" className="link">
          <button className="button-design">Back</button>
        </Link>
      </div>
      <div className="download">
        <a href="./CV.pdf" download>
          Click to download my CV
        </a>
      </div>
    </React.Fragment>
  );
};

export default WorkInfo;
