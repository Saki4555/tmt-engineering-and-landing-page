import { Phone, Mail, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-te-prim text-white text-sm">
      <div className="container mx-auto px-4 py-2 hidden md:flex md:flex-row justify-between items-center space-y-2 md:space-y-0">
        {/* Left: Emails */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-1 md:space-y-0">
          <a
            href="mailto:tmtquickservice@yahoo.com.sg"
            className="flex items-center space-x-1 hover:text-[#D1FAE5]"
          >
            <Mail className="w-4 h-4" />
            <span>tmtquickservice@yahoo.com.sg</span>
          </a>
          <a
            href="mailto:marketing@tmtquickservice.com"
            className="flex items-center space-x-1 hover:text-[#D1FAE5]"
          >
            <Mail className="w-4 h-4" />
            <span>marketing@tmtquickservice.com</span>
          </a>
        </div>

        {/* Right: Phone and WhatsApp numbers */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-1 md:space-y-0">
          <a
            href="tel:+6562521461"
            className="flex items-center space-x-1 hover:text-[#D1FAE5]"
          >
            <Phone className="w-4 h-4" />
            <span>+(65) 62521461</span>
          </a>
          <a
            href="https://wa.me/6587865630"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-[#D1FAE5]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>+65 87865630 </span>
          </a>
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex text-[11px] sm:text-sm justify-between px-6 py-2.5 md:hidden">
        <div className="space-y-0.5">
          <a
            href="mailto:tmtquickservice@yahoo.com.sg"
            className="flex items-center space-x-1 hover:text-[#D1FAE5]"
          >
            <Mail className="w-4 h-4" />
            <span>tmtquickservice@yahoo.com.sg</span>
          </a>
          <hr className="text-gray-300" />
          <a
            href="mailto:marketing@tmtquickservice.com"
            className="flex items-center space-x-1 hover:text-[#D1FAE5]"
          >
            <Mail className="w-4 h-4" />
            <span>marketing@tmtquickservice.com</span>
          </a>
        </div>

        <div className="space-y-0.5">
          <a
            href="tel:+6562521461"
            className="flex items-center space-x-1 hover:text-[#D1FAE5]"
          >
            <Phone className="w-4 h-4" />
            <span>+(65) 62521461</span>
          </a>
          <hr className="text-gray-300" />
          <a
            href="https://wa.me/6587865630"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-[#D1FAE5]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>+65 87865630 </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
