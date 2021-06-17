import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="split-home hello">
        <h2>
          <p>Hi!</p>
          <p>I am Sven,</p>
          <p>Engineer and Developer.</p>
        </h2>
      </div>
      <div className="split-home person">
        <img
          style={{ align: "left" }}
          src={`${process.env.PUBLIC_URL}/me.jpg`}
          alt="my profil pic"
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};

export default Home;
