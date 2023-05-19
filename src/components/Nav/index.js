import React from "react";

const Nav = () => {

  return (
    <header>
        <ul className="header d-flex justify-content-around list-unstyled">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/book">Book Online</a>
          </li>
          <li>
            <a href="/pricing">Plan and Pricing</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="/Team">Team</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="#classes">Classes</a>
          </li>
        </ul>
      </header>
  );
};

export default Nav;