import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
      <div
        className={`h-1 w-24 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 mt-4 rounded-full ${
          centered ? 'mx-auto' : ''
        }`}
      ></div>
    </div>
  );
};

export default SectionTitle;