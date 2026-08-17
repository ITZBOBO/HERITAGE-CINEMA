import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Utensils, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { SNACKS } from '../../data/cinemaData';
import { useBooking, formatCurrency } from '../../context/BookingContext';
import './BookingStepComponents.css';

const SNACK_CATEGORIES = ['All', 'Combos', 'Hot Food', 'Popcorn', 'Beverages'];

export const SnackGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { draft, updateSnackQuantity } = useBooking();
  const navigate = useNavigate();

  const filteredSnacks = activeCategory === 'All'
    ? SNACKS
    : SNACKS.filter(s => s.category === activeCategory);

  const totalSnacksCount = Object.values(draft.snacks || {}).reduce((a, b) => a + b, 0);

  return (
    <div className="booking-step-content">
      <div className="step-header-area">
        <h2 className="step-main-title">Snacks & Concessions</h2>
        <p className="step-subtitle">Upgrade your movie experience with our fresh gourmet popcorn, artisanal bites, and chilled drinks</p>
      </div>

      {/* Category Pills */}
      <div className="snack-category-filter">
        {SNACK_CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`snack-cat-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Snacks Grid */}
      <div className="snacks-items-grid">
        {filteredSnacks.map((snack) => {
          const count = draft.snacks[snack.id] || 0;

          return (
            <div key={snack.id} className="snack-item-card card-surface">
              <div className="snack-image-wrap">
                <img src={snack.image} alt={snack.name} className="snack-img" loading="lazy" />
                {snack.badge && (
                  <span className="snack-badge-tag">
                    <Sparkles size={11} />
                    {snack.badge}
                  </span>
                )}
              </div>

              <div className="snack-info-wrap">
                <span className="snack-category-label">{snack.category}</span>
                <h4 className="snack-name">{snack.name}</h4>
                <p className="snack-desc">{snack.description}</p>

                <div className="snack-price-and-counter">
                  <span className="snack-price">{formatCurrency(snack.price)}</span>

                  <div className="stepper-counter-controls">
                    <button
                      type="button"
                      className="counter-btn minus-btn"
                      onClick={() => updateSnackQuantity(snack.id, -1)}
                      disabled={count === 0}
                      aria-label={`Decrease ${snack.name}`}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="counter-value">{count}</span>
                    <button
                      type="button"
                      className="counter-btn plus-btn"
                      onClick={() => updateSnackQuantity(snack.id, 1)}
                      aria-label={`Increase ${snack.name}`}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="step-action-footer">
        <button className="btn-secondary step-back-btn" onClick={() => navigate('/booking/tickets')}>
          <ArrowLeft size={18} />
          <span>Back to Tickets</span>
        </button>

        <button
          className="btn-primary step-continue-btn"
          onClick={() => navigate('/booking/summary')}
        >
          <span>
            {totalSnacksCount > 0 ? `Continue with Snacks (${totalSnacksCount})` : 'Continue without Snacks'}
          </span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
