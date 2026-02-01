# SkyHigh Airlines - Flight Booking System

## Overview
SkyHigh Airlines is a modern, premium flight booking web application built with vanilla HTML, CSS, and JavaScript. It simulates a complete booking flow from user authentication to flight selection and final confirmation.

## Features
-   **User Authentication**: A visually appealing login page with mock authentication.
-   **Flight Search**: Search flights by Origin, Destination, and Date.
-   **Interactive UI**: Glassmorphism design, smooth transitions, and responsive layout.
-   **Flight Results**: Dynamic listing of flights with airline logos, timings, and prices.
-   **Booking System**: Detailed passenger information form with real-time flight summary.
-   **Confirmation**: Success page generating a unique booking reference.

## Technology Stack
-   **HTML5**: Semantic structure.
-   **CSS3**: Custom variables, Flexbox/Grid layouts, Media queries, and animations (No external frameworks used).
-   **JavaScript**: ES6+ features for DOM manipulation, session storage, and data handling.

## Project Structure
```
flight-booking-site/
├── index.html          # Login / Landing Page
├── home.html           # Search / Dashboard Page
├── flights.html        # Search Results Page
├── booking.html        # Booking Form Page
├── confirmation.html   # Success Page
├── styles/
│   ├── main.css        # Global styles and variables
│   ├── login.css       # Login page specific styles
│   ├── search.css      # Search and result styles
│   └── booking.css     # Booking form styles
└── js/
    ├── data.js         # Mock data (Airports, Flights)
    ├── auth.js         # Login logic
    ├── search.js       # Search functionality
    ├── flights.js      # Results rendering logic
    └── booking.js      # Booking process logic
```

## How to Run
1.  Navigate to the project folder.
2.  Open `index.html` in any modern web browser.
3.  **Login Credentials**: You can use any non-empty email and password to log in (Mock Auth).

## Browser Support
Tested on latest versions of Chrome, Firefox, and Edge.
