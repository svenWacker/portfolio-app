import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <React.Fragment>
      <h2 className="page-headings">About me</h2>
      <div className="about">
        <div>
          <h3>Technologie</h3>
          <p>
            I like new technologies, easy and straight design, make life easier
            and understandable solutions and so far I love minimum maximum
            principle user interfaces and websites. I'm focused, dedicated,
            hard-working and willing to learn in a changing and challenging
            environment.
          </p>
        </div>
        <div>
          <h3>Family</h3>
          <p>
            I am very proud of my modern patchwork family. I love the family
            life with my son, girlfriend and step daughter, I have a real good
            relationship and friendship with my ex-wife, I am happy with my
            sister and my niece and I am so glad to have healthy and vital
            parents.
          </p>
        </div>
        <div>
          <h3>Work</h3>
          <p>
            I started to work with 14 years as a paper boy. Since that time I
            worked my whole life in so many different jobs and areas you cannot
            imagine. I am an enthusiastic and motivating person, when I stand
            behind a project or an idea I do my best to lead it to sucess.
          </p>
        </div>
        <div>
          <h3>Hobbies</h3>
          <p>
            I love good food, so why cooking bad? I love new places and cultures
            so why not combining it with job? I love good music, so why not
            playing an instruments? I love new technologies, so why not to be
            state of the art? I love our nature and to be active, so why not
            doing sports outside?
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
