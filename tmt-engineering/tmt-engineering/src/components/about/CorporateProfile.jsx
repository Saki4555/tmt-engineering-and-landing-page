
import { Building2, Wrench,  Users, Globe2 } from 'lucide-react';
import aboutCorporate from '../../assets/about-images/about-corporate.jpg';


export default function CorporateProfile() {
  return (
    <div className="bg-te-back overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div 
          
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-te-text)] mb-4">
            A Simple Idea To Do Best For You!
          </h2>
          <div className="w-20 h-1 bg-[var(--color-te-prim)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
           
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[var(--color-te-text)] mb-6">
              Corporate Profile
            </h3>
            <div className="prose text-[var(--color-te-text)]">
              <p className="text-lg">
                TMT Quick Service was incorporated in Singapore with an issued and paid-up capital of SGD $3,00,000.
              </p>
              <p className="text-lg mt-4">
                We capitalize on the vast collective experience of our Directors in offering expertise in
                Fabrication & Installation of Electrical Instrumentation, tubing & piping work for the
                Marine, Oil/Petrochemical and Power generation Industries in Singapore & Azerbaijan(Baku).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {[
                { icon: Building2, text: "Established Infrastructure" },
                { icon: Wrench, text: "Expert Fabrication" },
                { icon: Globe2, text: "Global Presence" },
                { icon: Users, text: "Experienced Team" }
              ].map((item, index) => (
                <div
                  key={index}
                 
                  className="flex items-center p-4 bg-white  shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-[var(--color-te-sec)] rounded-full">
                    <item.icon className="w-6 h-6 text-[var(--color-te-prim)]" />
                  </div>
                  <span className="ml-4 text-[var(--color-te-text)] font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            
            className="relative"
          >
            <div className="relative rounded-none overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-te-prim/15"></div>
              <img 
                src={aboutCorporate}
                loading='lazy'
                alt="Industrial Operations"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-te-sec p-6 rounded-none shadow-lg">
              <p className="text-te-prim font-bold text-lg italic">
                "We do what we do best!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}