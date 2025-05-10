import React, { useState } from 'react';
import { Brain, Flag, MapPin } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { QuizConfig, QuizType, Difficulty, QuestionCount } from '../../pages/Quiz';

interface QuizSetupProps {
  onStartQuiz: (config: QuizConfig) => void;
}

const QuizSetup: React.FC<QuizSetupProps> = ({ onStartQuiz }) => {
  const [quizType, setQuizType] = useState<QuizType>('flags');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [questionCount, setQuestionCount] = useState<QuestionCount>(5);

  const handleStartQuiz = () => {
    onStartQuiz({
      type: quizType,
      difficulty,
      questionCount,
    });
  };

  const getDifficultyColor = (level: Difficulty) => {
    switch (level) {
      case 'easy':
        return 'border-green-600 bg-green-50 text-green-600';
      case 'medium':
        return 'border-yellow-600 bg-yellow-50 text-yellow-600';
      case 'hard':
        return 'border-red-600 bg-red-50 text-red-600';
      default:
        return '';
    }
  };

  return (
    <>
      <SectionTitle
        title="Welcome to the Quiz!"
        subtitle="Test your knowledge on Flags and Capitals"
        centered={true}
      />

      <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
        <div className="space-y-8">
          {/* Quiz Type Selection */}
          <div>
            <label className="text-lg font-semibold mb-4 block">
              Select Quiz Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  quizType === 'flags'
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setQuizType('flags')}
              >
                <Flag className="h-5 w-5" />
                <span>Flags</span>
              </button>
              <button
                className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  quizType === 'capitals'
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setQuizType('capitals')}
              >
                <MapPin className="h-5 w-5" />
                <span>Capitals</span>
              </button>
            </div>
          </div>

          {/* Difficulty Selection */}
          <div>
            <label className="text-lg font-semibold mb-4 block">
              Select Difficulty
            </label>
            <div className="grid grid-cols-3 gap-4">
              {(['easy', 'medium', 'hard'] as const).map((level) => (
                <button
                  key={level}
                  className={`p-3 rounded-xl border-2 capitalize transition-all ${
                    difficulty === level
                      ? getDifficultyColor(level)
                      : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setDifficulty(level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Question Count Selection */}
          <div>
            <label className="text-lg font-semibold mb-4 block">
              Number of Questions
            </label>
            <div className="grid grid-cols-3 gap-4">
              {([5, 10, 15] as const).map((count) => (
                <button
                  key={count}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    questionCount === count
                      ? 'border-purple-600 bg-purple-50 text-purple-600'
                      : 'border-gray-200 hover:border-purple-600 hover:bg-purple-50'
                  }`}
                  onClick={() => setQuestionCount(count)}
                >
                  {count} Questions
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={handleStartQuiz}
            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
          >
            <Brain className="h-5 w-5" />
            Start Quiz
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizSetup;