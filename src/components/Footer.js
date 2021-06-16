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
      <div className="social">
        <FaFacebook />
        <FaGithub />
        <FaInstagram />
        <FaXing />
        <FaLinkedinIn />
      </div>
      Copyright<sup>©</sup> <span className="year">{year}</span>
    </div>
  );
};
export default Footer;
