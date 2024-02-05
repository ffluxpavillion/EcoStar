import React from "react";
import "./Footer.scss";
import ecoStarLogo from "../../assets/logo/eco-star-logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <h1 className="footer__logo">
          Eco<span>Star</span>
        </h1>
        <div className="footer__logo-con">
          <img
            className="footer__logo-img"
            src={ecoStarLogo}
            alt="eco-star-logo"
          ></img>
        </div>
      </div>
      <p className="footer__para">&copy; EcoStar All rights reserved</p>
      <p className="footer__dev-header">Developed by:</p>
      <div className="footer__list-container">
        <ul className="footer__dev-list">
          <li className="footer__list-item">Bilal Hassen</li>|
          <li className="footer__list-item">Michael Sun Dela Cruz</li>|
          <li className="footer__list-item">Aman Damani</li>|
          <li className="footer__list-item">Arjun Sahjpaul</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
