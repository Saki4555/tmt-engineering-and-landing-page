import { Phone, Mail, Facebook, Instagram } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-te-prim text-white text-sm">
      <div className="container mx-auto px-4 py-2 hidden md:flex md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-1 md:space-y-0">
          <a
            href="tel:+6562521461"
            className="flex items-center space-x-1 hover:text-[#D1FAE5]"
          >
            <Phone className="w-4 h-4" />
            <span>+65 62521461</span>
          </a>
          <a
            href="mailto:tmtquickservice@yahoo.com.sg"
            className="flex items-center space-x-1 hover:text-[#D1FAE5]"
          >
            <Mail className="w-4 h-4" />
            <span>tmtquickservice@yahoo.com.sg</span>
          </a>
          <a
            href="mailto:tmtquick@tmtquickservice.com"
            className="flex items-center space-x-1 hover:text-[#D1FAE5]"
          >
            <Mail className="w-4 h-4" />
            <span>tmtquick@tmtquickservice.com</span>
          </a>
        </div>
        <div className="flex space-x-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D1FAE5]"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D1FAE5]"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
      {/* mobile view */}
      <div className="flex text-[11px] sm:text-sm justify-between px-6 py-2.5 md:hidden">
        <div className="space-y-0.5">
          <a
            href="mailto:tmtquickservice@yahoo.com.sg"
            className="flex items-center space-x-1 hover:text-[#D1FAE5]"
          >
            <Mail className="w-4 h-4" />
            <span>tmtquickservice@yahoo.com.sg</span>
          </a>
          <hr className="text-gray-300"/>
          <a
            href="mailto:tmtquick@tmtquickservice.com"
            className="flex items-center space-x-1 hover:text-[#D1FAE5]"
          >
            <Mail className="w-4 h-4" />
            <span>tmtquick@tmtquickservice.com</span>
          </a>
        </div>
        <div className="space-y-0.5">
        <a
            href="tel:+6562521461"
            className="flex items-center space-x-1 hover:text-[#D1FAE5]"
          >
            <Phone className="w-4 h-4" />
            <span>+65 62521461</span>
          </a>
          <hr  className="text-gray-300"/>
          <div className="flex gap-2 justify-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D1FAE5]"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D1FAE5]"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
