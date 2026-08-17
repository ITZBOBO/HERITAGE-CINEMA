# 🎬 Heritage Cinema Web Application

A modern, routed multi-page cinema web application built with **React**, **Vite**, and **Lucide Icons** featuring the authentic **Heritage Cinemas (Abule-Egba & Mowe)** branding, weekly schedule matrix, movie discovery, interactive booking flow, concessions ordering, and digital pass wallet.

---

## 🌟 Key Features

- **Top Utility & Location Selector**:
  - Top benefits notification bar with instant sign in links.
  - Interactive location picker (`Heritage Cinemas — Abule-Egba` vs `Heritage Cinemas — Mowe`).
- **Hero Carousel Banner**:
  - Slide preview with `Play Trailer` modal player, movie duration, `Buy Tickets` action, and `More Info`.
- **Now Showing 6-Column Poster Grid**:
  - Nollywood and international catalog (*Àpàárà: The Outcast*, *The Return of Omotara Johnson*, *Spider-Man: Brand New Day*, *Njem*, *Moana 2*, *Ajosepo 2*, *Sweet 16*, etc.) with age certification badges (`18`, `PG-13`, `PG`).
- **Weekly Schedule Matrix (14th – 20th August 2026)**:
  - Interactive schedule grid by day (*Friday*, *Saturday*, *Sunday*, *Mon–Tue*, *Wed–Thu*) where users can click any time slot to start booking.
- **6-Step Booking Stepper Flow**:
  1. **Location** (`/booking/location`)
  2. **Date** (`/booking/date`)
  3. **Time & Format** (`/booking/time`)
  4. **Tickets** (`/booking/tickets`) with live `OrderSummarySidebar`
  5. **Snacks & Combos** (`/booking/snacks`) with live `OrderSummarySidebar`
  6. **Review & Payment** (`/booking/summary`)
- **My Bookings & Pass Management** (`/my-bookings`):
  - Reservation history with interactive **Reschedule** and **Cancel** actions.
- **4-Column Newsletter & Mobile Experience Footer**:
  - Newsletter subscription form and Google Play / Apple App Store mobile app badges.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18+ (tested on v24)
- **npm**: v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/ITZBOBO/HERITAGE-CINEMA.git
cd HERITAGE-CINEMA

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be available at `http://localhost:5173/`.

### Production Build

```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Bundler & Dev Server**: Vite 6
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Typography**: Google Fonts (Manrope & Inter)
- **State Management**: React Context (`AuthContext`, `BookingContext`) with `localStorage` persistence
