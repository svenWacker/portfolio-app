import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="split">
        <h1>
          <p>Hi,</p>
          <p>I am Sven</p>
          <p>Engineer and Developer</p>
        </h1>
        <br />
        <Link to="about">
          <button>More Information</button>
        </Link>
      </div>
      <div className="split person">
        <img
          src={`${process.env.PUBLIC_URL}/me.jpg`}
          alt="my picture"
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};

export default Home;
