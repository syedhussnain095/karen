import React from 'react';
import HeaderTwo from "../Common/HeaderTwo";
import ErrorBanner from './ErrorBanner';
import ErrorPageData from "./ErrorPageData";
const Error = () => {
    
    return (
        <>
           <HeaderTwo /> 
           <ErrorBanner />
           <ErrorPageData />
        </>
    );
};

export default Error;
