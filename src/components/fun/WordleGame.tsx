import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RefreshCw, Trophy } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { countries } from '../../data/countries';

interface GuessResult {
  word: string;
  result: ('correct' | 'present' | 'absent')[];
}

const WordleGame: React.FC = () => {
  const [targetCountry, setTargetCountry] = useState('');
  const [guesses, setGuesses] = useState<GuessResult[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [error, setError] = useState('');

  const startNewGame = () => {
    const filteredCountries = countries.filter(c => c.difficulty === difficulty);
    const randomCountry = filteredCountries[Math.floor(Math.random() * filteredCountries.length)];
    setTargetCountry(randomCountry.country.toUpperCase());
    setGuesses([]);
    setCurrentGuess('');
    setGameOver(false);
    setWon(false);
    setError('');
  };

  useEffect(() => {
    startNewGame();
  }, [difficulty]);

  const checkGuess = (guess: string): ('correct' | 'present' | 'absent')[] => {
    const result: ('correct' | 'present' | 'absent')[] = [];
    const targetChars = targetCountry.split('');
    const guessChars = guess.split('');

    // First pass: mark correct letters
    guessChars.forEach((char, i) => {
      if (char === targetChars[i]) {
        result[i] = 'correct';
        targetChars[i] = '*';
      }
    });

    // Second pass: mark present and absent letters
    guessChars.forEach((char, i) => {
      if (result[i]) return;

      const targetIndex = targetChars.indexOf(char);
      if (targetIndex !== -1) {
        result[i] = 'present';
        targetChars[targetIndex] = '*';
      } else {
        result[i] = 'absent';
      }
    });

    return result;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentGuess.length !== targetCountry.length) {
      setError(`Guess must be ${targetCountry.length} characters long`);
      return;
    }

    const validCountry = countries.some(
      c => c.country.toUpperCase() === currentGuess
    );

    if (!validCountry) {
      setError('Not a valid country name');
      return;
    }

    const result = checkGuess(currentGuess);
    const newGuesses = [...guesses, { word: currentGuess, result }];
    setGuesses(newGuesses);
    setCurrentGuess('');
    setError('');

    if (currentGuess === targetCountry) {
      setWon(true);
      setGameOver(true);
    } else if (newGuesses.length >= 6) {
      setGameOver(true);
    }
  };

  const getLetterStyle = (type: 'correct' | 'present' | 'absent') => {
    switch (type) {
      case 'correct':
        return 'bg-green-500 text-white';
      case 'present':
        return 'bg-yellow-500 text-white';
      case 'absent':
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <>
      <SectionTitle
        title="Country Wordle"
        subtitle="Guess the country name in 6 tries"
        centered={true}
      />

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="space-x-2">
              {['easy', 'medium', 'hard'].map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level as 'easy' | 'medium' | 'hard')}
                  className={`px-4 py-2 rounded-full ${
                    difficulty === level
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
            <button
              onClick={startNewGame}
              className="text-blue-600 hover:text-blue-800"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-2 mb-6">
            {guesses.map((guess, i) => (
              <div key={i} className="flex justify-center gap-1">
                {guess.word.split('').map((letter, j) => (
                  <div
                    key={j}
                    className={`w-12 h-12 flex items-center justify-center font-bold text-lg rounded ${getLetterStyle(
                      guess.result[j]
                    )}`}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            ))}
            {!gameOver &&
              Array.from({ length: 6 - guesses.length }).map((_, i) => (
                <div key={i} className="flex justify-center gap-1">
                  {Array.from({ length: targetCountry.length }).map((_, j) => (
                    <div
                      key={j}
                      className="w-12 h-12 border-2 border-gray-300 rounded"
                    />
                  ))}
                </div>
              ))}
          </div>

          {!gameOver ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={currentGuess}
                onChange={(e) =>
                  setCurrentGuess(e.target.value.toUpperCase())
                }
                maxLength={targetCountry.length}
                placeholder={`Enter a ${targetCountry.length}-letter country name`}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 uppercase"
                autoFocus
              />
              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}
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
                    You correctly guessed {targetCountry} in {guesses.length}{' '}
                    tries!
                  </p>
                </div>
              ) : (
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-red-600 mb-2">
                    Game Over
                  </h3>
                  <p className="text-gray-600">
                    The country was: {targetCountry}
                  </p>
                </div>
              )}
              <button
                onClick={startNewGame}
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

export default WordleGame;