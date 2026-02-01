const airports = [
    { code: 'JFK', city: 'New York', name: 'John F. Kennedy International Airport' },
    { code: 'LHR', city: 'London', name: 'Heathrow Airport' },
    { code: 'DXB', city: 'Dubai', name: 'Dubai International Airport' },
    { code: 'HND', city: 'Tokyo', name: 'Haneda Airport' },
    { code: 'CDG', city: 'Paris', name: 'Charles de Gaulle Airport' },
    { code: 'SIN', city: 'Singapore', name: 'Changi Airport' }
];

const flights = [
    {
        id: 'FL001',
        airline: 'SkyHigh',
        origin: 'JFK',
        destination: 'LHR',
        departureTime: '18:00',
        arrivalTime: '06:00',
        price: 450,
        duration: '7h 00m'
    },
    {
        id: 'FL002',
        airline: 'British Airways',
        origin: 'JFK',
        destination: 'LHR',
        departureTime: '20:15',
        arrivalTime: '08:15',
        price: 520,
        duration: '7h 00m'
    },
    {
        id: 'FL003',
        airline: 'Emirates',
        origin: 'DXB',
        destination: 'JFK',
        departureTime: '02:30',
        arrivalTime: '08:00',
        price: 850,
        duration: '14h 30m'
    },
    {
        id: 'FL004',
        airline: 'JAL',
        origin: 'HND',
        destination: 'SIN',
        departureTime: '11:00',
        arrivalTime: '17:30',
        price: 380,
        duration: '7h 30m'
    }
];
