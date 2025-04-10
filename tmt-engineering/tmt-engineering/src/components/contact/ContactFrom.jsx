import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
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
    // console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-[#F0FDF4] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Column */}

          <div className="lg:col-span-1">
            <div
              className="bg-white p-4 md:p-8 rounded-lg shadow-lg h-full"
              style={{
                boxShadow: "8px 8px 16px #d1e3d6, -8px -8px 16px #ffffff",
              }}
            >
              <h2 className="text-2xl font-bold text-te-prim mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div
                    className="bg-[#D1FAE5] p-3 rounded-full mr-4"
                    style={{
                      boxShadow: "2px 2px 5px #d1e3d6, -2px -2px 5px #ffffff",
                    }}
                  >
                    <Phone className="text-te-acc w-5 h-5" />
                  </div>
                  <div className="">
                    <h4 className="font-semibold text-te-acc">Phone</h4>

                    <a href="tel:+6562521461" className="hover:text-te-prim">
                      +(65) 62521461
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div
                    className="bg-[#D1FAE5] p-3 rounded-full mr-4"
                    style={{
                      boxShadow: "2px 2px 5px #d1e3d6, -2px -2px 5px #ffffff",
                    }}
                  >
                    <Mail className="text-te-acc w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-te-acc">Email</h4>
                    {/* <p className="text-te-text">info@example.com</p> */}
                    <div className="flex flex-col text-xs sm:text-base">
                      <a
                        href="mailto:tmtquickservice@yahoo.com.sg"
                        className="hover:text-te-prim text-te-text"
                      >
                        tmtquickservice@yahoo.com.sg
                      </a>
                      <a
                        href="mailto:tmtquick@tmtquickservice.com"
                        className="hover:text-te-prim text-te-text"
                      >
                        tmtquick@tmtquickservice.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div
                    className="bg-[#D1FAE5] p-3 rounded-full mr-4"
                    style={{
                      boxShadow: "2px 2px 5px #d1e3d6, -2px -2px 5px #ffffff",
                    }}
                  >
                    <MapPin className="text-te-acc w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-te-acc">Address</h4>
                    <p className="text-te-text hover:text-te-prim">
                      60 Benoi Road (EMS Building), Unit #02-01, Singapore
                      629906
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold text-te-acc mb-3">
                  Business Hours
                </h3>
                <p className="text-te-text hover:text-te-prim mb-2">
                  Monday - Friday : 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <div
              className="bg-white p-8 rounded-lg shadow-lg"
              style={{
                boxShadow: "8px 8px 16px #d1e3d6, -8px -8px 16px #ffffff",
              }}
            >
              <h2 className="text-2xl font-bold text-te-prim mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-te-text mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F0FDF4] border border-[#D1FAE5] rounded-lg focus:outline-none focus:ring-2 focus:ring-te-prim focus:border-transparent transition duration-200 shadow-[inset_2px_2px_5px_#d1e3d6,inset_-2px_-2px_5px_#ffffff]"
                      // className="w-full px-4 py-3 bg-[#F0FDF4] border border-te-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-te-prim focus:border-transparent transition duration-200"
                      // style={{
                      //   boxShadow:
                      //     "inset 2px 2px 5px #d1e3d6, inset -2px -2px 5px #ffffff",
                      // }}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-te-text mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F0FDF4] border border-[#D1FAE5] rounded-lg focus:outline-none focus:ring-2 focus:ring-te-prim focus:border-transparent transition duration-200 shadow-[inset_2px_2px_5px_#d1e3d6,inset_-2px_-2px_5px_#ffffff]"
                      // className="w-full px-4 py-3 bg-[#F0FDF4] border border-te-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-te-prim focus:border-transparent transition duration-200"
                      // style={{
                      //   boxShadow:
                      //     "inset 2px 2px 5px #d1e3d6, inset -2px -2px 5px #ffffff",
                      // }}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-te-text mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      // className="w-full px-4 py-3 bg-[#F0FDF4] border border-te-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-te-prim focus:border-transparent transition duration-200"
                      className="w-full px-4 py-3 bg-[#F0FDF4] border border-[#D1FAE5] rounded-lg focus:outline-none focus:ring-2 focus:ring-te-prim focus:border-transparent transition duration-200 shadow-[inset_2px_2px_5px_#d1e3d6,inset_-2px_-2px_5px_#ffffff]"
                      // style={{
                      //   boxShadow:
                      //     "inset 2px 2px 5px #d1e3d6, inset -2px -2px 5px #ffffff",
                      // }}
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-te-text mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F0FDF4] border border-[#D1FAE5] rounded-lg focus:outline-none focus:ring-2 focus:ring-te-prim focus:border-transparent transition duration-200 shadow-[inset_2px_2px_5px_#d1e3d6,inset_-2px_-2px_5px_#ffffff]"
                      // className="w-full px-4 py-3 bg-[#F0FDF4] border border-te-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-te-prim focus:border-transparent transition duration-200"
                      // style={{
                      //   boxShadow:
                      //     "inset 2px 2px 5px #d1e3d6, inset -2px -2px 5px #ffffff",
                      // }}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-te-text mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-[#F0FDF4] border border-[#D1FAE5] rounded-lg focus:outline-none focus:ring-2 focus:ring-te-prim focus:border-transparent transition duration-200 shadow-[inset_2px_2px_5px_#d1e3d6,inset_-2px_-2px_5px_#ffffff]"
                    // className="w-full px-4 py-3 bg-[#F0FDF4] border border-te-sec rounded-lg focus:outline-none focus:ring-2 focus:ring-te-prim focus:border-transparent transition duration-200"
                    // style={{
                    //   boxShadow:
                    //     "inset 2px 2px 5px #d1e3d6, inset -2px -2px 5px #ffffff",
                    // }}
                    placeholder="Please describe your question or inquiry in detail..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center px-6 py-3 bg-te-prim text-white font-medium rounded-lg hover:bg-te-acc transition duration-300"
                  style={{
                    boxShadow: "4px 4px 8px #d1e3d6, -4px -4px 8px #ffffff",
                  }}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
