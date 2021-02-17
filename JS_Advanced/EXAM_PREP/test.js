class Cinema {
    constructor(name) {
        this.name = name
        this.obj = {"Boby":'yes'}
    }
    abc (n) {
        if (n in this.obj) {
        return `${n} ${this.name}`
        }
    }
    def(n2) {
        if (n2 in this.obj) {
            return `${n2} ${this.name}`
        
        }
        return "nema go"
    }
}
const f1 = new Cinema('Boby')
console.log(f1.abc('Boby'))
console.log(f1.def('chao'))