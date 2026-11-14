import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="logo footer-logo">
              Electro<span>Hub.</span>
            </Link>

            <p>
              Discover the latest electronics and gadgets
              with a shopping experience designed around you.
            </p>

            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
              </a>

              <a href="https://youtube.com" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/products">All Products</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {/* Customer Support */}
          <div className="footer-column">
            <h3>Customer Support</h3>

            <Link to="/account">My Account</Link>
            <Link to="/account/orders">My Orders</Link>
            <Link to="/faq">FAQs</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3>Stay Updated</h3>

            <p>
              Subscribe to receive updates about new products
              and exclusive offers.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Newsletter email"
                required
              />

              <button type="submit">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} ElectroHub.
            All rights reserved.
          </p>

          <p>Designed for a better shopping experience.</p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;