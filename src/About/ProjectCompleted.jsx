import React from 'react';
import CountUp from 'react-countup';

const ProjectCompleted = () => {

    return (
        <>
            <div className="conatiner-fluid for_project_bg">
                <div className="col-10 mx-auto">
                <div className="col-12">
                    <div className="for_project">
                    <h2>Sucessfully <span>completed</span> 2100+ <span>projects</span> with<br /> numbers of satisfied client</h2>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="for_project_text">
                            <h4><CountUp end={750} duration={9} /></h4>
                            <p>Satisfied Clients</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="for_project_text">
                            <h4><CountUp end={950} duration={9} /></h4>
                            <p>Completed Projects</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="for_project_text">
                            <h4><CountUp end={600} duration={9} /></h4>
                            <p>Cup Coffee</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="for_project_text">
                            <h4><CountUp end={95} duration={9} /></h4>
                            <p>Awards Winning</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default ProjectCompleted;
