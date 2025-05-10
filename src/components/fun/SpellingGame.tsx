import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RefreshCw, Brain } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { countries } from '../../data/countries';

const SpellingGame: React.FC = () => {
  const [currentCountry, setCurrentCountry] = useState<any | null>(null);
  const [userInput, setUserInput] = useState('');
  const [attempts, setAttempts] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const getRandomCountry = () => {
    const filteredCountries = countries.filter(c => c.difficulty === difficulty);
    const randomIndex = Math.floor(Math.random() * filteredCountries.length);
    setCurrentCountry(filteredCountries[randomIndex]);
    setGuessedLetters([]);
    setAttempts(6);
    setGameOver(false);
    setWon(false);
  };

  useEffect(() => {
    getRandomCountry();
  }, [difficulty]);

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCountry || gameOver) return;

    const letter = userInput.toLowerCase();
    if (letter && !guessedLetters.includes(letter)) {
      const newGuessedLetters = [...guessedLetters, letter];
      setGuessedLetters(newGuessedLetters);
      
      if (!currentCountry.country.toLowerCase().includes(letter)) {
        const newAttempts = attempts - 1;
        setAttempts(newAttempts);
        
        if (newAttempts === 0) {
          setGameOver(true);
        }
      } else {
        // Check if word is complete
        const isComplete = currentCountry.country.toLowerCase().split('').every(
          char => newGuessedLetters.includes(char.toLowerCase()) || char === ' '
        );
        if (isComplete) {
          setWon(true);
          setGameOver(true);
        }
      }
    }
    setUserInput('');
  };

  const displayWord = () => {
    if (!currentCountry) return '';
    return currentCountry.country.split('').map((letter: string) => {
      if (guessedLetters.includes(letter.toLowerCase()) || letter === ' ') {
        return letter;
      }
      return '_';
    }).join(' ');
  };

  if (!currentCountry) return null;

  return (
    <>
      <SectionTitle
        title="Spelling Challenge"
        subtitle="Guess the country name - You have 6 attempts!"
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
              onClick={getRandomCountry}
              className="text-blue-600 hover:text-blue-800"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>

          <div className="mb-8">
            {currentCountry?.flags?.png && (
              <img
                src={currentCountry.flags.png}
                alt="Country Flag"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            )}
          </div>

          <div className="text-center mb-8">
            <p className="text-2xl font-mono tracking-wider">{displayWord()}</p>
            <p className="mt-4 text-gray-600">Attempts remaining: {attempts}</p>
          </div>

          {!gameOver && (
            <form onSubmit={handleGuess} className="space-y-4">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                maxLength={1}
                placeholder="Type a letter..."
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                autoFocus
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Guess Letter
              </button>
            </form>
          )}

          {gameOver && (
            <div className="text-center">
              {won ? (
                <div className="text-green-600 mb-4">
                  <h3 className="text-xl font-bold">Congratulations!</h3>
                  <p>You correctly guessed: {currentCountry.country}</p>
                </div>
              ) : (
                <div className="text-red-600 mb-4">
                  <h3 className="text-xl font-bold">Game Over</h3>
                  <p>The country was: {currentCountry.country}</p>
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

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-600 mb-2">Guessed Letters:</h4>
            <div className="flex flex-wrap gap-2">
              {guessedLetters.map((letter, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${
                    currentCountry.country.toLowerCase().includes(letter)
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpellingGame;