import AboutHero from "../components/about/AboutHero";
import Certificates from "../components/about/Certificates";
import CorporateProfile from "../components/about/CorporateProfile";
import { OurSpecialization } from "../components/about/OurSpecialization";
import OurTrackRecordSection from "../components/about/OurTrackRecordSection";
import TMTCompanies from "../components/about/TMTCompanies";

const About = () => {
    return (
        <>
        <AboutHero />
        <CorporateProfile />
        <OurSpecialization />
        <Certificates />
        <OurTrackRecordSection />
        <TMTCompanies />
        </>
    );
};

export default About;