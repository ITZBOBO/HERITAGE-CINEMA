import React from 'react';
import { Star, Clock, Calendar, Shield } from 'lucide-react';
import './HeroSection.css';

export const HeroSection = ({ movie }) => {
  return (
    <div className="movie-details-hero">
      {/* Background Poster/Backdrop */}
      <div
        className="details-hero-bg"
        style={{ backgroundImage: `url(${movie.heroImage})` }}
      >
        <div className="details-hero-overlay" />
      </div>

      <div className="container details-hero-content">
        <div className="details-poster-and-meta">
          {/* Main Poster */}
          <div className="details-poster-box">
            <img
              src={movie.posterImage}
              alt={movie.title}
              className="details-poster-image"
            />
          </div>

          {/* Text Meta */}
          <div className="details-main-info">
            <div className="details-formats-row">
              {movie.formats.map((fmt) => (
                <span key={fmt} className="badge-format">
                  {fmt}
                </span>
              ))}
            </div>

            <h1 className="details-movie-title">{movie.title}</h1>
            {movie.tagline && <p className="details-tagline">"{movie.tagline}"</p>}

            <div className="details-meta-pills">
              <span className="badge-rating">
                <Star size={14} fill="currentColor" />
                {movie.rating} / 10
              </span>
              <span className="badge-tag">
                <Shield size={13} />
                {movie.ageRating}
              </span>
              <span className="badge-tag">
                <Clock size={13} />
                {movie.runtime}
              </span>
              <span className="badge-tag">
                <Calendar size={13} />
                {movie.releaseYear}
              </span>
            </div>

            <div className="details-genres-list">
              {movie.genre.map((g) => (
                <span key={g} className="genre-pill">
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
