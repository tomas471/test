import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Check, X, RefreshCw, Trophy } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  area: number;
}

const AreaGame: React.FC = () => {
  const [countries, setCountries] = useState<[Country, Country] | null>(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const { data: allCountries } = useQuery<Country[]>({
    queryKey: ['countries'],
    queryFn: async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) throw new Error('Failed to fetch countries');
      return response.json();
    },
  });

  const getRandomCountries = () => {
    if (!allCountries) return;
    const shuffled = [...allCountries].sort(() => Math.random() - 0.5);
    setCountries([shuffled[0], shuffled[1]]);
    setFeedback(null);
  };

  useEffect(() => {
    if (allCountries) {
      getRandomCountries();
    }
  }, [allCountries]);

  const handleGuess = (index: 0 | 1) => {
    if (!countries) return;

    const isCorrect = countries[index].area >= countries[index === 0 ? 1 : 0].area;
    setFeedback(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
      setScore(score + 1);
      setTimeout(() => {
        if (score + 1 >= 10) {
          setGameOver(true);
        } else {
          getRandomCountries();
        }
      }, 1500);
    }
  };

  const restartGame = () => {
    setScore(0);
    setGameOver(false);
    getRandomCountries();
  };

  if (!countries) return null;

  if (gameOver) {
    return (
      <div className="text-center">
        <div className="mb-8">
          <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Congratulations!</h2>
          <p className="text-xl text-gray-600">
            You've completed the area challenge!
          </p>
          <p className="text-2xl font-bold text-purple-600 mt-4">
            Final Score: {score}
          </p>
        </div>
        <button
          onClick={restartGame}
          className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <>
      <SectionTitle
        title="Area Challenge"
        subtitle="Which country has a larger area?"
        centered={true}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold">Score: {score}/10</span>
            <button
              onClick={getRandomCountries}
              className="text-purple-600 hover:text-purple-800"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {countries.map((country, index) => (
              <button
                key={country.name.common}
                onClick={() => handleGuess(index as 0 | 1)}
                className="bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-purple-500 transition-colors"
                disabled={feedback !== null}
              >
                <img
                  src={country.flags.png}
                  alt={`${country.name.common} flag`}
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{country.name.common}</h3>
                {feedback !== null && (
                  <p className="text-lg font-semibold">
                    Area: {country.area.toLocaleString()} km²
                  </p>
                )}
              </button>
            ))}
          </div>

          {feedback && (
            <div
              className={`mt-6 p-4 rounded-lg flex items-center justify-center gap-2 ${
                feedback === 'correct'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {feedback === 'correct' ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Correct!</span>
                </>
              ) : (
                <>
                  <X className="w-5 h-5" />
                  <span>Incorrect!</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AreaGame;