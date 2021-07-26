import React from 'react';

const ServiceNameData = (props) => {
    return (
        <>
            
            <div className="col-md-4 col-10 mx-auto mt-5">
                <div className="ser">
            <div className="ser_head">
                <img src={props.imgsrc} className="card_img_top" alt={props.imgsrc}/>              
            </div>
            <div className="ser_body">
                <h4>{props.name}</h4>
                <p>{props.text}</p>
            </div>
            </div>
        </div>
        </>
    );
};

export default ServiceNameData;
