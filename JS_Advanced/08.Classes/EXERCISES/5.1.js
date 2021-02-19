class Stringer {
    constructor (string, length) {
        this.innerString = string; //The class should always keep the initial state
        this.innerLength = length;

    }
    increase(length) {
        this.innerLength +=length

    }
    decrease(length) {
        this.innerLength -=length
        if(this.innerLength<0) {
            this.innerLength = 0
        }
    }
    toString() {
        if (this.innerLength < this.innerString.length) {
            let newString = this.innerString.slice(0, this.innerLength)
            newString +='...'
            return newString
        }
        return this.innerString
        }

    }


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test

