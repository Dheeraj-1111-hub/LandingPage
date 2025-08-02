import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "../../assets/di-logo.png";

const WizardingHeader = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20 px-6 py-6 sm:px-10 md:px-20">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <img src={logo} alt="DI Club Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-2xl font-extrabold tracking-widest text-white">D.I</h1>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-purple-400 transition font-semibold text-xl">About</a>
          <a href="#events" className="hover:text-purple-400 transition font-semibold text-xl">Events</a>
          <a href="#contact" className="hover:text-purple-400 transition font-semibold text-xl">Contact</a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-3xl"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        <button className="hidden md:block bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition cursor-pointer">
          Sign In
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-lg p-4 space-y-4 text-lg font-semibold transition-all duration-300">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-purple-400">About</a>
          <a href="#events" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-purple-400">Events</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-purple-400">Contact</a>
          <button className="w-full mt-4 bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default WizardingHeader;
