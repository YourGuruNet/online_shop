import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <div className="navbar-back">
                            <footer class="site-footer">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About Phone Shope</h6>
                        <p className="text-justify">Never be lost without power, connectors, headphones or other mobile phone accessories again. We sell a massive range of devices, accessories and add-ons for the tech lovers out there.</p>
                    </div>

                    <div className="col-xs-8 col-md-3 mob-view">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                        <Link to='/ProductList'>
                        <li><a>Phones</a></li>
                        </Link>
                        <Link to='/ProductList'>
                        <li><a>Accessory's</a></li>
                        </Link>
                        <Link to='/ProductList'>
                        <li><a>Headsets</a></li>
                        </Link>
                        <Link to='//ProductList'>
                        <li><a>USB</a></li>
                        </Link>
                        <Link to='/ProductList'>
                        <li><a>Memory Cards</a></li>
                        </Link>
                        </ul>
                    </div>

                    <div className="col-xs-8 col-md-3 mob-view">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                        <Link to='/about'>
                        <li><a>About Us</a></li>
                        </Link>
                        <Link to='/contact'>
                        <li><a>Contact Us</a></li>
                        </Link>
                        <Link to='/ProductList'>
                        <li><a>Products</a></li>
                        </Link>
                        <li><a>Privacy Policy</a></li>
                        <Link to='/'>
                        <li><a>Home</a></li>
                        </Link>
                        </ul>
                    </div>
                    </div>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} All Rights Reserved by 
                    <Link to='/'>
                    <a> PhoneShop.com</a>
                    </Link>
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                        <li><a className="facebook" href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
                        <li><a className="twitter" href="https://twitter.com/"><i class="fa fa-twitter"></i></a></li>
                        <li><a className="instagram" href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a></li>
                        <li><a className="linkedin" href="https://www.linkedin.com/"><i class="fa fa-linkedin"></i></a></li>   
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
            </div>
        );
    }
}

export default Footer;