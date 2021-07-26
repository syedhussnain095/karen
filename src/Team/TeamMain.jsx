import React from 'react';
import TeamMainData from "./TeamMainData";
import TeamSdata from "./TeamSdata";
const TeamMain = () => {
    return (
        <>
            <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        {
                            TeamSdata.map((val , ind) => {
                                return <TeamMainData key={ind}
                                    imgsrc={val.imgsrc}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default TeamMain;
