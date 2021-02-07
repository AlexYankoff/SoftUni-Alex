const myObj ={
    name: 'Peter'
}

function myFunc(a,b){
    console.log(this);
    console.log(a,b);

}
myFunc.call(myObj, 13,14)
myFunc.apply(myObj, [6,11])