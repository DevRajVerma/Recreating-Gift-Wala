import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import '../fontAwesome'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="newsletter">
                <h2>Stay up to date about our latest offers</h2>
                <div className="newsletter-input">
                    <input type="email" placeholder="Enter your email address" />
                    <button type="submit">Subscribe to Newsletter</button>
                </div>
            </div>
            <div className="footer-content">
                <div className="footer-column">
                    <h3>SHOP.CO</h3>
                    <p>We have clothes that suit your style and which you're proud to wear. From women to men.</p>
                    <div className="social-icons">
                        <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                        <a href="#"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                        <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                        <a href="#"><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></a>
                    </div>
                </div>
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Works</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Help</h3>
                    <ul>
                        <li><a href="#">Customer Support</a></li>
                        <li><a href="#">Delivery Details</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>FAQ</h3>
                    <ul>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Manage Deliveries</a></li>
                        <li><a href="#">Orders</a></li>
                        <li><a href="#">Payments</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Free eBooks</a></li>
                        <li><a href="#">Development Tutorial</a></li>
                        <li><a href="#">How to - Blog</a></li>
                        <li><a href="#">Youtube Playlist</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; Shop.co 2000-2023, All Rights Reserved</p>
                <div className="payment-methods">
                    <img src="./Payment/Visa.png" alt="Visa" />
                    <img src="./Payment/mastercard.png" alt="MasterCard" />
                    <img src="./Payment/paypal.png" alt="PayPal" />
                    <img src="./Payment/Applepay.png" alt="Apple Pay" />
                    <img src="./Payment/Gpay.png" alt="Google Pay" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
