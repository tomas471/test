import React from 'react';
import { Trophy, Clock, Calendar } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const GameScores: React.FC = () => {
  const games = [
    {
      name: 'Spelling Challenge',
      bestScore: '8/10',
      fastestTime: '1:45',
      lastPlayed: '2024-03-15',
      icon: '🎯',
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
    {
      name: 'Population Game',
      bestScore: '9/10',
      fastestTime: '2:30',
      lastPlayed: '2024-03-14',
      icon: '👥',
      color: 'bg-green-100',
      textColor: 'text-green-600',
    },
    {
      name: 'Area Game',
      bestScore: '7/10',
      fastestTime: '2:15',
      lastPlayed: '2024-03-13',
      icon: '🗺️',
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
    },
    {
      name: 'Guess Country',
      bestScore: '10/10',
      fastestTime: '3:00',
      lastPlayed: '2024-03-12',
      icon: '🌍',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600',
    },
    {
      name: 'Country Wordle',
      bestScore: '6/6',
      fastestTime: '4:20',
      lastPlayed: '2024-03-11',
      icon: '📝',
      color: 'bg-pink-100',
      textColor: 'text-pink-600',
    },
  ];

  return (
    <div>
      <SectionTitle title="Game Scores" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <div
            key={index}
            className={`${game.color} rounded-xl p-6 shadow-md hover:shadow-lg transition-all`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{game.icon}</div>
              <h3 className={`text-xl font-bold ${game.textColor}`}>
                {game.name}
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <Trophy className="w-5 h-5" />
                <span>Best Score: {game.bestScore}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-5 h-5" />
                <span>Fastest Time: {game.fastestTime}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-5 h-5" />
                <span>
                  Last Played: {new Date(game.lastPlayed).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameScores;