import { Helmet } from "react-helmet-async";
import AboutHero from "../components/about/AboutHero";
import Certificates from "../components/about/Certificates";
import CorporateProfile from "../components/about/CorporateProfile";
import { OurSpecialization } from "../components/about/OurSpecialization";
import OurTrackRecordSection from "../components/about/OurTrackRecordSection";
import TMTCompanies from "../components/about/TMTCompanies";

const About = () => {
    return (
        <><Helmet>
            <title>About | TMT-Group</title>
        </Helmet>
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