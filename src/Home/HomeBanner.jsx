import React from 'react';
import homebanner from "../images/homebanner.png";
const HomeBanner = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="home_bannner_text">
                                <h1>Best Ideas To Increase Your Business</h1>
                                <div className="for_order_btn text-left">
                                    <button>Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="for_home_img">
                                <img src={homebanner} alt={homebanner} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeBanner;
