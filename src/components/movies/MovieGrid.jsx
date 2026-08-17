import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Clock, Ticket, Film } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import './MovieGrid.css';

export const MovieGrid = ({ movies }) => {
  const { startBookingForMovie } = useBooking();
  const navigate = useNavigate();

  const handleBookNow = (e, movie) => {
    e.preventDefault();
    e.stopPropagation();
    startBookingForMovie(movie);
    navigate('/booking/location');
  };

  if (!movies || movies.length === 0) {
    return (
      <div className="empty-movies-state card-surface">
        <Film size={48} className="empty-icon" />
        <h3 className="empty-title">No Movies Found</h3>
        <p className="empty-desc">Try adjusting your filters or search keywords to find what you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="movie-listing-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="listing-card card-surface">
          {/* Poster */}
          <Link to={`/movies/${movie.id}`} className="listing-poster-wrap">
            <img
              src={movie.posterImage}
              alt={movie.title}
              className="listing-poster-img"
              loading="lazy"
            />
            <div className="listing-poster-badges">
              <span className="badge-rating">
                <Star size={12} fill="currentColor" />
                {movie.rating}
              </span>
              <span className="badge-tag age-tag">{movie.ageRating}</span>
            </div>
            {movie.status === 'coming_soon' && (
              <div className="coming-soon-badge-ribbon">
                Coming Soon
              </div>
            )}
          </Link>

          {/* Body */}
          <div className="listing-card-body">
            <div className="listing-formats">
              {movie.formats.map((fmt) => (
                <span key={fmt} className="badge-format">
                  {fmt}
                </span>
              ))}
            </div>

            <Link to={`/movies/${movie.id}`}>
              <h3 className="listing-movie-title">{movie.title}</h3>
            </Link>

            <div className="listing-meta">
              <span>{movie.genre.slice(0, 2).join(' • ')}</span>
              <span className="listing-runtime">
                <Clock size={12} />
                {movie.runtime}
              </span>
            </div>

            <p className="listing-short-synopsis">{movie.synopsis}</p>

            <div className="listing-card-actions">
              <Link to={`/movies/${movie.id}`} className="btn-secondary listing-details-btn">
                Details
              </Link>
              {movie.status === 'now_showing' ? (
                <button
                  className="btn-primary listing-book-btn"
                  onClick={(e) => handleBookNow(e, movie)}
                >
                  <Ticket size={15} />
                  <span>Book</span>
                </button>
              ) : (
                <button
                  className="btn-outline listing-notify-btn"
                  onClick={() => alert(`You will be notified when tickets for "${movie.title}" go on sale!`)}
                >
                  Notify Me
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
