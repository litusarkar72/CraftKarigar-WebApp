import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="perfume-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>KraftKarigar</h2>
          <p>Hand Made • Elegant Fragrances</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/shop">Products</Link>
          <Link to="/shop">Product Details</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="/facebook"><FaFacebookF /></a>
            <a href="/instagram"><FaInstagram /></a>
            <a href="/twitter"><FaTwitter /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MyPerfumeShop — All Rights Reserved
      </div>
    </footer>
  );
}
