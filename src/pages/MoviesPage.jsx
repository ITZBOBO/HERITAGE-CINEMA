import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieFilters } from '../components/movies/MovieFilters';
import { MovieGrid } from '../components/movies/MovieGrid';
import { Pagination } from '../components/movies/Pagination';
import { MOVIES } from '../data/cinemaData';
import './MoviesPage.css';

const ITEMS_PER_PAGE = 6;

export const MoviesPage = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialFilter = searchParams.get('filter') || 'all';

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState(initialFilter === 'coming_soon' ? 'coming_soon' : 'all');
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (searchParams.get('search')) {
      setSearchQuery(searchParams.get('search'));
    }
    if (searchParams.get('filter') === 'coming_soon') {
      setSelectedStatus('coming_soon');
    }
  }, [searchParams]);

  // Filter movies
  const filteredMovies = MOVIES.filter((movie) => {
    // Status filter
    if (selectedStatus !== 'all' && movie.status !== selectedStatus) {
      return false;
    }
    // Category filter
    if (selectedCategory !== 'All' && !movie.genre.includes(selectedCategory) && movie.category !== selectedCategory) {
      return false;
    }
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = movie.title.toLowerCase().includes(q);
      const matchDirector = movie.director ? movie.director.toLowerCase().includes(q) : false;
      const matchGenre = movie.genre.some(g => g.toLowerCase().includes(q));
      const matchCast = movie.cast ? movie.cast.some(c => c.name.toLowerCase().includes(q)) : false;
      if (!matchTitle && !matchDirector && !matchGenre && !matchCast) {
        return false;
      }
    }
    return true;
  });

  const totalPages = Math.ceil(filteredMovies.length / ITEMS_PER_PAGE);
  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="movies-page-wrap fade-in">
      <div className="container">
        {/* Page Header */}
        <div className="movies-page-header">
          <h1 className="movies-page-title">Movies & Showtimes</h1>
          <p className="movies-page-subtitle">
            Browse our full catalog of current blockbusters, IMAX releases, and upcoming cinematic features.
          </p>
        </div>

        {/* Filters */}
        <MovieFilters
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
          selectedStatus={selectedStatus}
          onSelectStatus={handleStatusChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          totalResults={filteredMovies.length}
        />

        {/* Movie Grid */}
        <MovieGrid movies={paginatedMovies} />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </div>
    </div>
  );
};
