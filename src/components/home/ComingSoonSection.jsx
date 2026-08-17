import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, X, Calendar, Film } from 'lucide-react';
import { MOVIES } from '../../data/cinemaData';
import './ComingSoonSection.css';

export const ComingSoonSection = () => {
  const comingSoonMovies = MOVIES.filter((m) => m.status === 'coming_soon');
  const [activeTrailer, setActiveTrailer] = useState(null);

  return (
    <section className="coming-soon-poster-section">
      <div className="container">
        {/* Header Row */}
        <div className="section-header-row">
          <div className="section-header-left">
            <h2 className="coming-soon-main-heading">Coming Soon</h2>
            <p className="coming-soon-subheading">Anticipated cinematic premieres heading to our screens</p>
          </div>
          <Link to="/movies?filter=coming_soon" className="view-all-link">
            <span>View All</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Balanced Featured Cards Layout */}
        <div className="coming-soon-curated-grid">
          {comingSoonMovies.map((movie) => (
            <div key={movie.id} className="coming-soon-featured-card card-surface">
              {/* Poster Column */}
              <div className="cs-poster-wrap">
                <img
                  src={movie.posterImage}
                  alt={movie.title}
                  className="cs-poster-img"
                  loading="lazy"
                />
                <span className="cs-badge-year">Release {movie.releaseYear}</span>
                {movie.ageRating && (
                  <span className="cs-age-badge">{movie.ageRating}</span>
                )}
              </div>

              {/* Content Column */}
              <div className="cs-content-wrap">
                <div className="cs-genres-row">
                  {movie.genre.map((g) => (
                    <span key={g} className="badge-tag">{g}</span>
                  ))}
                  {movie.formats && movie.formats.includes('IMAX') && (
                    <span className="badge-format">IMAX 3D</span>
                  )}
                </div>

                <h3 className="cs-movie-title">{movie.title}</h3>
                
                {movie.tagline && (
                  <p className="cs-movie-tagline">{movie.tagline}</p>
                )}

                <p className="cs-movie-synopsis">{movie.synopsis}</p>

                <div className="cs-meta-row">
                  <div className="cs-meta-item">
                    <Film size={14} className="cs-meta-icon" />
                    <span>Directed by {movie.director}</span>
                  </div>
                  <div className="cs-meta-item">
                    <Calendar size={14} className="cs-meta-icon" />
                    <span>Expected {movie.releaseYear}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="cs-actions-row">
                  <button
                    type="button"
                    className="btn-secondary cs-trailer-btn"
                    onClick={() => setActiveTrailer(movie)}
                  >
                    <Play size={15} fill="currentColor" />
                    <span>Watch Trailer</span>
                  </button>
                  <Link to={`/movies/${movie.id}`} className="btn-outline cs-details-btn">
                    <span>Movie Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trailer Modal Player */}
      {activeTrailer && (
        <div className="trailer-modal-backdrop" onClick={() => setActiveTrailer(null)}>
          <div className="trailer-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="trailer-modal-header">
              <h3>{activeTrailer.title} — Official Trailer</h3>
              <button
                className="close-trailer-btn"
                onClick={() => setActiveTrailer(null)}
                aria-label="Close trailer"
              >
                <X size={20} />
              </button>
            </div>
            <div className="trailer-video-wrapper">
              <iframe
                src={`${activeTrailer.trailerUrl}?autoplay=1`}
                title={`${activeTrailer.title} Trailer`}
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
