import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, X } from 'lucide-react';
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
            <p className="coming-soon-subheading">Anticipated cinematic premieres arriving this year</p>
          </div>
          <Link to="/movies?filter=coming_soon" className="view-all-link">
            <span>View All</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Clean, Punchy Homepage Teaser Cards */}
        <div className="coming-soon-curated-grid">
          {comingSoonMovies.map((movie) => (
            <div key={movie.id} className="coming-soon-featured-card card-surface">
              {/* Poster Column */}
              <Link to={`/movies/${movie.id}`} className="cs-poster-wrap">
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
              </Link>

              {/* Content Column */}
              <div className="cs-content-wrap">
                <div className="cs-genres-row">
                  <span className="badge-tag">{movie.genre[0]}</span>
                  {movie.genre[1] && <span className="badge-tag">{movie.genre[1]}</span>}
                </div>

                <Link to={`/movies/${movie.id}`}>
                  <h3 className="cs-movie-title">{movie.title}</h3>
                </Link>
                
                {movie.tagline && (
                  <p className="cs-movie-tagline">{movie.tagline}</p>
                )}

                {/* Actions */}
                <div className="cs-actions-row">
                  <button
                    type="button"
                    className="btn-secondary cs-trailer-btn"
                    onClick={() => setActiveTrailer(movie)}
                  >
                    <Play size={14} fill="currentColor" />
                    <span>Watch Trailer</span>
                  </button>
                  <Link to={`/movies/${movie.id}`} className="btn-outline cs-details-btn">
                    <span>More Info</span>
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
