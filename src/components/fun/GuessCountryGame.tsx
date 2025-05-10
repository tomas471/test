import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Brain, RefreshCw, Trophy } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  region: string;
  subregion: string;
  car: {
    side: string;
  };
  timezones: string[];
  borders: string[];
  languages: Record<string, string>;
  currencies: Record<string, { name: string; symbol: string }>;
  population: number;
  capital: string[];
}

const GuessCountryGame: React.FC = () => {
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [userInput, setUserInput] = useState('');
  const [currentClueIndex, setCurrentClueIndex] = useState(0);
  const [score, setScore] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const { data: countries } = useQuery<Country[]>({
    queryKey: ['countries'],
    queryFn: async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) throw new Error('Failed to fetch countries');
      return response.json();
    },
  });

  const getRandomCountry = () => {
    if (!countries) return;
    const randomIndex = Math.floor(Math.random() * countries.length);
    setCurrentCountry(countries[randomIndex]);
    setCurrentClueIndex(0);
    setScore(10);
    setGameOver(false);
    setWon(false);
    setUserInput('');
  };

  useEffect(() => {
    if (countries) {
      getRandomCountry();
    }
  }, [countries]);

  const getClue = (index: number) => {
    if (!currentCountry) return '';

    switch (index) {
      case 0:
        return `This country is located in ${currentCountry.region}`;
      case 1:
        return currentCountry.subregion
          ? `It's in the subregion of ${currentCountry.subregion}`
          : 'No subregion information available';
      case 2:
        return `People drive on the ${currentCountry.car.side} side of the road`;
      case 3:
        return `Timezone(s): ${currentCountry.timezones.join(', ')}`;
      case 4:
        return currentCountry.borders?.length
          ? `It borders: ${currentCountry.borders.join(', ')}`
          : 'This country has no land borders';
      case 5:
        return `Languages spoken: ${Object.values(currentCountry.languages || {}).join(', ')}`;
      case 6:
        const currencies = Object.values(currentCountry.currencies || {})
          .map(curr => `${curr.name} (${curr.symbol})`)
          .join(', ');
        return `Currency: ${currencies}`;
      case 7:
        return `Population: ${currentCountry.population.toLocaleString()}`;
      case 8:
        return `Capital city: ${currentCountry.capital?.[0]}`;
      case 9:
        return 'Here is the country flag:';
      default:
        return '';
    }
  };

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCountry || gameOver) return;

    const isCorrect = userInput.toLowerCase() === currentCountry.name.common.toLowerCase();

    if (isCorrect) {
      setWon(true);
      setGameOver(true);
    } else {
      if (currentClueIndex < 9) {
        setCurrentClueIndex(currentClueIndex + 1);
        setScore(Math.max(0, score - 1));
      } else {
        setGameOver(true);
        setScore(0);
      }
    }
    setUserInput('');
  };

  if (!currentCountry) return null;

  return (
    <>
      <SectionTitle
        title="Guess the Country"
        subtitle="Test your geography knowledge with progressive clues"
        centered={true}
      />

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold">Score: {score}/10</span>
            <button
              onClick={getRandomCountry}
              className="text-blue-600 hover:text-blue-800"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4 mb-8">
            {Array.from({ length: currentClueIndex + 1 }).map((_, index) => (
              <div
                key={index}
                className="p-4 bg-blue-50 rounded-lg animate-fade-in"
              >
                <p className="text-gray-700">{getClue(index)}</p>
                {index === 9 && (
                  <img
                    src={currentCountry.flags.png}
                    alt="Country Flag"
                    className="w-full h-48 object-contain mt-4 rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>

          {!gameOver ? (
            <form onSubmit={handleGuess} className="space-y-4">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Enter country name..."
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                autoFocus
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit Guess
              </button>
            </form>
          ) : (
            <div className="text-center">
              {won ? (
                <div className="mb-6">
                  <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    Congratulations!
                  </h3>
                  <p className="text-gray-600">
                    You correctly guessed {currentCountry.name.common} with{' '}
                    {score} points!
                  </p>
                </div>
              ) : (
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-red-600 mb-2">
                    Game Over
                  </h3>
                  <p className="text-gray-600">
                    The country was: {currentCountry.name.common}
                  </p>
                </div>
              )}
              <button
                onClick={getRandomCountry}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GuessCountryGame;