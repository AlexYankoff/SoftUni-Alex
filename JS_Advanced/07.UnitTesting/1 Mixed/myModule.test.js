const {sum} = require('./myModule');
const { expect} = require('chai');

describe ('Sum function', () => { //mocha
    it('works', () => {
        expect(sum(1,2)).to.equal(3); //chai
        });
    
});