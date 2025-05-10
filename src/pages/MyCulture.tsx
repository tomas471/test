import React, { useState } from 'react';
import { Search, Filter, Heart, ThumbsUp, ThumbsDown, Share2, Clock } from 'lucide-react';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import CulturePostForm from '../components/culture/CulturePostForm';
import CulturePost from '../components/culture/CulturePost';
import { useQuery } from '@tanstack/react-query';

type PostType = 'Festival' | 'Food' | 'Music' | 'Tradition' | 'Clothing' | 'Art';
type SortType = 'recent' | 'liked';

interface CulturePost {
  id: string;
  country: string;
  flag: string;
  title: string;
  type: PostType;
  description: string;
  imageUrl: string;
  author: string;
  likes: number;
  dislikes: number;
  timestamp: string;
}

const MyCulture: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedType, setSelectedType] = useState<PostType | ''>('');
  const [sortBy, setSortBy] = useState<SortType>('recent');
  const [showPostForm, setShowPostForm] = useState(false);

  const { data: countries } = useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) throw new Error('Failed to fetch countries');
      return response.json();
    },
  });

  // Mock data for demonstration
  const posts: CulturePost[] = [
    {
      id: '1',
      country: 'Japan',
      flag: 'https://flagcdn.com/jp.svg',
      title: 'Cherry Blossom Festival',
      type: 'Festival',
      description: 'Experience the beauty of Sakura season in Japan...',
      imageUrl: 'https://images.pexels.com/photos/5745020/pexels-photo-5745020.jpeg',
      author: 'Yuki Tanaka',
      likes: 245,
      dislikes: 12,
      timestamp: '2024-03-15T09:30:00Z',
    },
    {
      id: '2',
      country: 'Mexico',
      flag: 'https://flagcdn.com/mx.svg',
      title: 'Traditional Tacos',
      type: 'Food',
      description: 'Authentic Mexican street tacos recipe...',
      imageUrl: 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
      author: 'Carlos Rodriguez',
      likes: 189,
      dislikes: 8,
      timestamp: '2024-03-14T15:45:00Z',
    },
    {
      id: '3',
      country: 'India',
      flag: 'https://flagcdn.com/in.svg',
      title: 'Classical Dance',
      type: 'Art',
      description: 'The beauty of Bharatanatyam...',
      imageUrl: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg',
      author: 'Priya Sharma',
      likes: 312,
      dislikes: 15,
      timestamp: '2024-03-13T12:20:00Z',
    },
  ];

  const filteredPosts = posts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.country.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = !selectedCountry || post.country === selectedCountry;
      const matchesType = !selectedType || post.type === selectedType;
      return matchesSearch && matchesCountry && matchesType;
    })
    .sort((a, b) => {
      if (sortBy === 'recent') {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      }
      return b.likes - a.likes;
    });

  const postTypes: PostType[] = ['Festival', 'Food', 'Music', 'Tradition', 'Clothing', 'Art'];

  return (
    <>
      <Hero
        title="Share Your Culture"
        subtitle="Explore and share traditions, food, music, and festivals from around the world"
        imageSrc="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Filters Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search cultures..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">All Countries</option>
              {countries?.map((country: any) => (
                <option key={country.cca3} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
            </select>
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as PostType)}
            >
              <option value="">All Types</option>
              {postTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortType)}
            >
              <option value="recent">Most Recent</option>
              <option value="liked">Most Liked</option>
            </select>
          </div>
          <button
            onClick={() => setShowPostForm(!showPostForm)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {showPostForm ? 'Cancel' : 'Share Your Culture'}
          </button>
        </div>

        {/* Post Form */}
        {showPostForm && (
          <div className="mb-8">
            <CulturePostForm onSubmit={() => setShowPostForm(false)} />
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <CulturePost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyCulture;