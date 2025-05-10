import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Hero from '../../components/ui/Hero';
import WordleGameComponent from '../../components/fun/WordleGame';

const WordleGame: React.FC = () => {
  return (
    <>
      <Hero
        title="Country Wordle"
        subtitle="Guess the country name in 6 tries"
        imageSrc="https://images.pexels.com/photos/3774045/pexels-photo-3774045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <a
            href="/fun"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Games
          </a>
        </div>

        <WordleGameComponent />
      </div>
    </>
  );
};

export default WordleGame;