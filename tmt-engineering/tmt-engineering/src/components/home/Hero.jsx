import { MoveDown } from "lucide-react";

import tmtEngVideo from "../../assets/videos/tmt-eng.mp4";

const Hero = () => {
  return (
    <div className="h-[50vh] relative md:h-[calc(100vh-100px)] w-full">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute bottom-6 md:bottom-12 left-1/2 text-white animate-bounce">
        {" "}
        <MoveDown size={30}/>
      </div>
      <video className="w-full h-full object-cover" autoPlay muted loop playbackRate="0.5">
        <source src={tmtEngVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;




