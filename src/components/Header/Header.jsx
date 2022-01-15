import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="video-container" id="home">
      <video src="/Peace.mp4" autoPlay loop muted />
      {/* pasting the navbar below the video */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav_bg w-100">
        <div className="container">
          <Link to="home" smooth={true}>
            <NavLink className="navbar-brand" to="/" exact>
              TRVL <i class="fab fa-typo3" />
            </NavLink>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="home" smooth={true}>
                  <NavLink
                    exact
                    activeClassName="activeLink"
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="aboutus" smooth={true}>
                  <NavLink
                    exact
                    activeClassName="activeLink"
                    className="nav-link"
                    to="/aboutus"
                  >
                    About Us
                  </NavLink>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="products" smooth={true}>
                  <NavLink
                    exact
                    activeClassName="activeLink"
                    className="nav-link"
                    to="/products"
                  >
                    Services
                  </NavLink>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="footer" smooth={true}>
                  <NavLink
                    exact
                    activeClassName="activeLink"
                    className="nav-link"
                    to="/contactus"
                  >
                    Contact Us
                  </NavLink>
                </Link>
              </li>

              <div>
                <NavLink className="nav-link" to="#">
                  <AccountCircleIcon />
                </NavLink>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {/* our heading part */}
      <div className="header">
        <h1>It's All About Traveling!</h1>
        <h4>Want To Know More About Us?</h4>
        <button>Click Me</button>
      </div>
    </div>
  );
};

export default Header;
