import React from 'react';
import { Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Section */}
          <div className="mb-12">
            <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/logo.jpg"
                  alt="logo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2 font-outfit">@gtech_dsa</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6 font-outfit">
              Learn 30 DSA questions on Arrays & Strings with patterns, Leetcode links, and company tags to crack your dream placement!
            </p>
            <a
              href="https://instagram.com/gtech_dsa"
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              <Instagram size={20} />
              Follow on Instagram
            </a>
          </div>

          {/* Hero Headlines */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              
              <h1 className="text-5xl md:text-6xl font-bold font-poppins">
                Master 30 DSA Questions in 15 Days
              </h1>
            
            </div>
            <div className="flex items-center justify-center gap-3">
             
              <p className="text-2xl md:text-3xl font-semibold text-white/90">
                Build Patterns. Crack Placements.
              </p>
              
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="font-poppins text-3xl font-bold mb-2">30</div>
              <div className="text-white/80">Handpicked Questions</div>
            </div>
            <div className="text-center">
              <div className="font-poppins text-3xl font-bold mb-2">15</div>
              <div className="text-white/80">Structured Days</div>
            </div>
            <div className="text-center">
              <div className="font-poppins text-3xl font-bold mb-2">10+</div>
              <div className="text-white/80">Core Patterns</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 