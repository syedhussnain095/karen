import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid py-5 for_footer_bg">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 py-2">
              <div className="for_logo_text">
                <NavLink to="/">
                  <img src={logo} alt={logo} />
                </NavLink>
              </div>
              <div className="footer_logo_under">
                <p>
                  Lorem ipsum dolor sit amet, consect ascing elit, sed do
                  eiusmod incididunt ut labore et dolore Many desktop lishing
                  packages and web page editors
                </p>
              </div>
              <div className="row">
                <div className="icons">
                  <NavLink to="/">
                    <i class="fa fa-facebook-f"></i>
                  </NavLink>
                  <NavLink to="/">
                    <i class="fa fa-twitter"></i>
                  </NavLink>
                  <NavLink to="/">
                    <i class="fa fa-linkedin"></i>
                  </NavLink>
                  <NavLink to="/">
                    <i class="fa fa-youtube"></i>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 py-2">
              <div className="foot_our_services">
                <div className="serv_heading">
                  <h4>OUR SERVCIE</h4>
                </div>
                <div className="undlist">
                  <ul className="for_bef">
                    <li>
                      <NavLink to="/services">Mobile App Development</NavLink>
                    </li>
                    <li>
                      <NavLink to="/services">Ui/Ux Design</NavLink>
                    </li>
                    <li>
                      <NavLink to="/services">Web Development</NavLink>
                    </li>
                    <li>
                      <NavLink to="/services">Article Writting</NavLink>
                    </li>
                    <li>
                      <NavLink to="/services">Content Management</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 py-2">
              <div className="foot_our_services">
                <div className="serv_heading">
                  <h4>QuickLink</h4>
                </div>
                <div className="undlist">
                  <ul className="for_bef">
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="/team">Team</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 py-2">
              <div className="foot_our_services">
                <div className="serv_heading">
                  <h4>Get In Touch</h4>
                </div>
                <div className="for_mail">
                  <p>Enter your email and receive the latest news from us.</p>
                </div>
                <div className="for_email_box">
                  <input type="text" placeholder="email@example.com" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
