
import ContactSection from "../components/ContactSection";
import EngineeringSection from "../components/EngineeringSection";
import Footer from "../components/Footer";

import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

import TravelSection from "../components/TravelSection";


const LandingPage = () => {
    return (
       <>
       <Navbar />
       <HeroSection />
       <EngineeringSection />
       <TravelSection />
       <ContactSection />
      
      
       <Footer />
       
       </>
    );
};

export default LandingPage;