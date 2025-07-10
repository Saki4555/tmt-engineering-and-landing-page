import { HeroSectionOne } from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
    <HeroSectionOne />
    <div className="h-screen bg-black"></div>
    </div>
  );
}
