import React from 'react';
import HeaderTwo from "../Common/HeaderTwo";
import PriceData from './PriceData';
import ServicesBanner from './ServicesBanner';
import ServicesChoose from './ServicesChoose';
import ServicesName from './ServicesName';
const Service = () => {
    return (
        <>
           <HeaderTwo /> 
            <ServicesBanner />
            <ServicesName />
            <ServicesChoose />
            <PriceData />
        </>
    );
};

export default Service;
