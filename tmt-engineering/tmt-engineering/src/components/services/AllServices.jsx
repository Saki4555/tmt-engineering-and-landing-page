import {
    Anchor,
    ArrowRight,
    Briefcase,
    Building,
    Cpu,
    Database,
    Gauge,
    HardHat,
    Lightbulb,
    Shield,
    PenToolIcon as Tool,
    Wrench,
    ChevronUp,
    ChevronDown
  } from "lucide-react"
  import { useState } from "react"
  
  export default function AllServices() {
    const services = [
      {
        title: "Marine Services",
        icon: <Anchor className="w-8 h-8" />,
        description:
          "Comprehensive marine solutions for vessels of all sizes, including repair, maintenance, and specialized marine engineering services.",
        items: [],
      },
      {
        title: "Electrical Services",
        icon: <Lightbulb className="w-8 h-8" />,
        description:
          "All kind of repair, conversion, EPRS, Rig jack up, drilling ship building, dredger ship building, oil & gas tanker ship building, cable laying ship building, passenger ship building, rescue & supply vessel, cargo container ship building plus laying cargo & New ship building project electrical installation, pre-commissioning & testing job.",
        items: [
          "Top Side Modules, E-houses and Skid Packages",
          "Main Propulsion Modules",
          "Living Quarters, Accommodation Modules in DNV 2.7-1/EN 12079",
          "Design, Manufacture and Installation of Electrical Switchgear & Control Systems",
          "Service & Repairs of Air Conditioning & Refrigeration System",
        ],
      },
      {
        title: "Electrical Inspection Services & Commissioning",
        icon: <Cpu className="w-8 h-8" />,
        description:
          "Installation, pre-commissioning & testing of Alarm Monitoring system for monitoring critical alarms for main engine, CPP, Shaft Generators, thrusters, steering gear system. Installation, pre-commissioning & testing of Main lighting system.",
        items: [
          "Installation, pre-commissioning & testing of machinery space Heaters",
          "Installation, pre-commissioning & testing of Fire/Discharge system",
          "Installation, pre-commissioning & testing of CCTV system",
          "Installation, pre-commissioning & testing of Normal lighting & Emergency Lighting system",
          "Installation, pre-commissioning & testing of sound power telephone",
          "Installation, pre-commissioning & testing of PA system",
          "Installation, pre-commissioning & testing of fire detection system",
          "Installation, pre-commissioning & testing of impressed current system",
        ],
      },
      {
        title: "Mechanical Piping Services",
        icon: <Gauge className="w-8 h-8" />,
        description: "Expert mechanical and piping solutions for industrial and marine applications.",
        items: [
          "All kind of motor, generator repair, overhaul and re-winding job",
          "Service & Overhauling of Main Engine, Generator, Motor & pumps",
          "Steel Piping Machining Works",
          "Service & Repairs of all types of Cranes & Winches",
        ],
      },
      {
        title: "Instrumentation Services",
        icon: <Database className="w-8 h-8" />,
        description: "All kind of instrument repair, calibration, pre-commissioning & testing job.",
        items: [],
      },
      {
        title: "Construction Services",
        icon: <Building className="w-8 h-8" />,
        description: "Comprehensive construction solutions for industrial, commercial, and residential projects.",
        items: [],
      },
      {
        title: "Air Conditioning & Mechanical Ventilation",
        icon: <Wrench className="w-8 h-8" />,
        description: "Complete HVAC solutions for all environments.",
        items: [
          "Design and Build Air conditioning and Mechanical ventilation System",
          "Central Chilled Water Air conditioning System for Office Buildings, HOTELS, Retail, Industrial Buildings and Industrial Plants",
          "Thermal Energy Storage System",
          "DX Air conditioning System for Office Buildings, Residential and Industrial Plants",
          "Air conditioning and Mechanical Ventilation System for Bio-medical complex, Hospitals and Chemical",
          "Complex Clean room System",
          "Air conditioning and Mechanical Ventilation System for Civil Defense Shelter",
          "Air conditioning and Mechanical Ventilation System for LUNS BUNKERS/PORTS incorporating Heat Recovery System",
          "Smoke Control System",
          "Energy Efficient Air conditioning System",
        ],
      },
      {
        title: "Fire Prevention & Protection System",
        icon: <Shield className="w-8 h-8" />,
        description: "Comprehensive fire safety solutions to protect your assets and personnel.",
        items: [
          "Design and Build of system system complying to the local Fire and Insurance Standards",
          "Sprinkler System for High Rise Offices, Hotels, Retail, Industrial Buildings and Industrial Plants",
          "Wet/Dry riser System for High Rise Offices, Hotels, Retail, Industrial Buildings and Industrial Plants",
          "Fire Alarm System",
          "Design and Build Fire Alarm System complying to the local Fire code",
          "Installation of Fire Alarm System for High Rise Offices, HOTELS, Retail, Industrial Buildings and Industrial Plants",
          "Design and Build Fire Suppression System using various gas for Chemical, Corporate and Industrial Environment",
        ],
      },
      {
        title: "Maintenance",
        icon: <Tool className="w-8 h-8" />,
        description: "Regular maintenance services to ensure optimal performance of your systems.",
        items: [
          "Comprehensive Maintenance of Mechanical and Electrical System",
          "Comprehensive Maintenance of Mechanical and Electrical System",
        ],
      },
      {
        title: "Offshore & Workshop",
        icon: <HardHat className="w-8 h-8" />,
        description: "Specialized offshore services and workshop capabilities for industrial needs.",
        items: [],
      },
      {
        title: "Factory & Industry",
        icon: <Briefcase className="w-8 h-8" />,
        description: "Tailored solutions for manufacturing and industrial facilities.",
        items: [],
      },
    ]
    
    // Create a state to track which cards have expanded items
    const [expandedItems, setExpandedItems] = useState({});
    
    // Toggle function for expanding/collapsing items
    const toggleItems = (index) => {
      setExpandedItems(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    };
  
    return (
      <section className="py-16 px-4 md:px-8 bg-[#F0FDF4] text-[#1E293B]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider mb-2 text-[#0F766E]">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#16A34A]">
              Our Services
            </h2>
            <div className="w-24 h-1 mx-auto bg-te-prim"></div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 transition-all duration-500 group relative overflow-hidden bg-[#E8FBF0] shadow-[8px_8px_16px_#D1E8D8,-8px_-8px_16px_#FFFFFF]"
              >
                {/* Neumorphic effect with gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F0FDF4] via-[#D1FAE5] to-[#E8FBF0] opacity-70"></div>
                
                {/* Inner shadow for depth */}
                <div className="absolute inset-0 rounded-2xl shadow-inner opacity-30"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    {/* Neumorphic icon container */}
                    <div className="p-4 rounded-full mr-4 transition-all duration-500 group-hover:scale-110 bg-[#E8FBF0] text-[#16A34A] shadow-[4px_4px_8px_#D1E8D8,-4px_-4px_8px_#FFFFFF]">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold transition-all duration-300 group-hover:translate-x-2 text-[#16A34A]">
                      {service.title}
                    </h3>
                  </div>
  
                  <p className="mb-6 text-[#1E293B]">{service.description}</p>
  
                  {service.items.length > 0 && (
                    <div>
                      <ul className="space-y-3">
                        {/* Show first 3 items or all items if expanded */}
                        {(expandedItems[index] ? service.items : service.items.slice(0, 3)).map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            {/* Neumorphic bullet */}
                            <div className="mr-3 mt-1 rounded-full flex-shrink-0 w-4 h-4 flex items-center justify-center bg-[#E8FBF0] shadow-[2px_2px_4px_#D1E8D8,-2px_-2px_4px_#FFFFFF]">
                              <div className="w-2 h-2 rounded-full bg-[#16A34A]"></div>
                            </div>
                            <span className="text-[#1E293B]">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Show toggle button only if there are more than 3 items */}
                      {service.items.length > 3 && (
                        <button 
                          onClick={() => toggleItems(index)}
                          className="flex items-center text-sm mt-4 transition-all duration-300 hover:translate-x-1 text-[#0F766E] pl-6"
                        >
                          <span className="mr-1 cursor-pointer">
                            {expandedItems[index] ? "Show less" : "View all services"}
                          </span>
                          {expandedItems[index] ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ArrowRight className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>
                  )}
{/*   
                  {service.items.length === 0 && (
                    <div className="mt-6 flex justify-center">
                     
                      <button className="px-6 py-3 rounded-lg transition-all duration-300 flex items-center text-[#16A34A] font-medium bg-[#E8FBF0] shadow-[4px_4px_8px_#D1E8D8,-4px_-4px_8px_#FFFFFF] hover:shadow-[2px_2px_4px_#D1E8D8,-2px_-2px_4px_#FFFFFF] active:shadow-[inset_2px_2px_4px_#D1E8D8,inset_-2px_-2px_4px_#FFFFFF]">
                        <span className="mr-2">Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )} */}
                </div>
                
                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#16A34A]/20 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }