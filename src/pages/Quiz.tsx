import React, { useState } from 'react';
import { Brain, Flag, MapPin, Timer, SkipForward, RefreshCw, XCircle } from 'lucide-react';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import QuizSetup from '../components/quiz/QuizSetup';
import QuizGame from '../components/quiz/QuizGame';
import QuizResults from '../components/quiz/QuizResults';

export type QuizType = 'flags' | 'capitals';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type QuestionCount = 5 | 10 | 15;

export interface QuizConfig {
  type: QuizType;
  difficulty: Difficulty;
  questionCount: QuestionCount;
}

export interface QuizAnswer {
  question: string;
  correctAnswer: string;
  userAnswer: string | null;
  isCorrect: boolean;
}

const Quiz: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizConfig, setQuizConfig] = useState<QuizConfig>({
    type: 'flags',
    difficulty: 'easy',
    questionCount: 5,
  });
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleStartQuiz = (config: QuizConfig) => {
    setQuizConfig(config);
    setQuizStarted(true);
    setQuizFinished(false);
    setAnswers([]);
  };

  const handleFinishQuiz = (quizAnswers: QuizAnswer[]) => {
    setAnswers(quizAnswers);
    setQuizFinished(true);
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setAnswers([]);
  };

  return (
    <>
      <Hero
        title="Test Your Knowledge"
        subtitle="Challenge yourself with our geography quizzes on flags and capitals"
        imageSrc="https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {!quizStarted && !quizFinished && (
            <QuizSetup onStartQuiz={handleStartQuiz} />
          )}
          {quizStarted && !quizFinished && (
            <QuizGame config={quizConfig} onFinish={handleFinishQuiz} />
          )}
          {quizFinished && (
            <QuizResults answers={answers} onRestart={handleRestartQuiz} />
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;