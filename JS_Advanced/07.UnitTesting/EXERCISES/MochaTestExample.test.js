//const {sum} = require('./myModule'); - вкарал съм тук фукциите и не ги импортвам
const { expect} = require('chai'); // за да работи expect от chai


function sum (a,b) {
    return a+b
}
function product (a,b) {
    return a * b;
}
describe ('Sum function', () => { //mocha
    it('works', () => {
        expect(sum(1,2)).to.equal(3); //chai
        });
    
});