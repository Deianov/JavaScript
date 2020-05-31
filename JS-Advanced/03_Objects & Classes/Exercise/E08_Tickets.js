function solve(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.setPrice(price);
            this.status = status;
        }
        setPrice(price) {
            this.price = Number(price)
        }
        toString(){
            return `Ticket: destination=${this.destination}, price=${this.price}, status=${this.status}`
        }
    }

    const tickets = arr.map(inputString => new Ticket(...inputString.split('|')));

    const compare = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a.price - b.price,
        status: (a, b) => a.status.localeCompare(b.status)
    };
    return tickets.sort(compare[criteria]);
}

// test
const input = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];
console.log('Sorted by destination:');
solve(input, 'destination').forEach(e => console.log(e.toString()));
console.log('Sorted by status:');
solve(input, 'status').forEach(e => console.log(e.toString()));
console.log('Sorted by price:');
solve(input, 'price').forEach(e => console.log(e.toString()));