import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOVIES, LOCATIONS, TICKET_TYPES, SNACKS, INITIAL_USER_BOOKINGS } from '../data/cinemaData';

const BookingContext = createContext();

const STORAGE_KEY_BOOKINGS = 'heritage_cinema_bookings_history';
const STORAGE_KEY_DRAFT = 'heritage_cinema_booking_draft';

const defaultDraft = {
  movie: MOVIES[0],
  location: LOCATIONS[0],
  date: 'Saturday, Aug 15, 2026',
  dayKey: 'saturday',
  time: '7:00PM',
  format: 'Heritage VIP Dolby Lounge',
  tickets: {
    adult: 2,
    child: 0,
    student: 0,
    vip: 0
  },
  snacks: {
    'snack-1': 1
  }
};

export const formatCurrency = (amount) => {
  return `₦${Number(amount || 0).toLocaleString('en-NG')}`;
};

export const BookingProvider = ({ children }) => {
  const [draft, setDraft] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_DRAFT);
      return saved ? JSON.parse(saved) : defaultDraft;
    } catch {
      return defaultDraft;
    }
  });

  const [bookingsHistory, setBookingsHistory] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BOOKINGS);
      return saved ? JSON.parse(saved) : INITIAL_USER_BOOKINGS;
    } catch {
      return INITIAL_USER_BOOKINGS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_DRAFT, JSON.stringify(draft));
    } catch (e) {
      console.error('Failed to sync draft', e);
    }
  }, [draft]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(bookingsHistory));
    } catch (e) {
      console.error('Failed to sync bookings history', e);
    }
  }, [bookingsHistory]);

  const startBookingForMovie = (movie) => {
    const targetMovie = movie || MOVIES[0];
    const initialDayKey = 'friday';
    const firstShowtime = targetMovie.showtimes && targetMovie.showtimes[initialDayKey] && targetMovie.showtimes[initialDayKey].length > 0
      ? targetMovie.showtimes[initialDayKey][0]
      : '3:00PM';

    setDraft({
      movie: targetMovie,
      location: draft.location || LOCATIONS[0],
      date: 'Friday, Aug 14, 2026',
      dayKey: initialDayKey,
      time: firstShowtime,
      format: 'Heritage Standard Screen',
      tickets: {
        adult: 2,
        child: 0,
        student: 0,
        vip: 0
      },
      snacks: {}
    });
  };

  const setLocation = (location) => {
    setDraft(prev => ({ ...prev, location }));
  };

  const setDate = (date) => {
    setDraft(prev => ({ ...prev, date }));
  };

  const setDateWithKey = (date, dayKey) => {
    setDraft(prev => {
      const currentMovie = prev.movie;
      const availableTimes = currentMovie.showtimes ? (currentMovie.showtimes[dayKey] || []) : [];
      const updatedTime = availableTimes.includes(prev.time) ? prev.time : (availableTimes[0] || '');
      return {
        ...prev,
        date,
        dayKey,
        time: updatedTime
      };
    });
  };

  const setTimeAndFormat = (time, format) => {
    setDraft(prev => ({ ...prev, time, format }));
  };

  const updateTicketQuantity = (ticketId, delta) => {
    setDraft(prev => {
      const current = prev.tickets[ticketId] || 0;
      const nextVal = Math.max(0, current + delta);
      return {
        ...prev,
        tickets: {
          ...prev.tickets,
          [ticketId]: nextVal
        }
      };
    });
  };

  const updateSnackQuantity = (snackId, delta) => {
    setDraft(prev => {
      const current = prev.snacks[snackId] || 0;
      const nextVal = Math.max(0, current + delta);
      const updatedSnacks = { ...prev.snacks };
      if (nextVal <= 0) {
        delete updatedSnacks[snackId];
      } else {
        updatedSnacks[snackId] = nextVal;
      }
      return {
        ...prev,
        snacks: updatedSnacks
      };
    });
  };

  // Calculations
  const totalTicketCount = Object.values(draft.tickets || {}).reduce((acc, c) => acc + c, 0);

  const ticketsSubtotal = Object.entries(draft.tickets || {}).reduce((acc, [typeId, count]) => {
    const item = TICKET_TYPES.find(t => t.id === typeId);
    return acc + (item ? item.price * count : 0);
  }, 0);

  const snacksSubtotal = Object.entries(draft.snacks || {}).reduce((acc, [snackId, count]) => {
    const item = SNACKS.find(s => s.id === snackId);
    return acc + (item ? item.price * count : 0);
  }, 0);

  const bookingFee = totalTicketCount > 0 ? 500 * totalTicketCount : 0; // ₦500 booking fee per ticket
  const grandTotal = ticketsSubtotal + snacksSubtotal + bookingFee;

  const confirmBooking = (customerDetails = {}) => {
    const newBookingId = `HC-${Math.floor(100000 + Math.random() * 900000)}`;

    const selectedTicketsList = Object.entries(draft.tickets)
      .filter(([_, count]) => count > 0)
      .map(([typeId, count]) => {
        const item = TICKET_TYPES.find(t => t.id === typeId);
        return {
          name: item ? item.name : typeId,
          count,
          price: item ? item.price : 0
        };
      });

    const selectedSnacksList = Object.entries(draft.snacks)
      .filter(([_, count]) => count > 0)
      .map(([snackId, count]) => {
        const item = SNACKS.find(s => s.id === snackId);
        return {
          name: item ? item.name : snackId,
          count,
          price: item ? item.price : 0
        };
      });

    const newBooking = {
      bookingId: newBookingId,
      movieId: draft.movie.id,
      movieTitle: draft.movie.title,
      posterImage: draft.movie.posterImage,
      location: draft.location.name,
      date: draft.date,
      dayKey: draft.dayKey,
      time: draft.time,
      format: draft.format,
      tickets: selectedTicketsList,
      snacks: selectedSnacksList,
      totalPaid: grandTotal,
      status: 'Confirmed',
      bookedAt: new Date().toISOString(),
      customerName: customerDetails.name || 'Alexander Vance',
      customerEmail: customerDetails.email || 'alex.vance@cinema.heritage'
    };

    setBookingsHistory(prev => [newBooking, ...prev]);
    return newBooking;
  };

  const cancelBooking = (bookingId) => {
    setBookingsHistory(prev =>
      prev.map(b => b.bookingId === bookingId ? { ...b, status: 'Cancelled' } : b)
    );
  };

  const rescheduleBooking = (bookingId, newDate, newTime) => {
    setBookingsHistory(prev =>
      prev.map(b => b.bookingId === bookingId ? { ...b, date: newDate, time: newTime, status: 'Rescheduled' } : b)
    );
  };

  return (
    <BookingContext.Provider
      value={{
        draft,
        startBookingForMovie,
        setLocation,
        setDate,
        setDateWithKey,
        setTimeAndFormat,
        updateTicketQuantity,
        updateSnackQuantity,
        totalTicketCount,
        ticketsSubtotal,
        snacksSubtotal,
        bookingFee,
        grandTotal,
        confirmBooking,
        bookingsHistory,
        cancelBooking,
        rescheduleBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
