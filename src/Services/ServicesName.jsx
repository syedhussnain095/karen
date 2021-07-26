import React from 'react';
import ServiceNameSdata from "./ServiceNameSdata";
import ServiceNameData from "./ServiceNameData";
const ServicesName = () => {
    return (
        <>
             <div className="container-fluid mb-5 for_ser">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            ServiceNameSdata.map((val , ind) => {
                                return <ServiceNameData key={ind}
                                    imgsrc={val.imgsrc}
                                    name={val.name}
                                    text={val.text}
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

export default ServicesName;
