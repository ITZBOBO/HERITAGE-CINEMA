import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Ticket, ChevronLeft, ChevronRight } from 'lucide-react';
import { MOVIES } from '../../data/cinemaData';
import { useBooking } from '../../context/BookingContext';
import './NowShowingPosterGrid.css';

export const NowShowingPosterGrid = () => {
  const nowShowingMovies = MOVIES.filter((m) => m.status === 'now_showing');
  const { startBookingForMovie } = useBooking();
  const navigate = useNavigate();
  const railRef = useRef(null);

  const handleQuickBook = (e, movie) => {
    e.preventDefault();
    e.stopPropagation();
    startBookingForMovie(movie);
    navigate('/booking/location');
  };

  const scrollLeft = () => {
    if (railRef.current) {
      const scrollAmount = railRef.current.clientWidth * 0.8;
      railRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (railRef.current) {
      const scrollAmount = railRef.current.clientWidth * 0.8;
      railRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="now-showing-poster-section">
      <div className="container">
        {/* Section Header with Navigation Controls & View All link */}
        <div className="section-header-row">
          <div className="section-header-left">
            <h2 className="now-showing-main-heading">Now Showing</h2>
            <p className="now-showing-subheading">Catch the latest releases on our screens</p>
          </div>

          <div className="section-header-actions">
            {/* Rail Scroll Arrows */}
            <div className="rail-arrow-controls">
              <button
                type="button"
                className="rail-arrow-btn"
                onClick={scrollLeft}
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="rail-arrow-btn"
                onClick={scrollRight}
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <Link to="/movies?filter=now_showing" className="view-all-link">
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Horizontal Movie Rail (5-Poster Desktop Presentation) */}
        <div className="now-showing-rail-container" ref={railRef}>
          {nowShowingMovies.map((movie) => (
            <div key={movie.id} className="filmhouse-poster-card rail-item">
              <Link to={`/movies/${movie.id}`} className="poster-link-wrapper">
                <div className="poster-image-box">
                  <img
                    src={movie.posterImage}
                    alt={movie.title}
                    className="filmhouse-poster-img"
                    loading="lazy"
                  />

                  {/* Top Right Age Certification Tag */}
                  {movie.ageRating && (
                    <span className="poster-age-badge">
                      {movie.ageRating}
                    </span>
                  )}

                  {/* Hover Overlay with Quick Book Button */}
                  <div className="poster-hover-actions">
                    <button
                      type="button"
                      className="quick-book-hover-btn"
                      onClick={(e) => handleQuickBook(e, movie)}
                    >
                      <Ticket size={15} />
                      <span>Buy Tickets</span>
                    </button>
                  </div>
                </div>

                {/* Minimal Card Details */}
                <div className="poster-caption-info">
                  <h3 className="poster-film-title">{movie.shortTitle || movie.title}</h3>
                  <span className="poster-film-genre">{movie.genre[0]} • {movie.runtime}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
