import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Ticket, Star, Clock, Sparkles, X, MapPin } from 'lucide-react';
import { MOVIES } from '../../data/cinemaData';
import { useBooking } from '../../context/BookingContext';
import './HeroBanner.css';

export const HeroBanner = () => {
  const featuredMovie = MOVIES[0]; // The Return of Omotara Johnson
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  const { startBookingForMovie } = useBooking();
  const navigate = useNavigate();

  const handleBookNow = () => {
    startBookingForMovie(featuredMovie);
    navigate('/booking/location');
  };

  return (
    <section className="hero-banner-section">
      {/* Backdrop Image with Multi-layer Gradient */}
      <div
        className="hero-backdrop"
        style={{ backgroundImage: `url(${featuredMovie.heroImage})` }}
      >
        <div className="hero-gradient-overlay" />
      </div>

      <div className="container hero-content-container">
        <div className="hero-details">
          {/* Spotlight Tag */}
          <div className="hero-spotlight-tag">
            <Sparkles size={14} className="spotlight-icon" />
            <span>NOW SHOWING • 14TH – 20TH AUG 2026</span>
          </div>

          {/* Title */}
          <h1 className="hero-title">{featuredMovie.title}</h1>
          <p className="hero-tagline">"{featuredMovie.tagline}"</p>

          {/* Meta Info Badges */}
          <div className="hero-meta-row">
            <span className="badge-rating">
              <Star size={13} fill="currentColor" />
              {featuredMovie.rating} Rating
            </span>
            <span className="badge-gold">
              <MapPin size={11} />
              Abule-Egba & Mowe
            </span>
            <span className="badge-tag age-cert">{featuredMovie.ageRating}</span>
            <span className="badge-tag">
              <Clock size={13} />
              {featuredMovie.runtime}
            </span>
            <span className="hero-genres">{featuredMovie.genre.join(' • ')}</span>
          </div>

          {/* Formats row */}
          <div className="hero-formats-row">
            <span className="formats-label">Audio & Halls:</span>
            {featuredMovie.formats.map((fmt) => (
              <span key={fmt} className="badge-format">
                {fmt}
              </span>
            ))}
          </div>

          {/* Synopsis */}
          <p className="hero-synopsis">{featuredMovie.synopsis}</p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <button className="btn-primary hero-btn-book" onClick={handleBookNow}>
              <Ticket size={18} />
              <span>Book Tickets & View Schedule</span>
            </button>
            <button
              className="btn-secondary hero-btn-trailer"
              onClick={() => setTrailerModalOpen(true)}
            >
              <Play size={16} fill="currentColor" />
              <span>Watch Trailer</span>
            </button>
          </div>
        </div>
      </div>

      {/* Trailer Modal */}
      {trailerModalOpen && (
        <div className="trailer-modal-backdrop" onClick={() => setTrailerModalOpen(false)}>
          <div className="trailer-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="trailer-modal-header">
              <h3>{featuredMovie.title} — Official Trailer</h3>
              <button
                className="close-trailer-btn"
                onClick={() => setTrailerModalOpen(false)}
                aria-label="Close trailer"
              >
                <X size={20} />
              </button>
            </div>
            <div className="trailer-video-wrapper">
              <iframe
                src={`${featuredMovie.trailerUrl}?autoplay=1`}
                title={`${featuredMovie.title} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
