function add (){
    let sum = 0;
    sum +=a;

    function calc(b){
        sum =+ b;
        return calc;
}
calc.toString = () => sum;
return calc;
}

let f = add()
console.log(f(1)(2)(3))
