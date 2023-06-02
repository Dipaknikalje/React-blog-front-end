import React from "react";
import "./Footer.css";
import DisplayIcon from "./DisplayIcon";
const Footer = () => {
  return (
    <div className="footer_bar">
      <div className="footer_bar_contact">
        <h2>Contacts</h2>
        <p>The siren</p>
        <p>thesiren@career.com</p>
        <p>+91XXXXXXXXXX</p>
      </div>
      <div className="footer_bar_about">
        <h2>Siren Market</h2>
        <p>About Siren</p>
        <p>career</p>
        <p>Liscence</p>
        <p>Privacy Policy</p>
      </div>
      <div className="footer_bar_help">
        <h2>For Help</h2>
        <p>Help Centre</p>
        <p>Authors</p>
        <br />
        <br />
        <DisplayIcon />
      </div>
    </div>
  );
};

export default Footer;
