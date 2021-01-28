function checkNumber(number) {
    number = number.toString()
    let sum = 0;
    let same = "true";
    let i;
    for (let i=0; i<(number.length-1); i++) {
        if(number[i] != number[i+1]) {
            same = "false";
        }
        sum +=Number(number[i]);
    }
    sum += Number(number[number.length-1])
    
        
    console.log(same)
    console.log(sum)
}
    

checkNumber(2222222)
checkNumber(1234)
