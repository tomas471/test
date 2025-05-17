import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Users, MessageSquare, TrendingUp, ArrowLeft , Heart } from 'lucide-react';

interface DebateTopic {
  id: string;
  title: string;
  description: string;
  participants: number;
  comments: number;
  trending: boolean;
  lastActive: string;
  category: string;
  fullContent: string;
  commentsList: {
    id: string;
    author: string;
    content: string;
    date: string;
    likes: number;
  }[];
}

// This would typically come from an API
const sampleTopic: DebateTopic = {
  id: '1',
  title: 'The Impact of Globalization on Local Traditions',
  description: 'How is globalization affecting traditional cultural practices around the world?',
  participants: 156,
  comments: 342,
  trending: true,
  lastActive: '2 hours ago',
  category: 'Culture',
  fullContent: `Globalization has brought unprecedented changes to local traditions and cultural practices worldwide. While some argue that it leads to cultural homogenization and the loss of unique traditions, others see it as an opportunity for cultural exchange and preservation.

The rapid spread of Western culture through media, technology, and global brands has undoubtedly influenced local customs and traditions. However, many communities are finding innovative ways to adapt their traditions to the modern world while maintaining their cultural identity.

This discussion aims to explore both the challenges and opportunities that globalization presents for local traditions. We'll examine case studies from different regions and discuss potential strategies for preserving cultural heritage in an increasingly connected world.`,
  commentsList: [
    {
      id: '1',
      author: 'Maria Garcia',
      content: 'In my community, we have started using social media to teach younger generations about our traditional dances and music. It iss actually helped preserve our culture!',
      date: '2024-03-15',
      likes: 45
    },
    {
      id: '2',
      author: 'John Smith',
      content: 'The key is finding a balance between embracing global influences and maintaining local traditions. It iss not an either/or situation.',
      date: '2024-03-15',
      likes: 32
    }
  ]
};

const DebateDetails: React.FC = () => {
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
          Back to Debates
        </button>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                {sampleTopic.category}
              </span>
              {sampleTopic.trending && (
                <span className="flex items-center text-orange-500">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Trending
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {sampleTopic.title}
            </h1>

            <div className="prose max-w-none mb-8">
              {sampleTopic.fullContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-1" />
                  <span>{sampleTopic.participants} participants</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MessageSquare className="w-5 h-5 mr-1" />
                  <span>{sampleTopic.comments} comments</span>
                </div>
              </div>
              <span className="text-sm text-gray-500">
                Last active {sampleTopic.lastActive}
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Comments</h2>
              {sampleTopic.commentsList.map((comment) => (
                <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{comment.author}</span>
                    <span className="text-sm text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{comment.content}</p>
                  <div className="flex items-center text-gray-600">
                    <Heart className="w-4 h-4 mr-1" />
                    <span>{comment.likes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DebateDetails; 