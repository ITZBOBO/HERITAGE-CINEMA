import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Clock, Ticket, ArrowRight } from 'lucide-react';
import { MOVIES } from '../../data/cinemaData';
import { useBooking } from '../../context/BookingContext';
import './NowShowingGrid.css';

export const NowShowingGrid = () => {
  const nowShowingMovies = MOVIES.filter((m) => m.status === 'now_showing');
  const { startBookingForMovie } = useBooking();
  const navigate = useNavigate();

  const handleBookNow = (e, movie) => {
    e.preventDefault();
    e.stopPropagation();
    startBookingForMovie(movie);
    navigate('/booking/location');
  };

  return (
    <section className="now-showing-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <h2 className="section-title">Now Showing</h2>
            <p className="section-subtitle">Experience the latest releases in state-of-the-art formats</p>
          </div>
          <Link to="/movies" className="view-all-link">
            <span>View All Movies</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Movies Grid */}
        <div className="movies-grid">
          {nowShowingMovies.map((movie) => (
            <div key={movie.id} className="movie-card card-surface">
              {/* Poster Container with Badges */}
              <Link to={`/movies/${movie.id}`} className="movie-poster-wrap">
                <img
                  src={movie.posterImage}
                  alt={movie.title}
                  className="movie-poster-img"
                  loading="lazy"
                />
                <div className="poster-top-badges">
                  <span className="badge-rating">
                    <Star size={12} fill="currentColor" />
                    {movie.rating}
                  </span>
                  <span className="badge-tag age-tag">{movie.ageRating}</span>
                </div>
                <div className="poster-hover-overlay">
                  <span className="overlay-view-text">View Details</span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="movie-card-body">
                {/* Formats */}
                <div className="card-formats-row">
                  {movie.formats.map((fmt) => (
                    <span key={fmt} className="badge-format">
                      {fmt}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <Link to={`/movies/${movie.id}`}>
                  <h3 className="card-movie-title">{movie.title}</h3>
                </Link>

                {/* Genre & Runtime */}
                <div className="card-meta-row">
                  <span className="card-genre">{movie.genre.slice(0, 2).join(', ')}</span>
                  <span className="card-runtime">
                    <Clock size={12} />
                    {movie.runtime}
                  </span>
                </div>

                {/* Quick Booking Button */}
                <button
                  className="btn-primary card-book-btn"
                  onClick={(e) => handleBookNow(e, movie)}
                >
                  <Ticket size={16} />
                  <span>Book Tickets</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
