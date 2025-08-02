import React from "react";
import { MdLeaderboard } from "react-icons/md";

const HeroSection = () => {
  return (
    <main className="relative z-10 px-6 sm:px-10 md:px-20 py-12 md:py-24 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-sm uppercase tracking-wider text-purple-400">
              Design & Innovation Club Presents
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span>The Wizarding</span>
              <span className="text-purple-500 block">Tournament of Innovation</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Embark on a journey where creativity meets magic. Join houses, take on enchanting challenges, and win the Innovation Cup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2 cursor-pointer">
              <MdLeaderboard />
              Leaderboard
            </button>
            <button className="border border-gray-600 hover:border-purple-400 px-6 py-3 rounded-md transition-all duration-300 text-gray-300 hover:text-white cursor-pointer">
              Register Now
            </button>
          </div>
        </div>

        {/* Hide image on mobile */}
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1547756536-cde3673fa2e5?auto=format&fit=crop&w=1080&q=80"
            alt="Wizarding Poster"
            className="rounded-xl shadow-xl object-cover h-[500px] w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent rounded-xl" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
