const myObj = {
    name:"bobi"
}

function prt() {
console.log(this.name)
}

prt.call(myObj)
myObj.compf = prt;

myObj.compf()