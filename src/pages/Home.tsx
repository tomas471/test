import React from 'react';
import Hero from '../components/ui/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import CountriesSection from '../components/home/CountriesSection';
import TestimonialSection from '../components/home/TestimonialSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero
        title="Explore the World with GoeJungle"
        subtitle="Discover countries, cultures, and geography through fun quizzes, games, and community-driven content."
        imageSrc="https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        ctaText="Start Exploring"
        ctaLink="/education"
      />
      <FeaturesSection />
      <CountriesSection />
      <TestimonialSection />
    </>
  );
};

export default Home;