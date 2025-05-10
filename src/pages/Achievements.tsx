import React from 'react';
import { ArrowLeft, Trophy } from 'lucide-react';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';

const achievements = [
  {
    id: 1,
    title: 'World Explorer',
    description: 'Visit 50 different country pages',
    icon: '🌎',
    progress: 35,
    total: 50,
    unlocked: false,
  },
  {
    id: 2,
    title: 'Quiz Master',
    description: 'Score 100% on 10 different quizzes',
    icon: '🎯',
    progress: 7,
    total: 10,
    unlocked: false,
  },
  {
    id: 3,
    title: 'Culture Enthusiast',
    description: 'Share 5 cultural posts',
    icon: '🎭',
    progress: 5,
    total: 5,
    unlocked: true,
  },
  {
    id: 4,
    title: 'Geography Genius',
    description: 'Win 20 geography games',
    icon: '🧠',
    progress: 15,
    total: 20,
    unlocked: false,
  },
  {
    id: 5,
    title: 'Community Leader',
    description: 'Receive 100 likes on your posts',
    icon: '👥',
    progress: 89,
    total: 100,
    unlocked: false,
  },
  {
    id: 6,
    title: 'Flag Master',
    description: 'Identify 200 country flags correctly',
    icon: '🎌',
    progress: 200,
    total: 200,
    unlocked: true,
  },
];

const Achievements: React.FC = () => {
  return (
    <>
      <Hero
        title="Achievements"
        subtitle="Track your progress and unlock new milestones"
        imageSrc="https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`bg-white rounded-xl p-6 shadow-lg ${
                achievement.unlocked
                  ? 'border-2 border-green-500'
                  : 'border border-gray-200'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 mb-4">{achievement.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>
                        {achievement.progress}/{achievement.total}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          achievement.unlocked
                            ? 'bg-green-500'
                            : 'bg-blue-600'
                        }`}
                        style={{
                          width: `${(achievement.progress / achievement.total) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievements;