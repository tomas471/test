import React from 'react';
import { ArrowLeft, ThumbsUp, ThumbsDown, Clock } from 'lucide-react';
import Hero from '../components/ui/Hero';

interface CultureDetailsProps {
  id: string;
}

const CultureDetails: React.FC<CultureDetailsProps> = ({ id }) => {
  // Mock data - in a real app, fetch this based on the ID
  const post = {
    id: '1',
    country: 'Japan',
    flag: 'https://flagcdn.com/jp.svg',
    title: 'Cherry Blossom Festival',
    type: 'Festival',
    description: `The Cherry Blossom Festival, known as "Hanami" in Japan, is one of the country's most beloved annual traditions. This centuries-old practice celebrates the ephemeral beauty of sakura (cherry blossoms), which bloom for just a few weeks each spring.

During this time, people gather in parks and gardens across Japan for hanami parties, where they sit beneath the blooming trees to enjoy food, drinks, and the company of friends and family. The tradition dates back to the Nara Period (710-794), when it was first associated with rice planting season and used to divine the year's harvest.

The blossoms hold deep cultural significance in Japan, representing both the beauty and transience of life. Their brief blooming period serves as a reminder to appreciate life's fleeting moments and the importance of being present.

Popular viewing spots include Tokyo's Ueno Park, which features over 1,000 cherry trees, and Kyoto's Maruyama Park, home to a famous weeping cherry tree that's illuminated at night during the festival season.`,
    imageUrl: 'https://images.pexels.com/photos/5745020/pexels-photo-5745020.jpeg',
    author: 'Yuki Tanaka',
    likes: 245,
    dislikes: 12,
    timestamp: '2024-03-15T09:30:00Z',
    gallery: [
      'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg',
      'https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg',
      'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg'
    ]
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Hero
        title={post.title}
        subtitle={`Explore the cultural heritage of ${post.country}`}
        imageSrc={post.imageUrl}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <a
            href="/myculture"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Cultures
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={post.flag}
                alt={`${post.country} flag`}
                className="w-8 h-8 rounded-full"
              />
              <h1 className="text-3xl font-bold">{post.title}</h1>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{formatDate(post.timestamp)}</span>
                </div>
                <span>By {post.author}</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {post.type}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center text-green-600">
                  <ThumbsUp className="w-5 h-5 mr-1" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center text-red-600">
                  <ThumbsDown className="w-5 h-5 mr-1" />
                  <span>{post.dislikes}</span>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              {post.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {post.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${post.title} gallery image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CultureDetails;