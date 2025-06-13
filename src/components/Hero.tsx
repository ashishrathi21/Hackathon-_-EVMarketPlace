import React from "react";
import { ArrowRight } from "lucide-react";
import { Car } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-16 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              🚗 Sustainable Transportation Revolution
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">
              Pre-Owned EV
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the electric revolution with confidence. Discover verified,
            high-quality second-hand electric vehicles that combine
            sustainability with affordability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="group bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 flex items-center">
               <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf-P3OU9UJC9YL05SbKY9IA2lEkYpFRKBbToaGeW3nJy4PXAQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                register your EV
              </a>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button className="group flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200">
              <div className="p-3 bg-white rounded-full shadow-lg mr-3 group-hover:shadow-xl transition-shadow duration-200">
                <Car className="h-6 w-6 text-green-500" />
              </div>
               Browse EV's now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">
                10,000+
              </div>
              <div className="text-gray-600">Verified EVs</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-teal-600 mb-2">500k+</div>
              <div className="text-gray-600">CO₂ Tons Saved</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
