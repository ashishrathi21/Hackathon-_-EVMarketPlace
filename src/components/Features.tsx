import React from 'react';
import { Shield, Search, Zap, Users, Award, MapPin } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Quality',
      description: 'Every vehicle undergoes comprehensive inspection and certification by our expert technicians.',
      color: 'text-green-500'
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find your ideal EV with advanced filters for range, price, brand, and location.',
      color: 'text-blue-500'
    },
    {
      icon: Zap,
      title: 'Battery Health',
      description: 'Detailed battery reports and performance metrics for complete transparency.',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      title: 'Trusted Community',
      description: 'Connect with verified sellers and buyers in our secure marketplace.',
      color: 'text-purple-500'
    },
    {
      icon: Award,
      title: 'Warranty Protection',
      description: 'Comprehensive warranty coverage and protection plans for peace of mind.',
      color: 'text-red-500'
    },
    {
      icon: MapPin,
      title: 'Nationwide Network',
      description: 'Access to EVs across the country with local pickup and delivery options.',
      color: 'text-teal-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose EVMarket?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing the second-hand EV market with innovative features 
            that make buying and selling electric vehicles simple, safe, and sustainable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gray-50 ${feature.color} mb-6 group-hover:bg-gray-100 transition-colors duration-200`}>
                <feature.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;