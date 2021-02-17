//'use strict'

const myObj = {};

Object.defineProperty(myObj, 'name', {
    get() {
        return this._name;
    },
    set(value) {
        this._name = value;
    }
});

myObj.age = 21;

console.log ('Before: ', myObj.name);

myObj.name = 'John'

console.log('After: ', myObj.name)

console.log(Object.getOwnPropertyDescriptor(myObj, 'age'))