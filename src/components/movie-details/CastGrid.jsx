import React from 'react';
import './MovieDetailsComponents.css';

export const CastGrid = ({ cast }) => {
  if (!cast || cast.length === 0) return null;

  return (
    <section className="details-section-block">
      <h2 className="details-section-heading">Top Billed Cast</h2>
      <div className="cast-members-grid">
        {cast.map((member, idx) => (
          <div key={idx} className="cast-card card-surface">
            <div className="cast-photo-wrap">
              <img
                src={member.photo}
                alt={member.name}
                className="cast-photo-img"
                loading="lazy"
              />
            </div>
            <div className="cast-info">
              <h4 className="cast-actor-name">{member.name}</h4>
              <p className="cast-character-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
