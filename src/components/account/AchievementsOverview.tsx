import React from 'react';
import { Trophy, Award } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const AchievementsOverview: React.FC = () => {
  const achievements = [
    {
      title: 'World Explorer',
      description: 'Visit 50 different country pages',
      progress: 35,
      total: 50,
      icon: '🌎',
    },
    {
      title: 'Quiz Master',
      description: 'Score 100% on 10 different quizzes',
      progress: 7,
      total: 10,
      icon: '🎯',
    },
    {
      title: 'Culture Enthusiast',
      description: 'Share 5 cultural posts',
      progress: 5,
      total: 5,
      icon: '🎭',
      completed: true,
    },
  ];

  const badges = [
    {
      title: 'Early Explorer',
      description: 'One of the first 1000 users',
      icon: '🌟',
      date: '2024-01-15',
    },
    {
      title: 'Culture Champion',
      description: '10 different cultures shared',
      icon: '🏆',
      date: '2024-02-20',
    },
    {
      title: 'Global Citizen',
      description: 'Explored all continents',
      icon: '🌍',
      date: '2024-03-01',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="flex justify-between items-center mb-6">
          <SectionTitle title="Recent Achievements" />
          <a
            href="/achievements"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Trophy className="w-5 h-5" />
            See All Achievements
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {achievement.description}
                  </p>
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
                          achievement.completed
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

      <div>
        <div className="flex justify-between items-center mb-6">
          <SectionTitle title="Recent Badges" />
          <a
            href="/badges"
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors flex items-center gap-2"
          >
            <Award className="w-5 h-5" />
            See All Badges
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{badge.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{badge.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {badge.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    Earned on {new Date(badge.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsOverview;