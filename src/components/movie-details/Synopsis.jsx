import React from 'react';
import './MovieDetailsComponents.css';

export const Synopsis = ({ movie }) => {
  return (
    <section className="details-section-block">
      <h2 className="details-section-heading">Storyline & Synopsis</h2>
      <p className="details-synopsis-text">{movie.synopsis}</p>
      
      <div className="details-director-box card-surface">
        <span className="director-label">Directed by:</span>
        <span className="director-name">{movie.director}</span>
      </div>
    </section>
  );
};
