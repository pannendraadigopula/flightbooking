document.addEventListener('DOMContentLoaded', () => {
    // Auth check
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user) {
        window.location.href = 'index.html';
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const flightId = params.get('flightId');
    const date = params.get('date');

    const flight = flights.find(f => f.id === flightId);
    if (!flight) {
        alert('Flight not found');
        window.location.href = 'home.html';
        return;
    }

    // Populate Flight Summary
    document.getElementById('summary-route').textContent = `${flight.origin} → ${flight.destination}`;
    document.getElementById('summary-airline').textContent = flight.airline;
    document.getElementById('summary-time').textContent = `${flight.departureTime} - ${flight.arrivalTime}`;
    document.getElementById('summary-date').textContent = date;
    document.getElementById('summary-price').textContent = `$${flight.price}`;

    // Handle Form Submit
    document.getElementById('bookingForm').addEventListener('submit', (e) => {
        e.preventDefault();

        // Gather details
        const passenger = {
            name: document.getElementById('name').value,
            passport: document.getElementById('passport').value,
            email: document.getElementById('email').value
        };

        // Generare mock booking ID
        const bookingId = 'BK' + Math.random().toString(36).substr(2, 6).toUpperCase();

        // Redirect to confirmation
        const confirmParams = new URLSearchParams({
            id: bookingId,
            origin: flight.origin,
            dest: flight.destination
        });

        window.location.href = `confirmation.html?${confirmParams.toString()}`;
    });
});
