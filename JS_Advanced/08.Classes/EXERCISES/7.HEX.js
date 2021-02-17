class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {return this.value }

    toString() { return '0x' +this.value.toString(16).toUpperCase()} //return HEX starting with Ox

    plus(number) { return new Hex (this.value +number)}

    minus(number) { return new Hex (this.value -number)}

    parse (string ) {return parseInt(string,16)}

}

let a = new Hex(123)
let b = new Hex(11)
//console.log(a.toString())
//console.log(a.parse('0x7B'))
//console.log(a.plus(11))
//console.log(a.valueOf())
console.log(a.plus(b))