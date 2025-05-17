import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import { Heart, Share2, CheckCircle } from 'lucide-react';
import CommunityPostForm from '../components/community/CommunityPostForm';

interface GeoFact {
  id: string;
  title: string;
  content: string;
  category: string;
  country: string;
  likes: number;
  verified: boolean;
}

const sampleFacts: GeoFact[] = [
  {
    id: '1',
    title: 'The Great Wall of China',
    content: 'The Great Wall of China is not actually visible from space with the naked eye, despite the popular myth. It can only be seen from low Earth orbit under perfect conditions.',
    category: 'Architecture',
    country: 'China',
    likes: 342,
    verified: true
  },
  {
    id: '2',
    title: 'The Amazon Rainforest',
    content: 'The Amazon Rainforest produces 20% of the world\'s oxygen and is home to more than 390 billion individual trees belonging to 16,000 different species.',
    category: 'Nature',
    country: 'Brazil',
    likes: 289,
    verified: true
  }
];

const GoeFacts: React.FC = () => {
  const [showPostForm, setShowPostForm] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Hero
        title="GoeFacts"
        subtitle="Discover fascinating facts about cultures, geography, and traditions from around the world"
        imageSrc="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <SectionTitle
            title="Interesting Facts"
            subtitle="Learn something new about our world every day"
            centered={true}
          />
        </div>

        <div className="mb-8 text-center">
          <button
            onClick={() => setShowPostForm(!showPostForm)}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            {showPostForm ? 'Cancel' : 'Submit a Fact'}
          </button>
        </div>

        {showPostForm && (
          <div className="mb-12">
            <CommunityPostForm type="fact" onSubmit={() => setShowPostForm(false)} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sampleFacts.map((fact) => (
            <div
              key={fact.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/facts/${fact.id}`)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full">
                    {fact.category}
                  </span>
                  {fact.verified && (
                    <span className="flex items-center text-green-500">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Verified
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {fact.title}
                </h3>
                <p className="text-gray-600 mb-4">{fact.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600">
                      <Heart className="w-4 h-4 mr-1" />
                      <span>{fact.likes}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {fact.country}
                    </span>
                  </div>
                  <button 
                    className="text-gray-600 hover:text-gray-900"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add share functionality here
                    }}
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GoeFacts; 