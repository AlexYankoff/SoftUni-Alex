function solve ( allTickets, sorting) {
    const result = []

    class Ticket {
       constructor(destination, price, status) {
        
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    
    for (ticket of allTickets) {
        const [destination, price, status ] = ticket.split('|');
        const t = new Ticket(destination, price, status)
        result.push(t)
    } 
    //sort by sorting parameter 
    
    const sortMapper = {
        'destination':(a,b) =>a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price  - b.price,
        'status':(a,b) => a.status.localeCompare(b.status)
    }
    result.sort(sortMapper[sorting])
        
    
    return result
}
console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))