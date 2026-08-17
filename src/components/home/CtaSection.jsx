import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Sparkles, ArrowRight } from 'lucide-react';
import './CtaSection.css';

export const CtaSection = () => {
  return (
    <section className="cta-block-section">
      <div className="container">
        <div className="cta-banner-card">
          <div className="cta-content">
            <div className="cta-badge">
              <Sparkles size={14} />
              <span>THE HERITAGE EXPERIENCE</span>
            </div>
            <h2 className="cta-heading">Ready for an Unrivaled Cinematic Journey?</h2>
            <p className="cta-description">
              Immerse yourself in giant IMAX laser screens, Dolby Atmos multidimensional soundscapes, and gourmet theatre concessions delivered straight to your luxury recliner.
            </p>
            <div className="cta-buttons">
              <Link to="/movies" className="btn-primary cta-btn-main">
                <span>Browse All Movies</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/booking/location" className="btn-secondary cta-btn-secondary">
                <span>Explore Locations</span>
              </Link>
            </div>
          </div>
          <div className="cta-graphic-wrap">
            <div className="cta-graphic-circle">
              <Film size={64} className="cta-graphic-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
