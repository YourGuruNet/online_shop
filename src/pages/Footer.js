import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer-position">
        <div className="navbar-back">
          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <h6>About Phone Shope</h6>
                  <p className="text-justify">
                    Never be lost without power, connectors, headphones or other
                    mobile phone accessories again. We sell a massive range of
                    devices, accessories and add-ons for the tech lovers out
                    there.
                  </p>
                </div>

                <div className="col-xs-8 col-md-3 mob-view">
                  <h6>Categories</h6>
                  <ul className="footer-links">
                    <Link to="/ProductList">
                      <li>
                        <p>Phones</p>
                      </li>
                    </Link>
                    <Link to="/ProductList">
                      <li>
                        <p>Accessory's</p>
                      </li>
                    </Link>
                    <Link to="/ProductList">
                      <li>
                        <p>Headsets</p>
                      </li>
                    </Link>
                    <Link to="//ProductList">
                      <li>
                        <p>USB</p>
                      </li>
                    </Link>
                    <Link to="/ProductList">
                      <li>
                        <p>Memory Cards</p>
                      </li>
                    </Link>
                  </ul>
                </div>

                <div className="col-xs-8 col-md-3 mob-view">
                  <h6>Quick Links</h6>
                  <ul className="footer-links">
                    <Link to="/about">
                      <li>
                        <p>About Us</p>
                      </li>
                    </Link>
                    <Link to="/contact">
                      <li>
                        <p>Contact Us</p>
                      </li>
                    </Link>
                    <Link to="/ProductList">
                      <li>
                        <p>Products</p>
                      </li>
                    </Link>
                    <li>
                      <p>Privacy Policy</p>
                    </li>
                    <Link to="/">
                      <li>
                        <p>Home</p>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <hr />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                  <p className="copyright-text">
                    Copyright &copy; {new Date().getFullYear()} All Rights
                    Reserved by &nbsp;
                    <Link to="/">
                       PhoneShop.com
                    </Link>
                  </p>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                  <ul className="social-icons">
                    <li>
                      <a className="facebook" href="https://www.facebook.com/">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="https://twitter.com/">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="instagram"
                        href="https://www.instagram.com/"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="https://www.linkedin.com/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
