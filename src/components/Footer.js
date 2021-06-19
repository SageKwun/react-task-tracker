import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h4>Copyright&copy; 2021</h4>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Footer;
