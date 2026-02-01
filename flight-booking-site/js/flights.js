document.addEventListener('DOMContentLoaded', () => {
    // Auth check
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user) {
        window.location.href = 'index.html';
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const origin = params.get('origin');
    const destination = params.get('destination');
    const date = params.get('date');

    const resultsContainer = document.getElementById('results-container');
    const resultsTitle = document.getElementById('results-title');

    // Display search summary
    resultsTitle.innerHTML = `Flights from <span class="highlight">${origin}</span> to <span class="highlight">${destination}</span>`;

    // Filter flights (mock logic)
    // In a real app we would query the backend with date as well
    const matchedFlights = flights.filter(f =>
        (f.origin === origin && f.destination === destination) ||
        (f.origin === destination && f.destination === origin) // Show return flights too for demo if direct not match exact
    );

    // For demo purposes, if no exact match, show all or random to ensure user sees something
    // But let's stick to the matchedFlights logic + fallback for better UX in a demo
    let displayFlights = matchedFlights;
    if (matchedFlights.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">No direct flights found for this route. Showing all available flights for demo purposes.</div>';
        displayFlights = flights; // Fallback
    }

    displayFlights.forEach(flight => {
        const card = document.createElement('div');
        card.className = 'flight-card glass-card';
        // Add staggered animation delay

        card.innerHTML = `
            <div class="flight-info">
                <div class="airline">
                    <div class="airline-logo">${flight.airline.substring(0, 2).toUpperCase()}</div>
                    <div>
                        <h3>${flight.airline}</h3>
                        <span class="flight-id">${flight.id}</span>
                    </div>
                </div>
                <div class="route-info">
                    <div class="time-loc">
                        <span class="time">${flight.departureTime}</span>
                        <span class="code">${flight.origin}</span>
                    </div>
                    <div class="duration-line">
                        <span class="duration">${flight.duration}</span>
                        <div class="line"></div>
                    </div>
                    <div class="time-loc">
                        <span class="time">${flight.arrivalTime}</span>
                        <span class="code">${flight.destination}</span>
                    </div>
                </div>
            </div>
            <div class="flight-price-action">
                <div class="price">$${flight.price}</div>
                <button class="btn btn-primary" onclick="bookFlight('${flight.id}')">Select</button>
            </div>
        `;

        resultsContainer.appendChild(card);
    });
});

function bookFlight(flightId) {
    const params = new URLSearchParams(window.location.search);
    const date = params.get('date');
    window.location.href = `booking.html?flightId=${flightId}&date=${date}`;
}
