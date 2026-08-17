import React from 'react';
import { Volume2, Monitor, Disc, Globe, Subtitles } from 'lucide-react';
import './MovieDetailsComponents.css';

export const TechSpecs = ({ techSpecs }) => {
  if (!techSpecs) return null;

  return (
    <div className="tech-specs-card card-surface">
      <h3 className="specs-card-title">Technical Specifications</h3>
      
      <div className="specs-list">
        <div className="spec-row">
          <div className="spec-icon-wrap">
            <Volume2 size={16} />
          </div>
          <div className="spec-text">
            <span className="spec-label">Audio System</span>
            <span className="spec-value">{techSpecs.sound}</span>
          </div>
        </div>

        <div className="spec-row">
          <div className="spec-icon-wrap">
            <Monitor size={16} />
          </div>
          <div className="spec-text">
            <span className="spec-label">Aspect Ratio</span>
            <span className="spec-value">{techSpecs.aspectRatio}</span>
          </div>
        </div>

        <div className="spec-row">
          <div className="spec-icon-wrap">
            <Disc size={16} />
          </div>
          <div className="spec-text">
            <span className="spec-label">Master Format</span>
            <span className="spec-value">{techSpecs.resolution}</span>
          </div>
        </div>

        <div className="spec-row">
          <div className="spec-icon-wrap">
            <Globe size={16} />
          </div>
          <div className="spec-text">
            <span className="spec-label">Original Audio</span>
            <span className="spec-value">{techSpecs.language}</span>
          </div>
        </div>

        <div className="spec-row">
          <div className="spec-icon-wrap">
            <Subtitles size={16} />
          </div>
          <div className="spec-text">
            <span className="spec-label">Subtitles</span>
            <span className="spec-value">{techSpecs.subtitles}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
