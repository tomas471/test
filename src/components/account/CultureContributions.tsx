import React from 'react';
import { ThumbsUp, ThumbsDown, Clock, ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const CultureContributions: React.FC = () => {
  const posts = [
    {
      id: '1',
      title: 'Cherry Blossom Festival',
      type: 'Festival',
      country: 'Japan',
      flag: 'https://flagcdn.com/jp.svg',
      likes: 245,
      dislikes: 12,
      timestamp: '2024-03-15T09:30:00Z',
    },
    {
      id: '2',
      title: 'Traditional Tacos Recipe',
      type: 'Food',
      country: 'Mexico',
      flag: 'https://flagcdn.com/mx.svg',
      likes: 189,
      dislikes: 8,
      timestamp: '2024-03-14T15:45:00Z',
    },
    {
      id: '3',
      title: 'Classical Dance Forms',
      type: 'Art',
      country: 'India',
      flag: 'https://flagcdn.com/in.svg',
      likes: 312,
      dislikes: 15,
      timestamp: '2024-03-13T12:20:00Z',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <SectionTitle title="My Culture Posts" />
        <a
          href="/myculture"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
        >
          See All Posts
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={post.flag}
                  alt={`${post.country} flag`}
                  className="w-6 h-6 rounded-full"
                />
                <span className="font-medium">{post.country}</span>
                <span className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-full">
                  {post.type}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-4">{post.title}</h3>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center text-green-600">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <ThumbsDown className="w-4 h-4 mr-1" />
                    <span>{post.dislikes}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>
                    {new Date(post.timestamp).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultureContributions;