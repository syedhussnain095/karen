import React from 'react';
import HeaderTwo from "../Common/HeaderTwo";
import AboutBanner from './AboutBanner';
import AboutSolution from './AboutSolution';
import CreativeTeam from './CreativeTeam';
import ProjectCompleted from './ProjectCompleted';
const About = () => {
    return (
        <>
           <HeaderTwo /> 
            <AboutBanner />
            <AboutSolution />
            <ProjectCompleted />
            <CreativeTeam />
        </>
    );
};

export default About;
