import React from 'react';
import { NavLink } from "react-router-dom";
import about from "../images/about.png";
const AboutSolution = () => {
    return (
        <>
            <div className="containet-fluid">
                <div className="col-10 mx-auto mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 py-3">
                            <div className="solution">
                                <h2><span>Provide</span> the Best <br /> Solutions <span>to Improve</span> <br />your Business</h2>
                                <h5>Create some exclusive way to solve our<br /> customer problems</h5>
                             <p>plabore et dolore magnam aliquam quaerat voluptatem. Ut enim ad <br /> minima veniam, quis nostrum exercitationem ullam corporis<br /> suscipit laboriosam, nisi ex ea commodi consequatur? Quis autem<br /> vel eum iure reprehenderit qui in ea voluptate velit esse quam
                             </p>
                             <div className="solution_btn">
                        <NavLink to="/services">
                        <button>Lets Start</button>
                        </NavLink>
                    </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 py-3">
                            <div className="solution_img">
                                <img src={about} alt={about} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSolution;
