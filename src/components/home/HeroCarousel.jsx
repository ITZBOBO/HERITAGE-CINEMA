import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Clock, ChevronLeft, ChevronRight, X, ArrowRight, Ticket } from 'lucide-react';
import { MOVIES } from '../../data/cinemaData';
import { useBooking } from '../../context/BookingContext';
import './HeroCarousel.css';

export const HeroCarousel = () => {
  const featuredMovies = MOVIES.slice(0, 4); // Apaara, Omotara Johnson, Spider-Man, Njem
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  const { startBookingForMovie } = useBooking();
  const navigate = useNavigate();

  const currentMovie = featuredMovies[currentIndex] || featuredMovies[0];

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
        {/* Main Carousel Card */}
        <div className="hero-carousel-card">
          {/* Background image & gradient overlay */}
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
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            className="carousel-arrow-btn arrow-next"
            onClick={handleNext}
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Content Grid */}
          <div className="hero-slide-content-grid">
            {/* Left Info Column */}
            <div className="hero-left-info">
              {/* Play Trailer Pill */}
              <button
                type="button"
                className="play-trailer-pill-btn"
                onClick={() => setTrailerModalOpen(true)}
              >
                <div className="play-circle-icon">
                  <Play size={12} fill="currentColor" />
                </div>
                <span>Play Trailer</span>
              </button>

              {/* Title */}
              <h1 className="hero-main-title">{currentMovie.title}</h1>

              {/* Duration Meta */}
              <div className="hero-duration-meta">
                <Clock size={15} className="clock-icon" />
                <span>{currentMovie.runtime}</span>
              </div>

              {/* Action Buttons */}
              <div className="hero-btn-row">
                <button
                  type="button"
                  className="btn-buy-tickets-purple"
                  onClick={handleBuyTickets}
                >
                  <Ticket size={16} />
                  <span>Buy Tickets</span>
                </button>
                <button
                  type="button"
                  className="btn-more-info-pill"
                  onClick={handleMoreInfo}
                >
                  <span>More Info</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Stylized Title Graphic / Poster Composition */}
            <div className="hero-right-graphic">
              <div className="graphic-title-display">
                <span className="big-display-title">{currentMovie.titleLogo || currentMovie.shortTitle || currentMovie.title}</span>
                <span className="sub-tagline-display">{currentMovie.tagline}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Location Notice Helper text matching reference */}
        <div className="location-notice-helper">
          <p>Please select a location to view available showtimes.</p>
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
