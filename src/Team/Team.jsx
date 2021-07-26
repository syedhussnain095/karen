import React from 'react';
import HeaderTwo from "../Common/HeaderTwo";
import TeamBanner from './TeamBanner';
import TeamData from './TeamData';
import TeamMain from './TeamMain';

const Team = () => {
    return (
        <>
           <HeaderTwo />
           <TeamBanner /> 
           <TeamData />
           <TeamMain />
        </>
    );
};

export default Team;
