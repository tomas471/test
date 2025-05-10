import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const CountriesSection: React.FC = () => {
  const countries = [
    {
      name: 'Japan',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      facts: ['Home to Mount Fuji', 'Known for sushi and anime', 'Has 6,852 islands'],
    },
    {
      name: 'Brazil',
      image: 'https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      facts: ['Home to the Amazon Rainforest', 'Famous for Carnival', 'World\'s 5th largest country'],
    },
    {
      name: 'Egypt',
      image: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      facts: ['Home to the Great Pyramids', '7,000 years of history', 'River Nile runs through it'],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Discover Countries"
          subtitle="Explore fascinating facts about countries around the world"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {country.name}
                </h3>
              </div>
              <div className="p-5 bg-white">
                <ul className="space-y-2">
                  {country.facts.map((fact, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/education"
                  className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800"
                >
                  Learn more
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;