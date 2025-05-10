import React from 'react';
import { MapPin, Globe, BookOpen } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageSrc,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="relative overflow-hidden bg-blue-900 text-white">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-8 w-8 text-yellow-400 animate-bounce" />
            <Globe className="h-8 w-8 text-green-400" />
            <BookOpen className="h-8 w-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          {ctaText && ctaLink && (
            <a
              href={ctaLink}
              className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-full bg-yellow-500 text-blue-900 hover:bg-yellow-400 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              {ctaText}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 opacity-70"></div>
    </div>
  );
};

export default Hero;