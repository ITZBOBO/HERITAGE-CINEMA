import React from 'react';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { NowShowingPosterGrid } from '../components/home/NowShowingPosterGrid';
import { ComingSoonSection } from '../components/home/ComingSoonSection';
import { CinemaExperienceSection } from '../components/home/CinemaExperienceSection';

export const HomePage = () => {
  return (
    <div className="home-page-container fade-in">
      <HeroCarousel />
      <NowShowingPosterGrid />
      <ComingSoonSection />
      <CinemaExperienceSection />
    </div>
  );
};
