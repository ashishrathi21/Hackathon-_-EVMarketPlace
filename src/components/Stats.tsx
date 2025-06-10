import React from 'react';
import { TrendingUp, Leaf, Car, Users } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Car,
      value: '15,000+',
      label: 'EVs Listed',
      description: 'Active vehicle listings',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      value: '50,000+',
      label: 'Happy Users',
      description: 'Trusted community members',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      value: '$2.5B+',
      label: 'Transactions',
      description: 'Processed safely',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Leaf,
      value: '1M+',
      label: 'Tons CO₂',
      description: 'Environmental impact saved',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Driving Change Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform is making a real impact on sustainable transportation and the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stat.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              
              <div className="text-xl font-semibold text-gray-300 mb-2">
                {stat.label}
              </div>
              
              <div className="text-gray-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;