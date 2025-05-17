import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, MessageSquare, Bookmark, ArrowLeft } from 'lucide-react';

interface TravelTip {
  id: string;
  title: string;
  content: string;
  category: string;
  country: string;
  likes: number;
  comments: number;
  saved: number;
  fullContent: string;
  author: {
    name: string;
    avatar: string;
    experience: string;
  };
  relatedTips: {
    id: string;
    title: string;
    category: string;
  }[];
}

// This would typically come from an API
const sampleTip: TravelTip = {
  id: '1',
  title: 'Best Time to Visit Japan',
  content: 'Spring (March-May) and Fall (September-November) offer the best weather and beautiful scenery. Avoid Golden Week in early May and Obon in mid-August when domestic travel peaks.',
  category: 'Travel Planning',
  country: 'Japan',
  likes: 245,
  comments: 32,
  saved: 156,
  fullContent: `Japan is a country that offers unique experiences in every season, but timing your visit can significantly impact your experience. Here's a detailed guide to help you plan the perfect trip:

Spring (March-May):
- Cherry blossom season (late March to early April) is magical but crowded
- Mild temperatures (10-20°C)
- Perfect for outdoor activities and sightseeing
- Book accommodations 6-12 months in advance

Summer (June-August):
- Hot and humid weather
- Festivals and fireworks displays
- Avoid Obon (mid-August) when domestic travel peaks
- Good for beach destinations and mountain retreats

Fall (September-November):
- Beautiful autumn colors
- Pleasant temperatures
- Less crowded than spring
- Ideal for hiking and outdoor activities

Winter (December-February):
- Cold but dry weather
- Ski season in northern regions
- Illuminations and winter festivals
- Great for onsen (hot spring) experiences

Important Considerations:
1. Golden Week (late April to early May) is Japan's busiest travel period
2. Book accommodations and transportation well in advance
3. Consider purchasing a Japan Rail Pass before arrival
4. Check local festival calendars for special events`,
  author: {
    name: 'Sarah Chen',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    experience: 'Traveled to Japan 5 times, lived in Tokyo for 2 years'
  },
  relatedTips: [
    {
      id: '2',
      title: 'Local Etiquette in Japan',
      category: 'Cultural Etiquette'
    },
    {
      id: '3',
      title: 'Best Food Experiences in Tokyo',
      category: 'Food'
    }
  ]
};

const TipDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Tips
        </button>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">
                {sampleTip.category}
              </span>
              <span className="text-sm text-gray-500">
                {sampleTip.country}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {sampleTip.title}
            </h1>

            <div className="prose max-w-none mb-8">
              {sampleTip.fullContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img
                  src={sampleTip.author.avatar}
                  alt={sampleTip.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{sampleTip.author.name}</h3>
                  <p className="text-sm text-gray-500">{sampleTip.author.experience}</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Related Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sampleTip.relatedTips.map((tip) => (
                    <div
                      key={tip.id}
                      className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 cursor-pointer"
                      onClick={() => navigate(`/tips/${tip.id}`)}
                    >
                      <h3 className="font-medium text-gray-900">{tip.title}</h3>
                      <span className="text-sm text-gray-500">{tip.category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t mt-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <Heart className="w-5 h-5 mr-1" />
                  <span>{sampleTip.likes}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MessageSquare className="w-5 h-5 mr-1" />
                  <span>{sampleTip.comments}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Bookmark className="w-5 h-5 mr-1" />
                  <span>{sampleTip.saved}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TipDetails; 