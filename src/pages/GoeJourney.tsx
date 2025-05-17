import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import { Map, Calendar, MessageSquare, Heart } from 'lucide-react';
import CommunityPostForm from '../components/community/CommunityPostForm';

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
}

const sampleStories: JourneyStory[] = [
  {
    id: '1',
    title: 'Exploring the Hidden Temples of Kyoto',
    author: 'Sarah Chen',
    location: 'Kyoto, Japan',
    date: '2024-03-15',
    likes: 245,
    comments: 32,
    image: 'https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg',
    excerpt: 'My journey through the ancient temples of Kyoto revealed a world of tranquility and tradition...'
  },
  {
    id: '2',
    title: 'A Month in the Moroccan Desert',
    author: 'Mohammed Ali',
    location: 'Sahara Desert, Morocco',
    date: '2024-03-10',
    likes: 189,
    comments: 24,
    image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg',
    excerpt: 'Living with the Berber tribes taught me more about hospitality and resilience than I ever expected...'
  }
];

const GoeJourney: React.FC = () => {
  const [showPostForm, setShowPostForm] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Hero
        title="GoeJourney"
        subtitle="Share your travel stories and cultural experiences with our global community"
        imageSrc="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <SectionTitle
            title="Travel Stories"
            subtitle="Discover authentic experiences shared by travelers from around the world"
            centered={true}
          />
        </div>

        <div className="mb-8 text-center">
          <button
            onClick={() => setShowPostForm(!showPostForm)}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {showPostForm ? 'Cancel' : 'Share Your Journey'}
          </button>
        </div>

        {showPostForm && (
          <div className="mb-12">
            <CommunityPostForm type="journey" onSubmit={() => setShowPostForm(false)} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sampleStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/journey/${story.id}`)}
            >
              <div className="relative h-48">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Map className="w-4 h-4 mr-1" />
                  <span>{story.location}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{story.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{story.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600">
                      <Heart className="w-4 h-4 mr-1" />
                      <span>{story.likes}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      <span>{story.comments}</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">By {story.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GoeJourney;
