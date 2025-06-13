import React from 'react';
import { Search, FileCheck, Car, HandHeart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Search & Filter',
      description: 'Browse our extensive collection of verified electric vehicles using smart filters.',
      details: ['Filter by price, range, brand', 'View detailed specifications', 'Compare multiple vehicles']
    },
    {
      icon: FileCheck,
      title: 'Verify & Inspect',
      description: 'Get comprehensive vehicle reports and schedule professional inspections.',
      details: ['Battery health reports', 'Complete vehicle history', 'Professional inspection']
    },
    {
      icon: Car,
      title: 'Test Drive',
      description: 'Experience your chosen EV with a comprehensive test drive and evaluation.',
      details: ['Schedule convenient times', 'Expert guidance provided', 'Performance evaluation']
    },
    {
      icon: HandHeart,
      title: 'Secure Purchase',
      description: 'Complete your purchase with confidence using our secure payment system.',
      details: ['Protected transactions', 'Warranty coverage', 'Flexible financing options']
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How EVGO Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes finding and purchasing your perfect electric vehicle 
            simple, secure, and stress-free.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-teal-200 to-blue-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="relative mb-8">
                  <div className="inline-flex p-6 bg-white rounded-full shadow-lg border-4 border-gray-100 group-hover:border-green-200 transition-all duration-300 transform group-hover:scale-110">
                    <step.icon className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-gray-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
            Start Your EV Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;