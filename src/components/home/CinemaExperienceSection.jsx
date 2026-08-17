import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Utensils, Film, ArrowRight, Box } from 'lucide-react';
import './CinemaExperienceSection.css';

export const CinemaExperienceSection = () => {
  return (
    <section className="cinema-experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="experience-header">
          <div className="experience-badge-pill">
            <Sparkles size={14} className="sparkle-icon" />
            <span>HERITAGE EXPERIENCE</span>
          </div>
          <h2 className="experience-main-title">More Than Just Movies</h2>
          <p className="experience-subtitle">
            A cinematic destination built around great storytelling, warm hospitality, and unforgettable moments.
          </p>
        </div>

        {/* Premium Brand Showcase Layout */}
        <div className="experience-brand-layout">
          {/* Flagship Spotlight: The Cube */}
          <div className="the-cube-spotlight-card card-surface">
            <div className="cube-spotlight-content">
              <div className="cube-badge-row">
                <span className="cube-badge-tag">
                  <Box size={14} />
                  <span>THE CUBE</span>
                </span>
                <span className="cube-signature-label">Signature Screen</span>
              </div>

              <h3 className="cube-spotlight-title">Experience Cinema Differently</h3>
              
              <p className="cube-spotlight-desc">
                Our exclusive screening environment designed for premier movie gatherings, private screenings, and audiences seeking an elevated cinematic atmosphere.
              </p>

              <Link to="/movies?filter=now_showing" className="btn-primary cube-cta-btn">
                <span>Explore The Cube</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="cube-decorative-visual">
              <div className="cube-visual-badge">
                <Box size={32} className="cube-large-icon" />
                <span className="cube-visual-text">THE CUBE</span>
              </div>
            </div>
          </div>

          {/* Secondary Pillars Grid */}
          <div className="experience-pillars-grid">
            {/* Gourmet Food & Concessions */}
            <div className="experience-pillar-card card-surface">
              <div className="pillar-icon-wrap">
                <Utensils size={20} />
              </div>
              <h4 className="pillar-title">Gourmet Food & Drinks</h4>
              <p className="pillar-desc">
                Freshly popped butter popcorn, grilled shawarma, cheesy nachos, and chilled refreshments ready for showtime.
              </p>
              <Link to="/booking/snacks" className="pillar-link">
                <span>Concession Menu</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Premium Big Screen */}
            <div className="experience-pillar-card card-surface">
              <div className="pillar-icon-wrap">
                <Film size={20} />
              </div>
              <h4 className="pillar-title">The Big Screen Atmosphere</h4>
              <p className="pillar-desc">
                Crystal-clear projection, dynamic surround sound, and comfortable auditorium seating crafted for film lovers.
              </p>
              <Link to="/movies" className="pillar-link">
                <span>View Showtimes</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
