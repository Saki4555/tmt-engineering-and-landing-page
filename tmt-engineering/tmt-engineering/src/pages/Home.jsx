import Hero from "../components/home/Hero";
import MajorClients from "../components/home/MajorClients";
import MissionVisionPhilosophy from "../components/home/MissionVisionPhilosophy";

import OurServices from "../components/home/OurServices";
import OurWorks from "../components/home/OurWorks";
import WhoWeAre from "../components/home/WhoWeAre";


const Home = () => {
    return (
        <><Hero />
        <WhoWeAre />
        <MissionVisionPhilosophy />
        <MajorClients />
        <OurServices />
        <OurWorks />
        </>
    );
};

export default Home;