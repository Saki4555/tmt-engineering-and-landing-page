import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-white/10 text-center py-6 text-white ">
      <p className="opacity-60">
        © {new Date().getFullYear()} TMT Group of Companies. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;