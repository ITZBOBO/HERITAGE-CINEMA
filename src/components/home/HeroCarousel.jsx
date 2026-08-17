import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Play, Clock, ChevronLeft, ChevronRight, X, Ticket, Info, MapPin } from 'lucide-react';
import { MOVIES } from '../../data/cinemaData';
import { useBooking } from '../../context/BookingContext';
import './HeroCarousel.css';

export const HeroCarousel = () => {
  const featuredMovies = MOVIES.slice(0, 4); // Apaara, Omotara Johnson, Spider-Man, Njem
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  const { draft, startBookingForMovie } = useBooking();
  const navigate = useNavigate();

  const currentMovie = featuredMovies[currentIndex] || featuredMovies[0];
  const selectedLocation = draft.location || { name: 'Heritage Cinemas — Mowe' };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredMovies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === featuredMovies.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleBuyTickets = () => {
    startBookingForMovie(currentMovie);
    navigate('/booking/location');
  };

  const handleMoreInfo = () => {
    navigate(`/movies/${currentMovie.id}`);
  };

  return (
    <section className="hero-carousel-section">
      <div className="container">
        {/* Main Cinematic Carousel Card */}
        <div className="hero-carousel-card">
          {/* Background movie artwork & cinematic gradient overlay */}
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url(${currentMovie.heroImage})` }}
          >
            <div className="hero-slide-overlay" />
          </div>

          {/* Left / Right Arrow Navigation */}
          <button
            type="button"
            className="carousel-arrow-btn arrow-prev"
            onClick={handlePrev}
            aria-label="Previous featured movie"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            className="carousel-arrow-btn arrow-next"
            onClick={handleNext}
            aria-label="Next featured movie"
          >
            <ChevronRight size={22} />
          </button>

          {/* Slide Content */}
          <div className="hero-slide-content">
            <div className="hero-left-info">
              {/* Badge & Certification */}
              <div className="hero-pill-row">
                <span className="hero-experience-badge">NOW SHOWING</span>
                {currentMovie.category && (
                  <span className="hero-format-pill">{currentMovie.category.toUpperCase()}</span>
                )}
                {currentMovie.ageRating && (
                  <span className="hero-age-badge">{currentMovie.ageRating}</span>
                )}
              </div>

              {/* Single Dominant Title */}
              <h1 className="hero-main-title">{currentMovie.title}</h1>

              {/* Tagline */}
              {currentMovie.tagline && (
                <p className="hero-tagline">{currentMovie.tagline}</p>
              )}

              {/* Movie Meta Information */}
              <div className="hero-meta-strip">
                <div className="meta-item">
                  <Clock size={15} className="meta-icon" />
                  <span>{currentMovie.runtime}</span>
                </div>
                <span className="meta-dot">•</span>
                <span className="meta-genre">{currentMovie.genre.join(', ')}</span>
                {currentMovie.rating && (
                  <>
                    <span className="meta-dot">•</span>
                    <span className="meta-rating">★ {currentMovie.rating}</span>
                  </>
                )}
              </div>

              {/* Primary & Secondary Action Buttons */}
              <div className="hero-btn-row">
                <button
                  type="button"
                  className="btn-primary hero-btn-buy"
                  onClick={handleBuyTickets}
                >
                  <Ticket size={18} />
                  <span>Buy Tickets</span>
                </button>

                <button
                  type="button"
                  className="btn-secondary hero-btn-trailer"
                  onClick={() => setTrailerModalOpen(true)}
                >
                  <Play size={16} fill="currentColor" />
                  <span>Watch Trailer</span>
                </button>

                <button
                  type="button"
                  className="btn-secondary hero-btn-info"
                  onClick={handleMoreInfo}
                  aria-label="View Movie Details"
                >
                  <Info size={16} />
                  <span>Details</span>
                </button>
              </div>
            </div>
          </div>

          {/* Slide Indicator Dots */}
          <div className="hero-slide-indicators">
            {featuredMovies.map((m, idx) => (
              <button
                key={m.id}
                type="button"
                className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Location & Showtime Status Bar */}
        <div className="location-showtime-status-bar">
          <div className="location-status-left">
            <MapPin size={16} className="loc-status-pin" />
            <span className="loc-status-label">
              Showing at <strong className="loc-active-name">{selectedLocation.name}</strong>
            </span>
          </div>
          <Link to="/booking/location" className="change-location-action">
            Change location →
          </Link>
        </div>
      </div>

      {/* Trailer Modal Player */}
      {trailerModalOpen && (
        <div className="trailer-modal-backdrop" onClick={() => setTrailerModalOpen(false)}>
          <div className="trailer-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="trailer-modal-header">
              <h3>{currentMovie.title} — Official Trailer</h3>
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
                src={`${currentMovie.trailerUrl}?autoplay=1`}
                title={`${currentMovie.title} Trailer`}
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
