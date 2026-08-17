import React from 'react';
import { ProgressStepper } from '../components/booking/ProgressStepper';
import { TicketQuantitySelector } from '../components/booking/TicketQuantitySelector';
import { OrderSummarySidebar } from '../components/booking/OrderSummarySidebar';
import './BookingPages.css';

export const BookingTicketsPage = () => {
  return (
    <div className="booking-page-wrap fade-in">
      <div className="container">
        <ProgressStepper />
        <div className="booking-two-column-layout">
          <div className="booking-main-step-col">
            <TicketQuantitySelector />
          </div>
          <div className="booking-sidebar-col">
            <OrderSummarySidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
