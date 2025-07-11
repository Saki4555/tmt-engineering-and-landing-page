import ContactSection from "@/components/ContactUs";
import EngineeringSection from "@/components/EngineeringSection";
import { HeroSectionOne } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TravelSection from "@/components/TravelSection";


export default function Home() {
  return (
    <div className="bg-gray-950">
      <Navbar />
    <HeroSectionOne />
    <EngineeringSection />
    <TravelSection />
    <ContactSection />
    
    </div>
  );
}
