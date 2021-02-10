function add(a) {
    let sum=0
    sum +=a

    calc.PokaziSumata =() => sum;
    return calc //closure
    
    function calc(a) {
        sum+=a
        return calc; // currying - сама се вика
        }
}
    
console.log(add(1)(6)(-3).PokaziSumata());
 // 19
