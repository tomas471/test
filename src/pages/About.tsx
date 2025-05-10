import React from 'react';
import Hero from '../components/ui/Hero';
import MissionSection from '../components/about/MissionSection';
import FeaturesSection from '../components/about/FeaturesSection';
import TeamSection from '../components/about/TeamSection';
import JourneySection from '../components/about/JourneySection';

const About: React.FC = () => {
  return (
    <>
      <Hero
        title="About GoeJungle"
        subtitle="Learn about our mission to make global education fun, accessible, and community-driven."
        imageSrc="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <MissionSection />
      <FeaturesSection />
      <TeamSection />
      <JourneySection />
    </>
  );
};

export default About;