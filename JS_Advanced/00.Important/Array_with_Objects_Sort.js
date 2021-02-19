function sorting (сriteria) {
result = [{destination:'Sofia', price:11, status:'Open'}, {destination:'Burgas', price:9, status:'closed'}]

const sortMapper = {
    'destination':(a,b) =>a.destination.localeCompare(b.destination),
    'price': (a, b) => a.price  - b.price,
    'status':(a,b) => a.status.localeCompare(b.status)
}
result.sort(sortMapper[сriteria])

return result

}
console.log (sorting('price'))