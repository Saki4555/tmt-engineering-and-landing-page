import React, { useState } from 'react';
import { motion } from 'motion/react';

const MissionVisionPhilosophy = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const sections = [
    {
      id: 'mission',
      title: 'Our Mission',
      content: [
        'To deliver safe, high-quality, sustainable marine & offshore solutions leveraging on our capacity & technological expertise.',
        'To actively participate in International Vision 2030 contributing to economic, environmental and human development.'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'vision',
      title: 'Our Vision',
      content: [
        'To be the leading world-class shipyard based organization of choice delivering sustainable marine & offshore technological solutions.'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      id: 'philosophy',
      title: 'Our Philosophy',
      content: [
        'At TMT Group, we prioritize quality, safety, and innovation in every project. We empower talent through certified training and deliver expert solutions across shipbuilding and offshore engineering.',
        'With strong industry partnerships and a skilled team, we aim to exceed expectations, foster trust, and build lasting value for our clients and the communities we serve.'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    }
  ];

  const stats = [
    { value: '20+', label: 'Years of Excellence' },
    { value: '150+', label: 'Global Clients' },
    { value: '500+', label: 'Projects Completed' }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-te-back to-white/70 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-te-prim/20 rounded-full blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-te-acc/20 rounded-full blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.4 }}
        ></motion.div>
      </div>
      
      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-te-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mission, Vision & Philosophy
          </motion.h2>
          <motion.p 
            className="text-xl text-te-text/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The fundamental principles that guide our organization toward excellence
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                activeTab === section.id
                  ? 'bg-te-prim text-white shadow-lg'
                  : 'bg-white text-te-text/70 hover:bg-te-sec border border-te-sec'
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              
            >
              <motion.span 
                className={`mr-2 ${activeTab === section.id ? 'text-white' : 'text-te-prim'}`}
                animate={{ 
                  scale: activeTab === section.id ? 1.1 : 1,
                  rotate: activeTab === section.id ? 5 : 0
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {section.icon}
              </motion.span>
              {section.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-te-sec/50 overflow-hidden max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="p-8 md:p-12">
            {sections.map((section) => (
              <motion.div 
                key={section.id} 
                className={`transition-all duration-500 ${activeTab === section.id ? 'block' : 'hidden'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeTab === section.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex items-start mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-te-prim to-te-acc flex items-center justify-center text-white mr-6 flex-shrink-0"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {section.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-3xl font-bold text-te-text mt-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {section.title}
                  </motion.h3>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {section.content.map((paragraph, index) => (
                    <motion.p 
                      key={index} 
                      className="text-te-text/80 leading-relaxed text-lg mb-6 last:mb-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default MissionVisionPhilosophy;