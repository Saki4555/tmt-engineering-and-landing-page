'use client';

import  { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactForm = () => {
  const [formData, setState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_lvmjmwa", "template_j7aq1ne", e.target, {
        publicKey: "y8soEx7fgT0Onchsm",
      })
      .then(() => {
        toast.success("Your message has been sent successfully!");
        setLoading(false);
        setState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "Oops! Something went wrong while sending your message. Please try again."
        );
        setLoading(false);
      });
  };

  return (
    <div className="bg-[var(--color-te-back)] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="bg-white p-4 md:p-8 rounded-none border border-te-acc/30 shadow-[8px_8px_16px_var(--color-te-sec),_-8px_-8px_16px_var(--color-te-back)] h-full"
            >
              <h2 className="text-2xl font-bold text-[var(--color-te-prim)] mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div
                    className="bg-[var(--color-te-sec)] shadow-[2px_2px_5px_var(--color-te-sec),_-2px_-2px_5px_var(--color-te-back)] rounded-full p-3 mr-4"
                  >
                    <Phone className="text-[var(--color-te-acc)] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-te-acc)]">Phone</h4>
                    <a href="tel:+6562521461" className="hover:text-[var(--color-te-prim)]">
                      +(65) 62521461
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div
                    className="bg-[var(--color-te-sec)] shadow-[2px_2px_5px_var(--color-te-sec),_-2px_-2px_5px_var(--color-te-back)] rounded-full p-3 mr-4"
                  >
                    <Mail className="text-[var(--color-te-acc)] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-te-acc)]">Email</h4>
                    <div className="flex flex-col break-all">
                      <a
                        href="mailto:tmtquickservice@yahoo.com.sg"
                        className="hover:text-[var(--color-te-prim)] text-[var(--color-te-text)]"
                      >
                        tmtquickservice@yahoo.com.sg
                      </a>
                      <a
                        href="mailto:tmtquick@tmtquickservice.com"
                        className="hover:text-[var(--color-te-prim)] text-[var(--color-te-text)]"
                      >
                        tmtquick@tmtquickservice.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div
                    className="bg-[var(--color-te-sec)] shadow-[2px_2px_5px_var(--color-te-sec),_-2px_-2px_5px_var(--color-te-back)] rounded-full p-3 mr-4"
                  >
                    <MapPin className="text-[var(--color-te-acc)] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-te-acc)]">Address</h4>
                    <p className="text-[var(--color-te-text)] hover:text-[var(--color-te-prim)]">
                      60 Benoi Road (EMS Building), Unit #02-01, Singapore 629906
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold text-[var(--color-te-acc)] mb-3">
                  Business Hours
                </h3>
                <p className="text-[var(--color-te-text)] hover:text-[var(--color-te-prim)] mb-2">
                  Monday - Friday : 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="bg-white p-8 rounded-none border border-te-acc/30 shadow-[8px_8px_16px_var(--color-te-sec),_-8px_-8px_16px_var(--color-te-back)]"
            >
              <h2 className="text-2xl font-bold text-[var(--color-te-prim)] mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--color-te-text)] mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 bg-[var(--color-te-back)] border border-[var(--color-te-sec)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-te-prim)] focus:border-transparent transition duration-200 shadow-[inset_2px_2px_5px_var(--color-te-sec),inset_-2px_-2px_5px_var(--color-te-back)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--color-te-text)] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 bg-[var(--color-te-back)] border border-[var(--color-te-sec)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-te-prim)] focus:border-transparent transition duration-200 shadow-[inset_2px_2px_5px_var(--color-te-sec),inset_-2px_-2px_5px_var(--color-te-back)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[var(--color-te-text)] mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className="w-full px-4 py-3 bg-[var(--color-te-back)] border border-[var(--color-te-sec)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-te-prim)] focus:border-transparent transition duration-200 shadow-[inset_2px_2px_5px_var(--color-te-sec),inset_-2px_-2px_5px_var(--color-te-back)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[var(--color-te-text)] mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="w-full px-4 py-3 bg-[var(--color-te-back)] border border-[var(--color-te-sec)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-te-prim)] focus:border-transparent transition duration-200 shadow-[inset_2px_2px_5px_var(--color-te-sec),inset_-2px_-2px_5px_var(--color-te-back)]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--color-te-text)] mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Please describe your question or inquiry in detail..."
                    required
                    className="w-full px-4 py-3 bg-[var(--color-te-back)] border border-[var(--color-te-sec)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-te-prim)] focus:border-transparent transition duration-200 shadow-[inset_2px_2px_5px_var(--color-te-sec),inset_-2px_-2px_5px_var(--color-te-back)]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center px-6 py-3 bg-[var(--color-te-prim)] text-white font-medium rounded-lg hover:bg-[var(--color-te-acc)] transition duration-300 shadow-[4px_4px_8px_var(--color-te-sec),_-4px_-4px_8px_var(--color-te-back)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
