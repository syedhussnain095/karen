import React from 'react'
import { NavLink } from "react-router-dom";
const AboutBanner = () => {
    const [error] = React.useState({
        bannerheading: "About",
        bannertohome: "Home",
      });
    return (
        <>
            <div className="error_banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="error_text">
                <h2>{error.bannerheading}</h2>
                <ul>
                  <li>
                    <NavLink to="/">{error.bannertohome}</NavLink>
                  </li>
                  <li className="error_last_child">{error.bannerheading}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default AboutBanner;
