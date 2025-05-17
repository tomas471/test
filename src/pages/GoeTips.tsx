import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import { Heart, Share2, Bookmark } from 'lucide-react';
import CommunityPostForm from '../components/community/CommunityPostForm';

interface TravelTip {
  id: string;
  title: string;
  content: string;
  category: string;
  country: string;
  likes: number;
  comments: number;
  saved: boolean;
}

const sampleTips: TravelTip[] = [
  {
    id: '1',
    title: 'Best Time to Visit Japan',
    content: 'Spring (March-May) and Autumn (September-November) offer the best weather and stunning natural scenery. Avoid the rainy season in June and the hot, humid summer months.',
    category: 'Seasonal',
    country: 'Japan',
    likes: 256,
    comments: 42,
    saved: true
  },
  {
    id: '2',
    title: 'Budget Travel in Europe',
    content: 'Use overnight trains to save on accommodation, visit free museums on their free days, and take advantage of student discounts with an ISIC card.',
    category: 'Budget',
    country: 'Europe',
    likes: 189,
    comments: 35,
    saved: false
  }
];

const GoeTips: React.FC = () => {
  const [showPostForm, setShowPostForm] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Hero
        title="GoeTips"
        subtitle="Share and discover practical travel tips from experienced globetrotters"
        imageSrc="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <SectionTitle
            title="Travel Tips"
            subtitle="Expert advice for your next adventure"
            centered={true}
          />
        </div>

        <div className="mb-8 text-center">
          <button
            onClick={() => setShowPostForm(!showPostForm)}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            {showPostForm ? 'Cancel' : 'Share a Tip'}
          </button>
        </div>

        {showPostForm && (
          <div className="mb-12">
            <CommunityPostForm type="tip" onSubmit={() => setShowPostForm(false)} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sampleTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/tips/${tip.id}`)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full">
                    {tip.category}
                  </span>
                  <button 
                    className={`text-gray-600 hover:text-gray-900 ${tip.saved ? 'text-purple-600' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add save functionality here
                    }}
                  >
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 mb-4">{tip.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600">
                      <Heart className="w-4 h-4 mr-1" />
                      <span>{tip.likes}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span>{tip.comments} comments</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {tip.country}
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

export default GoeTips; 