import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <React.Fragment>
      <h2 className="">About me</h2>
      <div className="about">
        <div className="split">
          <p>
            I like new technologies, easy and straight design, make life easier
            and understandable solutions and so far I love minimum maximum
            principle user interfaces and websites. I'm focused, dedicated,
            hard-working and willing to learn in a changing and challenging
            environment.
          </p>
        </div>
        <div className="split">
          <p>
            I like new technologies, easy and straight design, make life easier
            and understandable solutions and so far I love minimum maximum
            principle user interfaces and websites. I'm focused, dedicated,
            hard-working and willing to learn in a changing and challenging
            environment.
          </p>
        </div>
      </div>
      <div className="link">
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Contact;
