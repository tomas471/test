import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Map, Calendar, MessageSquare, Heart, ArrowLeft } from 'lucide-react';

interface JourneyStory {
  id: string;
  title: string;
  author: string;
  location: string;
  date: string;
  likes: number;
  comments: number;
  image: string;
  excerpt: string;
  fullContent: string;
}

// This would typically come from an API
const sampleStory: JourneyStory = {
  id: '1',
  title: 'Exploring the Hidden Temples of Kyoto',
  author: 'Sarah Chen',
  location: 'Kyoto, Japan',
  date: '2024-03-15',
  likes: 245,
  comments: 32,
  image: 'https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg',
  excerpt: 'My journey through the ancient temples of Kyoto revealed a world of tranquility and tradition...',
  fullContent: `My journey through the ancient temples of Kyoto revealed a world of tranquility and tradition that I never expected to find in modern Japan. Starting at the famous Kinkaku-ji (Golden Pavilion), I was immediately struck by the perfect reflection of the golden structure in the mirror-like pond.

The next day, I ventured to the lesser-known temples in the eastern part of the city. The Philosopher's Path, lined with hundreds of cherry trees, was particularly magical in the early morning light. I spent hours wandering through the peaceful gardens of Ginkaku-ji, where the famous sand garden created a perfect harmony with the surrounding nature.

One of the most memorable experiences was participating in a traditional tea ceremony at a small temple near Gion. The ritual, which has remained unchanged for centuries, taught me about the importance of mindfulness and appreciation for simple moments.

The local people were incredibly welcoming, sharing stories about their traditions and the history of their city. I learned that many of these temples have been standing for over a thousand years, surviving wars and natural disasters, yet maintaining their original beauty and purpose.

This journey taught me that true cultural understanding comes not just from visiting famous landmarks, but from taking the time to experience the daily life and traditions of a place. Kyoto's temples are not just tourist attractions; they are living centers of culture and spirituality that continue to play an important role in the lives of local people.`
};

const JourneyDetails: React.FC = () => {
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
          Back to Journeys
        </button>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={sampleStory.image}
              alt={sampleStory.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {sampleStory.title}
            </h1>

            <div className="flex items-center text-sm text-gray-600 mb-6">
              <Map className="w-4 h-4 mr-1" />
              <span>{sampleStory.location}</span>
              <span className="mx-2">•</span>
              <Calendar className="w-4 h-4 mr-1" />
              <span>{sampleStory.date}</span>
            </div>

            <div className="prose max-w-none mb-8">
              {sampleStory.fullContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <Heart className="w-5 h-5 mr-1" />
                  <span>{sampleStory.likes}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MessageSquare className="w-5 h-5 mr-1" />
                  <span>{sampleStory.comments} comments</span>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                By {sampleStory.author}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default JourneyDetails; 