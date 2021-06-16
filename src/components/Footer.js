const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      Copyright<sup>©</sup> <span className="year">{year}</span>
    </div>
  );
};
export default Footer;
