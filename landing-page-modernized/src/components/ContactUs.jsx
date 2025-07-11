import { Phone, Smartphone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SectionContainer } from "./SectionContainer";

export default function ContactSection() {
  return (
    <section className="min-h-screen text-slate-100 py-16 lg:py-20 ">
      <SectionContainer>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-red-500 to-sky-600 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Get in touch with our travel or engineering teams — we're here to
            help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2">
          {/* Travel Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-teal-500 transition">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">Travel</h3>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-700 via-red-800 to-sky-500 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="space-y-5">
              <ContactItem
                icon={<Phone className="w-5 h-5" />}
                label="Primary Phone"
                value="(+65) 62916621"
                href="tel:+6562916621"
                color="teal"
              />
              <ContactItem
                icon={<Smartphone className="w-5 h-5" />}
                label="Mobile"
                value="(+65) 87865630"
                href="tel:+6587865630"
                color="teal"
              />
              <ContactItem
                icon={<Mail className="w-5 h-5" />}
                label="Main Email"
                value="tmtquicktravel.tours@gmail.com"
                href="mailto:tmtquicktravel.tours@gmail.com"
                color="teal"
              />
              <ContactItem
                icon={<Mail className="w-5 h-5" />}
                label="Support Email"
                value="tmtquickservice@yahoo.com.sg"
                href="mailto:tmtquickservice@yahoo.com.sg"
                color="teal"
              />
              <ContactItem
                icon={<MapPin className="w-5 h-5" />}
                label="Office Address"
                value="60 Benoi Road (EMS Building), Unit #02-01, Singapore 629906"
                color="teal"
              />
            </div>
          </div>

          {/* Engineering Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-green-700 transition">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">Engineering</h3>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-700 via-red-800 to-sky-500 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="space-y-5">
              <ContactItem
                icon={<Phone className="w-5 h-5" />}
                label="Primary Phone"
                value="+65 62521461"
                href="tel:+6562521461"
                color="green"
              />
              <ContactItem
                icon={<Smartphone className="w-5 h-5" />}
                label="Mobile"
                value="+65 90403566"
                href="tel:+6590403566"
                color="green"
              />
              <ContactItem
                icon={<Mail className="w-5 h-5" />}
                label="Main Email"
                value="tmtquickservice@yahoo.com.sg"
                href="mailto:tmtquickservice@yahoo.com.sg"
                color="green"
              />
              <ContactItem
                icon={<Mail className="w-5 h-5" />}
                label="Direct Contact"
                value="tmtquick@tmtquickservice.com"
                href="mailto:tmtquick@tmtquickservice.com"
                color="green"
              />
              <ContactItem
                icon={<MapPin className="w-5 h-5" />}
                label="Office Address"
                value="60 Benoi Road (EMS Building), Unit #02-01, Singapore 629906"
                color="green"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

// ContactItem Component
function ContactItem({ icon, label, value, href, color }) {
  const colorClasses = {
    teal: "bg-teal-600 hover:bg-teal-700",
    green: "bg-green-700 hover:bg-green-800",
  };

  const content = (
    <div className="flex flex-wrap items-start gap-4 p-4 rounded-xl hover:bg-slate-800 transition">
      <div
        className={`w-11 h-11 ${colorClasses[color]} rounded-lg flex items-center justify-center text-white`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-slate-400 uppercase tracking-wide font-semibold mb-1">
          {label}
        </p>
        <p className="text-white text-base font-medium break-words whitespace-normal">
          {value}
        </p>
      </div>
      {href && (
        <ArrowUpRight className="w-4 h-4 text-slate-500 self-start mt-1" />
      )}
    </div>
  );

  return href ? (
    <a href={href} className="block transition-colors">
      {content}
    </a>
  ) : (
    content
  );
}
