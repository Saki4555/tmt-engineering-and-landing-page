


import React from 'react';
import LightGallery from 'lightgallery/react';
import { Maximize } from 'lucide-react';

// Import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import {
  landScape1,
  landScape2,
  landScape3,
  landScape4,
  landScape5,
  landScape6,
  landScape7,
  landScape8,
  landScape9,
  landScape10,
  landScape11,
  landScape12,
  landScape13,
  landScape14,
  landScape15,
  landScape16,
  landScape17,
  landScape18,
  landScape19,
  landScape20,
  landScape21,
  landScape22,
  landScape23,
  landScape24,
  portrait1,
  portrait2,
  portrait3,
  portrait4,
  portrait5,
  portrait6,
  portrait7,
  portrait8,
  portrait9,
  portrait10,
  portrait11,
  portrait12,
  portrait13,
  portrait14,
  portrait15,
  portrait16,
  portrait17,
  portrait18,
  portrait19,
  portrait20,
  portrait21,
  portrait22,
  portrait23,
  portrait24,
  portrait25,
  portrait26,
  portrait27,
  portrait28,
  portrait29,
  portrait30,
  portrait31,
  portrait32,
  portrait33,
  portrait34,
  portrait35,
  portrait36,
} from '../../assets'; 

const images = [
  landScape1,
  landScape2,
  landScape3,
  landScape4,
  landScape5,
  landScape6,
  landScape7,
  landScape8,
  landScape9,
  landScape10,
  landScape11,
  landScape12,
  landScape13,
  landScape14,
  landScape15,
  landScape16,
  landScape17,
  landScape18,
  landScape19,
  landScape20,
  landScape21,
  landScape22,
  landScape23,
  landScape24,
  portrait1,
  portrait2,
  portrait3,
  portrait4,
  portrait5,
  portrait6,
  portrait7,
  portrait8,
  portrait9,
  portrait10,
  portrait11,
  portrait12,
  portrait13,
  portrait14,
  portrait15,
  portrait16,
  portrait17,
  portrait18,
  portrait19,
  portrait20,
  portrait21,
  portrait22,
  portrait23,
  portrait24,
  portrait25,
  portrait26,
  portrait27,
  portrait28,
  portrait29,
  portrait30,
  portrait31,
  portrait32,
  portrait33,
  portrait34,
  portrait35,
  portrait36,
];

function TMTGallery() {
  return (
    <div className="min-h-screen bg-[var(--color-te-back)] p-8">
      <div className="max-w-6xl mx-auto">
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <a
              key={index}
              href={image}
              className={`gallery-item transform   transition-all duration-200 hover:scale-105 group`}
            >
              <div className="relative rounded-xl overflow-hidden shadow-[5px_5px_200px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] bg-[var(--color-te-sec)] transition-all duration-300">
                <img
                  src={image}
                  alt={`IN FIELD ${index + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4  bg-gradient-to-t from-black/50 to-transparent">
                  <h3 className="text-white font-medium">IN FIELD</h3>
                </div>
                
                {/* Icon that appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="bg-[var(--color-te-prim)] text-white p-3 rounded-full shadow-lg">
                    <Maximize size={24} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
}

export default TMTGallery;


