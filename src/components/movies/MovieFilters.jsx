import React from 'react';
import { Search } from 'lucide-react';
import { CATEGORIES } from '../../data/cinemaData';
import './MovieFilters.css';

export const MovieFilters = ({
  selectedCategory,
  onSelectCategory,
  selectedStatus,
  onSelectStatus,
  searchQuery,
  onSearchChange,
  totalResults
}) => {
  return (
    <div className="movie-filters-container">
      {/* Top Row: Status Tabs & Search */}
      <div className="filters-top-row">
        {/* Status Toggle (Now Showing vs Coming Soon) */}
        <div className="status-toggle-group">
          <button
            className={`status-tab-btn ${selectedStatus === 'now_showing' ? 'active' : ''}`}
            onClick={() => onSelectStatus('now_showing')}
          >
            Now Showing
          </button>
          <button
            className={`status-tab-btn ${selectedStatus === 'coming_soon' ? 'active' : ''}`}
            onClick={() => onSelectStatus('coming_soon')}
          >
            Coming Soon
          </button>
          <button
            className={`status-tab-btn ${selectedStatus === 'all' ? 'active' : ''}`}
            onClick={() => onSelectStatus('all')}
          >
            All Titles
          </button>
        </div>

        {/* Search Field */}
        <div className="filters-search-wrap">
          <Search size={18} className="filters-search-icon" />
          <input
            type="text"
            placeholder="Search titles, directors, actors..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="input-control filters-search-input"
          />
        </div>
      </div>

      {/* Category Pills Row */}
      <div className="category-pills-row">
        <span className="category-label">Genre:</span>
        <div className="category-pills-list">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="results-count-text">{totalResults} {totalResults === 1 ? 'film' : 'films'} found</span>
      </div>
    </div>
  );
};
