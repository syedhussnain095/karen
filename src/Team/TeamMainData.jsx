import React from 'react';

const TeamMainData = (props) => {
    return (
        <>
             <div className="col-md-3 col-10 mx-auto">
            <div className="team_img py-2">
                <img src={props.imgsrc} className="card_img_top" alt={props.imgsrc}/>              
            </div>
        </div>
        </>
    );
};

export default TeamMainData;
