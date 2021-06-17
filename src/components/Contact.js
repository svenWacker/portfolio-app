import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <h2 className="page-headings">Contact me!</h2>
      <div className="contact">
        <div className="split">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5176.656141396443!2d8.0677793!3d49.5538327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x682f70d2122924b0!2sCasa%20Verde!5e0!3m2!1sde!2sde!4v1614000047483!5m2!1sde!2sde"
            width="100%"
            height="500px"
            allowfullscreen=""
            loading="lazy"
            title="google casa verde"
          ></iframe>
        </div>
        <div className="split address">
          <h2>Dipl.-Ing. (FH)</h2>
          <h2>Sven Wacker</h2>
          <h2>CASA Technologies</h2>
          <br></br>
          <h3>Phone</h3>
          <p>+49 6351 93 70 303</p>
          <p>+49 176 207 233 53</p>
          <h4>Email</h4>
          <p>s.u.wacker@outlook.de</p>
          <h4>Address</h4>
          <p>
            Hauptstraße 28A
            <br /> 67304 Eisenberg
            <br /> Germany
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
