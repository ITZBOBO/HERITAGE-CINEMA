import React from 'react';
import { Link } from 'react-router-dom';
import { MOVIES } from '../../data/cinemaData';
import './ComingSoonSection.css';

export const ComingSoonSection = () => {
  const comingSoonMovies = MOVIES.filter((m) => m.status === 'coming_soon');

  return (
    <section className="coming-soon-poster-section">
      <div className="container">
        <h2 className="coming-soon-main-heading">Coming Soon</h2>

        {comingSoonMovies.length === 0 ? (
          <p className="no-movies-notice">No movies are available at the moment</p>
        ) : (
          <div className="coming-soon-grid">
            {comingSoonMovies.map((movie) => (
              <div key={movie.id} className="coming-soon-card">
                <Link to={`/movies/${movie.id}`} className="coming-soon-poster-box">
                  <img
                    src={movie.posterImage}
                    alt={movie.title}
                    className="coming-soon-img"
                    loading="lazy"
                  />
                  {movie.ageRating && (
                    <span className="poster-age-badge">{movie.ageRating}</span>
                  )}
                  <div className="coming-soon-badge-ribbon">
                    Coming Soon
                  </div>
                </Link>
                <div className="coming-soon-info">
                  <h3 className="coming-soon-title">{movie.shortTitle || movie.title}</h3>
                  <span className="coming-soon-genre">{movie.genre[0]} • Release {movie.releaseYear}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
