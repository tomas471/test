import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const JourneySection: React.FC = () => {
  const milestones = [
    {
      year: '2023',
      title: 'GoeJungle is Born',
      description: 'From a simple idea to make geography fun, GoeJungle was launched with its first interactive map quizzes.',
    },
    {
      year: '2023',
      title: 'Community Growth',
      description: 'Our user base expanded as people discovered the joy of learning geography through engaging content.',
    },
    {
      year: '2024',
      title: 'New Features Added',
      description: 'We introduced the MyCulture section, allowing users to share their cultural knowledge with the community.',
    },
    {
      year: '2025',
      title: 'AI Integration',
      description: 'The MyType feature was launched, using AI to provide personalized country recommendations.',
    },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Journey"
          subtitle="The story of how GoeJungle has evolved"
          centered={true}
        />

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600 rounded"></div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0
                    ? 'flex-row'
                    : 'flex-row-reverse md:flex-row-reverse'
                }`}
              >
                <div className="flex md:contents">
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                      <span className="text-sm font-semibold text-blue-600 inline-block mb-2 bg-blue-100 px-3 py-1 rounded-full">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative md:mx-auto">
                    <div className="h-full md:w-6 md:flex md:items-center md:justify-center">
                      <div className="h-6 w-6 bg-blue-600 rounded-full shadow z-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;