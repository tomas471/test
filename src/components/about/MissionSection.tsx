import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Compass, GraduationCap, Users } from 'lucide-react';

const MissionSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <SectionTitle
              title="Our Mission"
              subtitle="Making global learning joyful, accessible, and community-powered"
            />
            <p className="text-gray-700 mb-6 leading-relaxed">
              At GoeJungle, we believe that learning about our world should be
              an exciting journey of discovery. Our mission is to create a
              vibrant community where anyone can explore countries, cultures,
              and geography through engaging, interactive content.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We're dedicated to breaking down geographical barriers and
              fostering global understanding. By combining education with fun
              and community participation, we aim to create an environment
              where users not only learn about other cultures but also share
              their own unique perspectives.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Compass className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Exploration</h4>
                  <p className="text-gray-600">
                    Encouraging curiosity and discovery about our diverse world
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-500 p-3 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Education</h4>
                  <p className="text-gray-600">
                    Providing engaging, accessible knowledge about geography
                    and cultures
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Community</h4>
                  <p className="text-gray-600">
                    Building connections through shared cultural knowledge and
                    experiences
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-600 rounded-full opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Global Learning"
                className="rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;