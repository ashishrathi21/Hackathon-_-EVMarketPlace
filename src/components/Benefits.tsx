import React from 'react';
import { DollarSign, Leaf, Wrench, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Save Money',
      description: 'Up to 60% savings compared to new EVs',
      features: ['Lower insurance costs', 'Reduced depreciation', 'Government incentives'],
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    {
      icon: Leaf,
      title: 'Environmental Impact',
      description: 'Reduce your carbon footprint significantly',
      features: ['Zero emissions driving', 'Sustainable transport', 'Circular economy'],
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-500'
    },
    {
      icon: Wrench,
      title: 'Lower Maintenance',
      description: 'EVs require 40% less maintenance',
      features: ['No oil changes', 'Fewer moving parts', 'Longer brake life'],
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      icon: Clock,
      title: 'Convenience',
      description: 'Charge at home, drive anywhere',
      features: ['Home charging', 'Instant acceleration', 'Quiet operation'],
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits of Choosing Used EVs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Electric vehicles offer incredible advantages, and buying pre-owned makes them 
            even more accessible and affordable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-start space-x-6">
                <div className={`p-3 bg-white rounded-lg ${benefit.iconColor}`}>
                  <benefit.icon className="h-8 w-8" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-lg">
                    {benefit.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Make the Switch to Electric?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of satisfied customers who've found their perfect EV through our platform.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Browse Available EVs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;