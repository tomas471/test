import React from 'react';
import { Keyboard, Users, MapPin, Brain, Globe } from 'lucide-react';
import Hero from '../components/ui/Hero';

const Fun: React.FC = () => {
  return (
    <>
      <Hero
        title="Fun & Games"
        subtitle="Test your geography knowledge with our interactive games"
        imageSrc="https://images.pexels.com/photos/4019766/pexels-photo-4019766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <a
            href="/games/spelling"
            className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Keyboard className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600 group-hover:text-blue-700">
              Spelling Challenge
            </h3>
            <p className="text-gray-600">
              Test your knowledge of country names with our spelling game!
            </p>
          </a>

          <a
            href="/games/population"
            className="group bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-green-600 group-hover:text-green-700">
              Population Compare
            </h3>
            <p className="text-gray-600">
              Guess which country has the larger population!
            </p>
          </a>

          <a
            href="/games/area"
            className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-purple-600 group-hover:text-purple-700">
              Area Compare
            </h3>
            <p className="text-gray-600">
              Compare countries by their land area!
            </p>
          </a>

          <a
            href="/games/guess-country"
            className="group bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="bg-yellow-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-600 group-hover:text-yellow-700">
              Guess the Country
            </h3>
            <p className="text-gray-600">
              Test your knowledge with progressive clues!
            </p>
          </a>

          <a
            href="/games/wordle"
            className="group bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="bg-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-pink-600 group-hover:text-pink-700">
              Country Wordle
            </h3>
            <p className="text-gray-600">
              Guess the country name in 6 tries!
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Fun;