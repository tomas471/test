import React from 'react';
import { MapPin, Flag, Gamepad2, Globe, Sparkles } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';
import SectionTitle from '../ui/SectionTitle';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Try a Quiz',
      description:
        'Test your knowledge of flags, capitals, and geographical facts with our fun and challenging quizzes.',
      icon: Flag,
      color: 'bg-blue-600',
      link: '/quize',
    },
    {
      title: 'Play a Game',
      description:
        'Learn while having fun with our interactive geography games for all ages.',
      icon: Gamepad2,
      color: 'bg-green-500',
      link: '/fun',
    },
    {
      title: 'Explore Cultures',
      description:
        'Discover traditions, foods, festivals, and more from different countries around the world.',
      icon: Globe,
      color: 'bg-yellow-500',
      link: '/myculture',
    },
    {
      title: 'AI Suggestions',
      description:
        'Get personalized country recommendations based on your interests and preferences.',
      icon: Sparkles,
      color: 'bg-purple-500',
      link: '/mytype',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Explore GoeJungle"
          subtitle="Discover our engaging features designed to make learning about geography and cultures fun"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;