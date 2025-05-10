import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  link,
}) => {
  return (
    <a
      href={link}
      className="block group"
    >
      <div className="h-full rounded-2xl bg-white p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div
          className={`w-14 h-14 mb-4 rounded-full flex items-center justify-center ${color}`}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
};

export default FeatureCard;