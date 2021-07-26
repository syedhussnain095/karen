import React from "react";
import crone from "../images/crone.png";
import crtwo from "../images/crtwo.png";
import crthree from "../images/crthree.png";
import crfour from "../images/crfour.png";
import { NavLink } from "react-router-dom";

const CreativeTeam = () => {
  return (
    <>
      <div className="containet-fluid">
        <div className="col-10 mx-auto mt-5">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 py-3">
              <div className="creative_team">
                  <div className="row">
                      <img src={crone} alt={crone} />
                      <img src={crtwo} alt={crtwo} />
                      <img src={crthree} alt={crthree} />
                      <img src={crfour} alt={crfour} />
                  </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 py-3">
              <div className="solution">
                <h2>
                We have <span>Creative</span> team<br />Solutions
                  <span> Discover</span> our exerts
                </h2>
                <h5>
                  Create some exclusive way to solve our
                  <br /> customer problems
                </h5>
                <p>
                  plabore et dolore magnam aliquam quaerat voluptatem. Ut enim
                  ad <br /> minima veniam, quis nostrum exercitationem ullam
                  corporis
                  <br /> suscipit laboriosam, nisi ex ea commodi consequatur?
                  Quis autem
                  <br /> vel eum iure reprehenderit qui in ea voluptate velit
                  esse quam
                </p>
                <div className="solution_btn">
                  <NavLink to="/services">
                    <button>Lets Start</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeTeam;
