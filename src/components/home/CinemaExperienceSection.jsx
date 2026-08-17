import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Utensils, Volume2, Armchair, ArrowRight, Box } from 'lucide-react';
import './CinemaExperienceSection.css';

export const CinemaExperienceSection = () => {
  const experiences = [
    {
      id: 'the-cube',
      title: 'The Cube',
      tagline: 'Experience cinema differently.',
      description: 'Our signature ultra-exclusive screening environment designed for VIP movie lovers, private screenings, and premiere gatherings.',
      icon: Box,
      ctaText: 'Explore The Cube',
      ctaLink: '/movies?filter=now_showing',
      featured: true
    },
    {
      id: 'immersive-av',
      title: '4K Laser & Dolby Audio',
      tagline: 'Precision sound & crystal optics.',
      description: 'Cutting-edge digital 4K projection paired with multi-channel Dolby Atmos spatial surround sound for true sensory immersion.',
      icon: Volume2,
      ctaText: 'View Showtimes',
      ctaLink: '/movies',
      featured: false
    },
    {
      id: 'gourmet-snacks',
      title: 'Gourmet Food & Drinks',
      tagline: 'Cinema classics, freshly prepared.',
      description: 'Signature warm butter popcorn, artisan shawarma, cheesy nachos, and chilled beverages delivered straight to your cinema seat.',
      icon: Utensils,
      ctaText: 'Explore Concessions',
      ctaLink: '/booking/snacks',
      featured: false
    },
    {
      id: 'luxury-recliners',
      title: 'VIP Luxury Recliners',
      tagline: 'First-class comfort on every row.',
      description: 'Plush motorized leather recliners with expansive legroom, personal swivel trays, and an unobstructed view of the big screen.',
      icon: Armchair,
      ctaText: 'Book VIP Seats',
      ctaLink: '/movies',
      featured: false
    }
  ];

  return (
    <section className="cinema-experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="experience-header">
          <div className="experience-badge-pill">
            <Sparkles size={14} className="sparkle-icon" />
            <span>MORE THAN JUST MOVIES</span>
          </div>
          <h2 className="experience-main-title">Crafted for Film Enthusiasts</h2>
          <p className="experience-subtitle">
            A cinematic experience built around legendary storytelling, supreme comfort, and unforgettable hospitality.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="experience-cards-grid">
          {experiences.map((exp) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={exp.id}
                className={`experience-card card-surface ${exp.featured ? 'featured-cube-card' : ''}`}
              >
                <div className="exp-icon-wrap">
                  <IconComponent size={22} className="exp-icon" />
                </div>

                <div className="exp-content">
                  <h3 className="exp-title">{exp.title}</h3>
                  <span className="exp-tagline">{exp.tagline}</span>
                  <p className="exp-desc">{exp.description}</p>
                </div>

                <Link to={exp.ctaLink} className="exp-cta-link">
                  <span>{exp.ctaText}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
