import {
  FaMailBulk,
  FaGithub,
  FaInstagram,
  FaXing,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      <div className="social-wrapper">
        <a href="mailto:s.u.wacker@outlook.de" target="_blank">
          <FaMailBulk className="social" />
        </a>
        <a href="https://github.com/svenWacker" target="_blank">
          <FaGithub className="social" />
        </a>{" "}
        <a href="https://www.instagram.com/swfun75/" target="_blank">
          <FaInstagram className="social" />
        </a>
        <a href="https://www.xing.com/profile/Sven_Wacker/cv" target="_blank">
          <FaXing className="social" />
        </a>
        <a
          href="https://www.linkedin.com/in/sven-wacker-17764a119/"
          target="_blank"
        >
          <FaLinkedinIn className="social" />
        </a>
      </div>
      Copyright<sup>©</sup> <span className="year">{year}</span>
    </div>
  );
};
export default Footer;
