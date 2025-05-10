import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { BookOpen, Flag, Gamepad2, Users, Sparkles } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Education',
      description: 'Learn facts and information about countries around the world, including their flags, capitals, population, landmarks, and more.',
      icon: BookOpen,
      color: 'bg-blue-600',
    },
    {
      title: 'Quize',
      description: 'Test your geography knowledge with fun quizzes on flags, capitals, and other geographical facts. Challenge yourself and track your progress.',
      icon: Flag,
      color: 'bg-green-500',
    },
    {
      title: 'Fun',
      description: 'Play educational games designed to make learning geography enjoyable. From interactive maps to matching games, learning becomes play.',
      icon: Gamepad2,
      color: 'bg-yellow-500',
    },
    {
      title: 'MyCulture',
      description: 'Share your own country\'s traditions, food, music, festivals, and more. Connect with others by exchanging cultural knowledge.',
      icon: Users,
      color: 'bg-purple-500',
    },
    {
      title: 'MyType',
      description: 'Get personalized country suggestions based on your preferences using our AI chatbot. Discover places that match your interests.',
      icon: Sparkles,
      color: 'bg-pink-500',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="What We Offer"
          subtitle="Explore our diverse range of features designed to make learning about geography enjoyable"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${feature.color}`}
              >
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;