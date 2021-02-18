const {expect} = require('chai');
const isSymmetric = require('./isSymmetric.js');


describe('test', () => {
    it('returns true for  valid  symetric input', () => {
       expect(isSymmetric([1,1])).to.true;
    });

    it('returns false for non-symetric input', () => {
        expect(isSymmetric([1,2])).to.false;
    })
    it('returns false for invalid input', () => {
        expect(isSymmetric('a')).to.false;

    })
    it('returns true with strings', () => {
        expect(isSymmetric(['a','b', 'a'])).to.true
    })

    it('returns false otherwise', () =>{
        expect(isSymmetric(['a', 'b']))
    })
    it('returns false for string assymetry', () => {
        expect(isSymmetric(['1', 1])).to.false
    })
})



