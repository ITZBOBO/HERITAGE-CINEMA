import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MOVIES } from '../../data/cinemaData';
import { useBooking } from '../../context/BookingContext';
import './NowShowingPosterGrid.css';

export const NowShowingPosterGrid = () => {
  const nowShowingMovies = MOVIES.filter((m) => m.status === 'now_showing');
  const { startBookingForMovie } = useBooking();
  const navigate = useNavigate();

  const handleQuickBook = (e, movie) => {
    e.preventDefault();
    e.stopPropagation();
    startBookingForMovie(movie);
    navigate('/booking/location');
  };

  return (
    <section className="now-showing-poster-section">
      <div className="container">
        <h2 className="now-showing-main-heading">Now Showing</h2>

        <div className="now-showing-poster-grid">
          {nowShowingMovies.map((movie) => (
            <div key={movie.id} className="filmhouse-poster-card">
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

                  {/* Hover Overlay */}
                  <div className="poster-hover-actions">
                    <button
                      type="button"
                      className="quick-book-hover-btn"
                      onClick={(e) => handleQuickBook(e, movie)}
                    >
                      Book Tickets
                    </button>
                  </div>
                </div>

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
