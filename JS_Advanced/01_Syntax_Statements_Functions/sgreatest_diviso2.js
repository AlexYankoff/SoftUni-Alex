function findDivisor (num1, num2) {
let res;
let temp;

while (res!=0) {
    res = num1%num2;
    temp = num2;
    num1 = temp;
    num2 = res
    }
console.log(num1)
}

findDivisor(15,5);
findDivisor(2154,248);
