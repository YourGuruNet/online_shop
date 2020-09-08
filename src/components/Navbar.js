import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
                <div className="navbar-back sticky-nav-bar">
                        <nav className="mb-1 navbar navbar-expand-lg navbar-dark info-color ">
                            <Link to='/'>
                            <i class="fas fa-mobile-alt navbar-test">Phone Shop</i>
                            </Link>
                        <ul className="navbar-nav align-item-center">
                            <li className="nav-item ml-5" >
                                <Link to='/ProductList' className="nav-link hover-link">
                                Products
                                </Link>
                            </li>  
                        </ul>
                        <ul className="navbar-nav align-item-center">
                            <li className="nav-item ml-2" >
                                <Link to='/about' className="nav-link hover-link">
                                About Us
                                </Link>
                            </li>  
                        </ul>
                        <ul className="navbar-nav align-item-center">
                            <li className="nav-item ml-2" >
                                <Link to='/contact' className="nav-link hover-link">
                                Contacts
                                </Link>
                            </li>  
                        </ul>
                        <Link to='/Cart' className="ml-auto">
                        <button type="button" class="btn btn-warning mob-button"> <i class="fas fa-cart-plus"></i> Shopping Cart</button>
                        </Link>
                        </nav>
                </div>
        );
    }
}

export default Navbar;