import React, { useState, useEffect } from 'react';
import { Timer, SkipForward } from 'lucide-react';
import { QuizConfig, QuizAnswer } from '../../pages/Quiz';
import { countries, Country } from '../../data/countries';

interface QuizGameProps {
  config: QuizConfig;
  onFinish: (answers: QuizAnswer[]) => void;
}

const QuizGame: React.FC<QuizGameProps> = ({ config, onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizQuestions, setQuizQuestions] = useState<Country[]>([]);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    const filteredCountries = countries
      .filter((country) => country.difficulty === config.difficulty)
      .sort(() => Math.random() - 0.5)
      .slice(0, config.questionCount);

    setQuizQuestions(filteredCountries);
    generateOptions(filteredCountries[0]);
  }, [config]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleAnswer(null);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  const generateOptions = (currentCountry: Country) => {
    const correctAnswer = config.type === 'flags' ? currentCountry.country : currentCountry.capital;
    const otherOptions = countries
      .filter((c) => c !== currentCountry)
      .map((c) => (config.type === 'flags' ? c.country : c.capital))
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    setOptions([...otherOptions, correctAnswer].sort(() => Math.random() - 0.5));
  };

  const handleAnswer = (selectedAnswer: string | null) => {
    const currentCountry = quizQuestions[currentQuestion];
    const correctAnswer = config.type === 'flags' ? currentCountry.country : currentCountry.capital;
    
    const answer: QuizAnswer = {
      question: config.type === 'flags' ? currentCountry.flag : currentCountry.country,
      correctAnswer,
      userAnswer: selectedAnswer,
      isCorrect: selectedAnswer === correctAnswer,
    };

    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < config.questionCount) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
      generateOptions(quizQuestions[currentQuestion + 1]);
    } else {
      onFinish(newAnswers);
    }
  };

  if (!quizQuestions.length) return null;

  const currentCountry = quizQuestions[currentQuestion];
  const question = config.type === 'flags' ? (
    <img src={currentCountry.flag} alt="Country Flag" className="w-64 h-auto mx-auto mb-8 rounded-lg shadow-md" />
  ) : (
    <h3 className="text-2xl font-bold mb-8 text-center">{currentCountry.country}</h3>
  );

  const getTimeLeftColor = () => {
    if (timeLeft > 20) return 'text-green-500';
    if (timeLeft > 10) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2 text-lg font-semibold bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
          <span>Question {currentQuestion + 1}</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{config.questionCount}</span>
        </div>
        <div className={`flex items-center gap-2 text-lg font-semibold ${getTimeLeftColor()} bg-gray-50 px-4 py-2 rounded-full`}>
          <Timer className="h-5 w-5" />
          <span>{timeLeft}s</span>
        </div>
      </div>

      {question}

      <div className="grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="p-4 text-lg rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105 hover:shadow-md"
          >
            {option}
          </button>
        ))}
      </div>

      <button
        onClick={() => handleAnswer(null)}
        className="mt-6 w-full p-3 text-gray-600 flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 transition-all"
      >
        <SkipForward className="h-5 w-5" />
        Skip Question
      </button>
    </div>
  );
};

export default QuizGame;