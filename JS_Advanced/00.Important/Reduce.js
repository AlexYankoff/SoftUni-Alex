const reducer = (accumulator, currentValue) => accumulator + currentValue;
//
a = [1,2,3,4]
b = a.reduce((accu, val) => { //ako e с тези скоби, връщаме с return
    
    return accu +val;
});

console.log(b)


c = a.reduce((accu, val) => accu +2*val);

console.log(c)