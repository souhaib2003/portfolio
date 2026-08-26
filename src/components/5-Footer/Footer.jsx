
import React from "react";
// @ts-ignore
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="flex">

      <ul className="flex">

        <li>
          <a href="#about">
            About
          </a>
        </li>

        <li>
          <a href="#projects">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact">
            Contact
          </a>
        </li>

      </ul>

      <p>
        © 2026 Souhaib. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;
