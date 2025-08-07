import { Helmet } from "react-helmet-async";
import AllServices from "../components/services/AllServices";
import ServicesHero from "../components/services/ServicesHero";


const Services = () => {
    return (
       <><Helmet>
            <title>Services | TMT-Group</title>
        </Helmet>
       <ServicesHero />
       <AllServices />
       </>
    );
};

export default Services;