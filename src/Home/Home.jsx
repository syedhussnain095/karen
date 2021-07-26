import React from 'react';
import HeaderTwo from "../Common/HeaderTwo";
import AboutSolution from "../About/AboutSolution";
import CreativeTeam from "../About/CreativeTeam";
import ProjectCompleted from "../About/ProjectCompleted";
import ServicesChoose from "../Services/ServicesChoose";
import PriceData from "../Services/PriceData";
import TeamData from "../Team/TeamData";
import TeamMain from "../Team/TeamMain";
import ContactForm from "../Contact/ContactForm";
import HomeBanner from "../Home/HomeBanner";
const Home = () => {
    return (
        <>
            <HeaderTwo />
            <HomeBanner />
            <AboutSolution />
            <CreativeTeam />
            <ProjectCompleted />
            <ServicesChoose />
            <PriceData />
            <TeamData />
           <TeamMain />
           <ContactForm />
        </>
    );
};

export default Home;
