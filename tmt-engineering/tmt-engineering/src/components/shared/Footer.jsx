
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Home, Info, Settings, FolderKanban } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br  from-[#16A34A] to-[#0F766E] text-white py-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-10 lg:px-0 lg:grid-cols-4 gap-8 lg:justify-items-center">
          {/* Logo Section */}
          <div className="space-y-4">
            <div className="bg-[#D1FAE5] p-4 rounded-xl inline-block">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/738221_image.png" 
                alt="TMT Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <p className="text-[#D1FAE5] text-sm">
              Your trusted partner for quick and reliable service.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+6562521461" className="flex items-center gap-3 group">
                <div className="bg-[#D1FAE5] p-2 rounded-lg group-hover:bg-white transition-colors">
                  <Phone className="w-5 h-5 text-[#16A34A]" />
                </div>
                <span className="group-hover:text-[#D1FAE5] transition-colors">+65 62521461</span>
              </a>
              <a href="mailto:tmtquick@tmtquickservice.com" className="flex items-center gap-3 group">
                <div className="bg-[#D1FAE5] p-2 rounded-lg group-hover:bg-white transition-colors">
                  <Mail className="w-5 h-5 text-[#16A34A]" />
                </div>
                <div className="flex flex-col">
                  <span className="group-hover:text-[#D1FAE5] transition-colors">tmtquickservice@yahoo.com.sg</span>
                  <span className="group-hover:text-[#D1FAE5] transition-colors">tmtquick@tmtquickservice.com</span>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="bg-[#D1FAE5] p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-[#16A34A]" />
                </div>
                <div>
                  <p>60 Benoi Road (FMS Building),</p>
                  <p>Unit #02-01, Singapore 629906</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', icon: Home },
                { name: 'About Us', icon: Info },
                { name: 'Services', icon: Settings },
                { name: 'Projects', icon: FolderKanban },
                { name: 'Contact', icon: Phone }
              ].map(({ name, icon: Icon }) => (
                <li key={name}>
                  <a 
                    href="#" 
                    className="group flex items-center gap-3 hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="bg-[#D1FAE5] p-1.5 rounded group-hover:bg-white transition-colors">
                      <Icon className="w-4 h-4 text-[#16A34A]" />
                    </div>
                    <span className="group-hover:text-[#D1FAE5]">{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
           
            
              <p>Monday - Friday : 9:00 AM - 6:00 PM</p>
              
           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 md:px-10 lg:px-0 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <p>© 2024 TMT Quick Service. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#D1FAE5] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#D1FAE5] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
