import ServiceCard from "./ServiceCard";



const services = [
  {
    number: 1,
    title: "MARINE",
    description: "We provide qualified marine services with industry-leading expertise and cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    number: 2,
    title: "ELECTRICAL",
    description: "All kind of repair conversion, FPSO, Rig-jack up, drilling ship building, dragger ship building, oil & gas tanker ship building, cable installation.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    number: 3,
    title: "INSPECTION",
    description: "Installation, pre-commissioning & testing of Alarm Monitoring system for monitoring critical alarms for main engine, CPP, Shaft Generators.",
    image: "https://images.unsplash.com/photo-1581092921461-7cbd9d40e684?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    number: 4,
    title: "MECHANICAL/PIPING",
    description: "All kind of motor generator repair, overhaul and rewinding job with state-of-the-art facilities.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    number: 5,
    title: "VENTILATION",
    description: "Design and Build Air-conditioning and Mechanical Ventilation System with advanced climate control.",
    image: "https://images.unsplash.com/photo-1562684750-0553aea79845?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    number: 6,
    title: "INSTRUMENTATION",
    description: "All kind of instrument repair, calibration, pre-commissioning & testing job with precision equipment.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    number: 7,
    title: "CONSTRUCTION",
    description: "Ship oriented construction services delivering excellence in maritime infrastructure.",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    number: 8,
    title: "FIRE PROTECTION",
    description: "Modern fire prevention and protection system with comprehensive safety measures.",
    image: "https://images.unsplash.com/photo-1599597435338-adbf0f27b5dc?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    number: 9,
    title: "MAINTENANCE",
    description: "Non-Comprehensive & Comprehensive Maintenance of Mechanical and Electrical Systems.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800&h=400"
  }
];

export default function OurServices() {
  return (
    <div className="min-h-screen bg-[var(--color-te-back)] py-16 px-8 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-te-text)] mb-4">
        Our Services
      </h1>
     
      <p className="text-xl text-[var(--color-te-text)]/70 max-w-2xl mx-auto">
        Comprehensive maritime and industrial solutions delivered with excellence and precision
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
        >
          <ServiceCard
            number={service.number}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        </div>
      ))}
    </div>
  </div>
</div>

  
  );
}