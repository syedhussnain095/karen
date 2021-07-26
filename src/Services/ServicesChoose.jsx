import React from 'react';
import choose from "../images/choose.png";

const ServicesChoose = () => {
    const [choosenow] = React.useState(
        {
            one : "Find the actual problems",
            two : "Proper steps for solutions",
            three : "Beneficial strategies",
            para : "Ideas es to obtain pain of itself, because it is pain, but because occasionallyght ocean he Internet tend to repeat predefined chunk's as necessary with some of themoment",
            number : "+98564 857 652"
        });
    return (
        <>
            <div className="container-fluid">
                <div className="col-10 mx-auto py-4">
                    <div className="ser">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="chooseone">
                                <h3>
                               <span>People</span> Choose us <br /> Because <span>we Provide</span> <br /> great Solutions
                                </h3>
                                <div className="chooseone_data">
                                <h4>{choosenow.one}</h4>
                                <p>{choosenow.para}</p>
                                <h4>{choosenow.two}</h4>
                                <p>{choosenow.para}</p>
                                <h4>{choosenow.three}</h4>
                                <p>{choosenow.para}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="chooseone">
                                <h3 className="title">
                                Have <span>Business</span> Problems? <br />
                                Just dial us with no <span>hesitaion</span> <br />
                                we have <span>expert</span> team   
                                </h3>
                                <div className="choosetwo_data">
                                   <h2>{choosenow.number}</h2>
                                </div>
                                <div className="for_choose_img">
                                    <img src={choose} alt={choose} />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesChoose;
