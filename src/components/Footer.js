import {
  FaFacebook,
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
        <FaFacebook className="social" />
        <FaGithub className="social" />
        <FaInstagram className="social" />
        <FaXing className="social" />
        <FaLinkedinIn className="social" />
      </div>
      Copyright<sup>©</sup> <span className="year">{year}</span>
    </div>
  );
};
export default Footer;
