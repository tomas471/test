import React from 'react';
import { Link } from '../utils/Link';
import { Globe, Map, BookOpen, MessageSquare, Lightbulb, ArrowRight } from 'lucide-react';
import Hero from '../components/ui/Hero';

interface CommunitySection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  path: string;
}

const communitySections: CommunitySection[] = [
  {
    id: 'geoculture',
    title: 'GeoCulture',
    description: 'Share food, traditions, holidays, and cultural practices from around the world.',
    icon: <Globe className="w-8 h-8" />,
    color: 'from-blue-500 to-indigo-600',
    gradient: 'bg-gradient-to-br from-blue-500/10 to-indigo-600/10',
    path: '/myculture',
  },
  {
    id: 'goejourney',
    title: 'GoeJourney',
    description: 'Read and share personal travel stories and cultural experiences.',
    icon: <Map className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-600',
    gradient: 'bg-gradient-to-br from-green-500/10 to-emerald-600/10',
    path: '/community/goejourney',
  },
  {
    id: 'geofacts',
    title: 'GeoFacts',
    description: 'Fun, surprising, and educational facts about countries and cultures.',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-600',
    gradient: 'bg-gradient-to-br from-purple-500/10 to-pink-600/10',
    path: '/community/geofacts',
  },
  {
    id: 'geodebate',
    title: 'GeoDebate',
    description: 'Participate in friendly global discussions and cultural opinions.',
    icon: <MessageSquare className="w-8 h-8" />,
    color: 'from-orange-500 to-red-600',
    gradient: 'bg-gradient-to-br from-orange-500/10 to-red-600/10',
    path: '/community/geodebate',
  },
  {
    id: 'geotips',
    title: 'GeoTips',
    description: 'Helpful travel tips and local advice shared by travelers and locals.',
    icon: <Lightbulb className="w-8 h-8" />,
    color: 'from-yellow-500 to-amber-600',
    gradient: 'bg-gradient-to-br from-yellow-500/10 to-amber-600/10',
    path: '/community/geotips',
  },
];

const GoeCommunity: React.FC = () => {
  return (
    <>
      <Hero
        title="GoeCommunity"
        subtitle="Join our global community and share your cultural experiences"
        imageSrc="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Our Communities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our vibrant communities to share, learn, and connect with people from around the world.
            Each community offers unique opportunities to explore and celebrate global cultures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communitySections.map((section) => (
            <div
              key={section.id}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${section.gradient}`}
            >
              <div className="p-6">
                <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${section.color} text-white mb-4`}>
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {section.description}
                </p>
                <Link
                  to={section.path}
                  className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${section.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                >
                  Explore {section.title}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Create an account to start sharing your cultural experiences, connect with others,
            and explore the rich diversity of our global community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up Now
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoeCommunity; 