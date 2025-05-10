import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';

const badges = [
  {
    id: 1,
    title: 'Early Explorer',
    description: 'One of the first 1000 users to join GoeJungle',
    icon: '🌟',
    unlocked: true,
    date: '2024-01-15',
  },
  {
    id: 2,
    title: 'Culture Champion',
    description: 'Shared content about 10 different cultures',
    icon: '🏆',
    unlocked: true,
    date: '2024-02-20',
  },
  {
    id: 3,
    title: 'Quiz Legend',
    description: 'Achieved perfect scores in 5 consecutive quizzes',
    icon: '👑',
    unlocked: false,
  },
  {
    id: 4,
    title: 'Global Citizen',
    description: 'Explored information about every continent',
    icon: '🌍',
    unlocked: true,
    date: '2024-03-01',
  },
  {
    id: 5,
    title: 'Knowledge Seeker',
    description: 'Spent 50 hours learning on GoeJungle',
    icon: '📚',
    unlocked: false,
  },
  {
    id: 6,
    title: 'Community Favorite',
    description: 'Received 1000 total likes on contributions',
    icon: '❤️',
    unlocked: false,
  },
];

const Badges: React.FC = () => {
  return (
    <>
      <Hero
        title="My Badges"
        subtitle="Showcase your achievements and milestones"
        imageSrc="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <a
            href="/account"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Account
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`bg-white rounded-xl p-6 shadow-lg ${
                badge.unlocked
                  ? 'border-2 border-yellow-500'
                  : 'border border-gray-200 opacity-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{badge.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{badge.title}</h3>
                  <p className="text-gray-600 mb-2">{badge.description}</p>
                  {badge.unlocked && badge.date && (
                    <p className="text-sm text-gray-500">
                      Earned on {new Date(badge.date).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Badges;