import React from 'react';
import Hero from '../components/ui/Hero';
import UserProfile from '../components/account/UserProfile';
import AchievementsOverview from '../components/account/AchievementsOverview';
import GameScores from '../components/account/GameScores';
import CultureContributions from '../components/account/CultureContributions';

const Account: React.FC = () => {
  return (
    <>
      <Hero
        title="My Journey"
        subtitle="Track your progress, achievements, and contributions in exploring the world"
        imageSrc="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          <UserProfile />
          <AchievementsOverview />
          <GameScores />
          <CultureContributions />
        </div>
      </div>
    </>
  );
};

export default Account;