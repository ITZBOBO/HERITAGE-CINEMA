import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { TopNoticeBar } from './components/layout/TopNoticeBar';
import { TopNav } from './components/layout/TopNav';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { MoviesPage } from './pages/MoviesPage';
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import { BookingLocationPage } from './pages/BookingLocationPage';
import { BookingDatePage } from './pages/BookingDatePage';
import { BookingTimePage } from './pages/BookingTimePage';
import { BookingTicketsPage } from './pages/BookingTicketsPage';
import { BookingSnacksPage } from './pages/BookingSnacksPage';
import { BookingSummaryPage } from './pages/BookingSummaryPage';
import { MyBookingsPage } from './pages/MyBookingsPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App = () => {
  return (
    <div className="app-layout">
      <ScrollToTop />
      <TopNoticeBar />
      <TopNav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/booking/location" element={<BookingLocationPage />} />
          <Route path="/booking/date" element={<BookingDatePage />} />
          <Route path="/booking/time" element={<BookingTimePage />} />
          <Route path="/booking/tickets" element={<BookingTicketsPage />} />
          <Route path="/booking/snacks" element={<BookingSnacksPage />} />
          <Route path="/booking/summary" element={<BookingSummaryPage />} />
          <Route path="/my-bookings" element={<MyBookingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
