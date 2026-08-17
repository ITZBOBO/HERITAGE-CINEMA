import React from 'react';
import './MovieDetailsComponents.css';

export const TrailerSection = ({ movie }) => {
  return (
    <section className="details-section-block">
      <h2 className="details-section-heading">Official Trailer & Preview</h2>
      <div className="trailer-embed-card card-surface">
        <div className="trailer-video-responsive">
          <iframe
            src={movie.trailerUrl}
            title={`${movie.title} Official Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};
