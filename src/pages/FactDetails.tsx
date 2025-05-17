import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Share2, CheckCircle, ArrowLeft } from 'lucide-react';

interface GeoFact {
  id: string;
  title: string;
  content: string;
  category: string;
  country: string;
  likes: number;
  verified: boolean;
  fullContent: string;
  sources: string[];
  relatedFacts: {
    id: string;
    title: string;
    category: string;
  }[];
}

// This would typically come from an API
const sampleFact: GeoFact = {
  id: '1',
  title: 'The Great Wall of China',
  content: 'The Great Wall of China is not actually visible from space with the naked eye, despite the popular myth. It can only be seen from low Earth orbit under perfect conditions.',
  category: 'Architecture',
  country: 'China',
  likes: 342,
  verified: true,
  fullContent: `The Great Wall of China, one of the most iconic structures in human history, has been the subject of many myths and misconceptions. The most famous of these is the claim that it's the only man-made structure visible from space with the naked eye. This myth has been debunked by astronauts and scientists.

The wall's construction began as early as the 7th century BC and continued through various dynasties until the 17th century. The most well-known sections were built during the Ming Dynasty (1368-1644). The wall stretches over 13,000 miles (21,000 kilometers) across northern China, though this includes natural barriers and multiple walls built in different periods.

The structure was built using various materials depending on the local resources available. In the mountains, stone was used, while in the plains, rammed earth was the primary material. The wall's height varies from 15 to 30 feet (5 to 9 meters), and its width ranges from 15 to 25 feet (5 to 8 meters) at the base.

Today, the Great Wall is a UNESCO World Heritage site and one of China's most popular tourist attractions. However, only about 8% of the wall remains in good condition, with the rest having deteriorated over time due to natural erosion and human activity.`,
  sources: [
    'UNESCO World Heritage Centre',
    'National Geographic',
    'Chinese Cultural Heritage Administration'
  ],
  relatedFacts: [
    {
      id: '2',
      title: 'The Terracotta Army',
      category: 'History'
    },
    {
      id: '3',
      title: 'The Forbidden City',
      category: 'Architecture'
    }
  ]
};

const FactDetails: React.FC = () => {
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
          Back to Facts
        </button>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full">
                {sampleFact.category}
              </span>
              {sampleFact.verified && (
                <span className="flex items-center text-green-500">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Verified
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {sampleFact.title}
            </h1>

            <div className="prose max-w-none mb-8">
              {sampleFact.fullContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Sources</h2>
                <ul className="list-disc list-inside text-gray-700">
                  {sampleFact.sources.map((source, index) => (
                    <li key={index}>{source}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Related Facts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sampleFact.relatedFacts.map((fact) => (
                    <div
                      key={fact.id}
                      className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 cursor-pointer"
                      onClick={() => navigate(`/facts/${fact.id}`)}
                    >
                      <h3 className="font-medium text-gray-900">{fact.title}</h3>
                      <span className="text-sm text-gray-500">{fact.category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t mt-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <Heart className="w-5 h-5 mr-1" />
                  <span>{sampleFact.likes}</span>
                </div>
                <span className="text-sm text-gray-500">
                  {sampleFact.country}
                </span>
              </div>
              <button className="text-gray-600 hover:text-gray-900">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default FactDetails; 