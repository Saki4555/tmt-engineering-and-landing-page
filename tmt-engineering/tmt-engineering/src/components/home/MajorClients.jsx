import Marquee from "react-fast-marquee";
import client1 from "../../assets/major-clients/client-1.png";
import client2 from "../../assets/major-clients/client-2.jpeg";
import client3 from "../../assets/major-clients/client-3.png";
import client4 from "../../assets/major-clients/client-4.png";
import client5 from "../../assets/major-clients/client-5.png";
import client6 from "../../assets/major-clients/client-6.png";
import client7 from "../../assets/major-clients/client-7.png";
import client8 from "../../assets/major-clients/client-8.jpeg";
import client9 from "../../assets/major-clients/client-9.png";
import client10 from "../../assets/major-clients/client-10.jpeg";
import client11 from "../../assets/major-clients/client-11.png";
import client12 from "../../assets/major-clients/client-12.png";
import client13 from "../../assets/major-clients/client-13.png";
import client14 from "../../assets/major-clients/client-14.png";
import client15jpeg from "../../assets/major-clients/client-15.jpeg";
import client15png from "../../assets/major-clients/client-15.png";
import client16 from "../../assets/major-clients/client-16.png";
import client17 from "../../assets/major-clients/client-17.png";
import client18 from "../../assets/major-clients/client-18.png";
import client19 from "../../assets/major-clients/client-19.jpeg";
import client20 from "../../assets/major-clients/client-20.png";
import client21 from "../../assets/major-clients/client-21.png";
import client22 from "../../assets/major-clients/client-22.png";
import client23 from "../../assets/major-clients/client-23.png";
import client24 from "../../assets/major-clients/client-24.png";
import client25 from "../../assets/major-clients/client-25.png";
import client26 from "../../assets/major-clients/client-26.png";
import client27 from "../../assets/major-clients/client-27.png";
import client28 from "../../assets/major-clients/client-28.png";
import client29 from "../../assets/major-clients/client-29.png";
import client30 from "../../assets/major-clients/client-30.png";
import client31 from "../../assets/major-clients/client-31.png";

const logosLine1 = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15jpeg,
  client15png,
];

const logosLine2 = [
  client16,
  client17,
  client18,
  client19,
  client20,
  client21,
  client22,
  client23,
  client24,
  client25,
  client26,
  client27,
  client28,
  client29,
  client30,
  client31,
  // Note: client31 is not included as we only need 15 images for the second line
];

const MajorClients = () => {
  return (
    <section className="bg-te-back py-16">
      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-te-text)] mb-4">
            Major Clients
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-te-text)]/70 max-w-2xl mx-auto">
            We’ve worked with industry-leading companies across the globe.
          </p>
        </div>
        {/* Marquee Left */}
        <Marquee
          speed={40}
          gradient={false}
          className="mb-8"
          pauseOnHover
          direction="left"
        >
          {logosLine1.map((logo, index) => (
            <div
              key={index}
              className="mx-6 flex items-center justify-center w-40 h-24 bg-white shadow rounded-lg p-3"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="object-contain max-h-full max-w-full"
              />
            </div>
          ))}
        </Marquee>

        {/* Marquee Right */}
        <Marquee speed={40} gradient={false} pauseOnHover direction="right">
          {logosLine2.map((logo, index) => (
            <div
              key={index}
              className="mx-6 flex items-center justify-center w-40 h-24 bg-white shadow rounded-lg p-3"
            >
              <img
                src={logo}
                alt={`Client ${index + 16}`}
                className="object-cover max-h-full max-w-full"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default MajorClients;
