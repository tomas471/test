import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Clock } from 'lucide-react';

interface Post {
  id: string;
  country: string;
  flag: string;
  title: string;
  type: string;
  description: string;
  imageUrl: string;
  author: string;
  likes: number;
  dislikes: number;
  timestamp: string;
}

interface CulturePostProps {
  post: Post;
}

const CulturePost: React.FC<CulturePostProps> = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);
  const [userAction, setUserAction] = useState<'like' | 'dislike' | null>(null);

  const handleLike = () => {
    if (userAction === 'like') {
      setLikes(likes - 1);
      setUserAction(null);
    } else {
      if (userAction === 'dislike') {
        setDislikes(dislikes - 1);
      }
      setLikes(likes + 1);
      setUserAction('like');
    }
  };

  const handleDislike = () => {
    if (userAction === 'dislike') {
      setDislikes(dislikes - 1);
      setUserAction(null);
    } else {
      if (userAction === 'like') {
        setLikes(likes - 1);
      }
      setDislikes(dislikes + 1);
      setUserAction('dislike');
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 flex items-center bg-white rounded-full px-3 py-1 shadow-md">
          <img
            src={post.flag}
            alt={`${post.country} flag`}
            className="w-5 h-5 rounded-full mr-2"
          />
          <span className="text-sm font-medium">{post.country}</span>
        </div>
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md">
          <span className="text-sm font-medium">{post.type}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{formatDate(post.timestamp)}</span>
          </div>
          <span>By {post.author}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 ${
                userAction === 'like' ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              <ThumbsUp className="w-5 h-5" />
              <span>{likes}</span>
            </button>
            <button
              onClick={handleDislike}
              className={`flex items-center gap-1 ${
                userAction === 'dislike' ? 'text-red-600' : 'text-gray-600'
              }`}
            >
              <ThumbsDown className="w-5 h-5" />
              <span>{dislikes}</span>
            </button>
          </div>
          <a
            href={`/culture/${post.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Learn More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CulturePost;