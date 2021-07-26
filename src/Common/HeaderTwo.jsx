import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
const HeaderTwo = () => {
  const [main, setMain] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setMain(true);
    } else {
      setMain(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div className={main ? 'main scrolled' : 'main'}>
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt={logo} />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <MenuRoundedIcon className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    exact
                    className="nav-link"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    exact
                    className="nav-link"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    exact
                    className="nav-link"
                    to="/services"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    exact
                    className="nav-link"
                    to="/team"
                  >
                    Team
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/404-page"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </NavLink>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink className="dropdown-item" to="/404-page">
                      404 Error
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    exact
                    className="nav-link"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeaderTwo;
