import React from "react";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdMail, MdCall, MdLocationOn } from "react-icons/md";
import logo from "../../assets/di-logo.png";

const WizardingFooter = () => {
  return (
    <footer className="relative z-10 bg-[#121212]/80 backdrop-blur-lg py-12 px-6 md:px-20 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src={logo} alt="DI Logo" className="w-10 h-10 rounded-full" />
            <h2 className="text-xl font-bold">Design & Innovation Club</h2>
          </div>
          <p className="text-gray-400">Creating magic through design and innovation.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <MdMail className="text-purple-500" />
              <a href="mailto:di-club@example.com" className="hover:text-purple-400">di-club@example.com</a>
            </li>
            <li className="flex items-center gap-2">
              <MdCall className="text-purple-500" />
              <a href="tel:+1234567890" className="hover:text-purple-400">123456789</a>
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-purple-500" />
              <span>SRM Institute of Science and Technology</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/diclub.srmvdp/" className="w-10 h-10 bg-gray-700 hover:bg-purple-700 rounded-full flex items-center justify-center transition">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-purple-700 rounded-full flex items-center justify-center transition">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/diclub-srmvdp/?originalSubdomain=in" className="w-10 h-10 bg-gray-700 hover:bg-purple-700 rounded-full flex items-center justify-center transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-500">
        <p>© 2025 Design & Innovation Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default WizardingFooter;
