document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user) {
        window.location.href = 'index.html';
        return;
    }

    // Display user email in navbar if we had one (simplified for now)

    // Populate dropdowns
    const originSelect = document.getElementById('origin');
    const destSelect = document.getElementById('destination');

    if (originSelect && destSelect) {
        airports.forEach(airport => {
            const option = document.createElement('option');
            option.value = airport.code;
            option.textContent = `${airport.city} (${airport.code})`;

            originSelect.appendChild(option.cloneNode(true));
            destSelect.appendChild(option);
        });
    }

    // Handle Search
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const origin = originSelect.value;
            const destination = destSelect.value;
            const date = document.getElementById('date').value;

            if (origin === destination) {
                alert('Origin and Destination cannot be the same.');
                return;
            }

            // Redirect to flights page with params
            const params = new URLSearchParams({
                origin,
                destination,
                date
            });

            window.location.href = `flights.html?${params.toString()}`;
        });
    }
});
