import { Link, useLocation } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Sven</p>
          <p>Engineer and Developer</p>
        </h1>
        <Link to="about">
          <button>More Information</button>
        </Link>
      </div>
      <div className="person">
        <img src={`${process.env.PUBLIC_URL}/me.jpg`} alt="my picture" />
      </div>
    </div>
  );
};

export default Home;
