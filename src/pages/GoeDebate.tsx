import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import { Users, MessageSquare, TrendingUp } from 'lucide-react';
import CommunityPostForm from '../components/community/CommunityPostForm';

interface DebateTopic {
  id: string;
  title: string;
  description: string;
  participants: number;
  comments: number;
  trending: boolean;
  lastActive: string;
  category: string;
}

const sampleTopics: DebateTopic[] = [
  {
    id: '1',
    title: 'The Impact of Globalization on Local Traditions',
    description: 'How is globalization affecting traditional cultural practices around the world?',
    participants: 156,
    comments: 342,
    trending: true,
    lastActive: '2 hours ago',
    category: 'Culture'
  },
  {
    id: '2',
    title: 'Digital Age vs. Traditional Communication',
    description: 'Is technology helping or hindering cultural exchange?',
    participants: 89,
    comments: 213,
    trending: false,
    lastActive: '5 hours ago',
    category: 'Technology'
  }
];

const GoeDebate: React.FC = () => {
  const [showPostForm, setShowPostForm] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Hero
        title="GoeDebate"
        subtitle="Engage in meaningful discussions about cultural topics and global issues"
        imageSrc="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <SectionTitle
            title="Active Discussions"
            subtitle="Join the conversation and share your perspective on cultural topics"
            centered={true}
          />
        </div>

        <div className="mb-8 text-center">
          <button
            onClick={() => setShowPostForm(!showPostForm)}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {showPostForm ? 'Cancel' : 'Start a Discussion'}
          </button>
        </div>

        {showPostForm && (
          <div className="mb-12">
            <CommunityPostForm type="debate" onSubmit={() => setShowPostForm(false)} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sampleTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/debate/${topic.id}`)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                    {topic.category}
                  </span>
                  {topic.trending && (
                    <span className="flex items-center text-orange-500">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Trending
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{topic.participants} participants</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      <span>{topic.comments} comments</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    Last active {topic.lastActive}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GoeDebate; 