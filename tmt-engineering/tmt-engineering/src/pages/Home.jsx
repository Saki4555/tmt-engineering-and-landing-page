import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import MajorClients from "../components/home/MajorClients";
import MissionVisionPhilosophy from "../components/home/MissionVisionPhilosophy";

import OurServices from "../components/home/OurServices";
import OurWorks from "../components/home/OurWorks";
import WhoWeAre from "../components/home/WhoWeAre";


const Home = () => {
    return (
        <><Helmet>
            <title>Home | TMT-Group</title>
        </Helmet>
        <Hero />
        <WhoWeAre />
        <MissionVisionPhilosophy />
        <MajorClients />
        <OurServices />
        <OurWorks />
        </>
    );
};

export default Home;