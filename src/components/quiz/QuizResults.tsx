import React from 'react';
import { RefreshCw, Check, X, Trophy, Target, Award } from 'lucide-react';
import { QuizAnswer } from '../../pages/Quiz';
import SectionTitle from '../ui/SectionTitle';

interface QuizResultsProps {
  answers: QuizAnswer[];
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ answers, onRestart }) => {
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const score = Math.round((correctAnswers / answers.length) * 100);

  const getScoreColor = () => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = () => {
    if (score >= 80) return Trophy;
    if (score >= 60) return Target;
    return Award;
  };

  const ScoreIcon = getScoreIcon();

  return (
    <>
      <SectionTitle
        title="Quiz Results"
        subtitle={`You scored ${score}% (${correctAnswers} out of ${answers.length})`}
        centered={true}
      />

      <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
        {/* Score Display */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${
            score >= 80 ? 'bg-green-100' : score >= 60 ? 'bg-yellow-100' : 'bg-red-100'
          } mb-4`}>
            <ScoreIcon className={`w-12 h-12 ${getScoreColor()}`} />
          </div>
          <h2 className={`text-4xl font-bold ${getScoreColor()}`}>{score}%</h2>
          <p className="text-gray-600 mt-2">
            {score >= 80 ? 'Excellent!' : score >= 60 ? 'Good job!' : 'Keep practicing!'}
          </p>
        </div>

        <div className="space-y-6">
          {answers.map((answer, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                answer.isCorrect ? 'bg-green-50 border-2 border-green-100' : 'bg-red-50 border-2 border-red-100'
              }`}
            >
              <div className="flex items-start gap-4">
                {answer.question.startsWith('http') ? (
                  <img
                    src={answer.question}
                    alt="Flag"
                    className="w-20 h-auto rounded-lg shadow-sm"
                  />
                ) : (
                  <div className="text-lg font-semibold">{answer.question}</div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {answer.isCorrect ? (
                      <div className="bg-green-200 p-2 rounded-full">
                        <Check className="h-5 w-5 text-green-700" />
                      </div>
                    ) : (
                      <div className="bg-red-200 p-2 rounded-full">
                        <X className="h-5 w-5 text-red-700" />
                      </div>
                    )}
                    <span
                      className={`font-semibold ${
                        answer.isCorrect ? 'text-green-700' : 'text-red-700'
                      }`}
                    >
                      {answer.isCorrect ? 'Correct!' : 'Incorrect'}
                    </span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <p className="font-medium">
                      <span className="text-gray-600">Correct answer:</span>{' '}
                      <span className="text-green-700">{answer.correctAnswer}</span>
                    </p>
                    {!answer.isCorrect && (
                      <p className="font-medium">
                        <span className="text-gray-600">Your answer:</span>{' '}
                        <span className="text-red-700">{answer.userAnswer || 'Skipped'}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={onRestart}
            className="w-full mt-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
          >
            <RefreshCw className="h-5 w-5" />
            Try Again
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizResults;