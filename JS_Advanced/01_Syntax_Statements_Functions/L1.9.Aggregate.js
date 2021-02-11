function aggregate(array) {
    let s1 = 0;
    let s2 = 0;
    let conc ='';

    for (let el of array) {
        s1+=el;
        s2+=1/el;
        conc += el
    }
console.log(s1);
console.log(s2);
console.log(conc);

}

aggregate([2, 4, 8, 16])