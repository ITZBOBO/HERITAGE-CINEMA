import React from 'react';
import { ProgressStepper } from '../components/booking/ProgressStepper';
import { DateSelector } from '../components/booking/DateSelector';
import './BookingPages.css';

export const BookingDatePage = () => {
  return (
    <div className="booking-page-wrap fade-in">
      <div className="container">
        <ProgressStepper />
        <DateSelector />
      </div>
    </div>
  );
};
