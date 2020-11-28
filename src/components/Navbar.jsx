import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="menu displayFlex">
        <div>
          <img src="./assets/logo.png" alt="logo" />
        </div>
        <div className="displayFlex displayCenter">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/reports">
              Reports
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
