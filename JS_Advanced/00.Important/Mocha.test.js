
const {assert} = require('chai'); // за да работи expect от chai

describe ('Even or Odd', () => { //mocha

    it('Error missing input', () => {            
        assert.throw(() => isOddOrEven(), 'String input is needed');
        });

    it('test if not a string', () => {            
        assert.equal(isOddOrEven(1), undefined);
        });

    it('test if even', () => {
        assert.equal(isOddOrEven('Bobo'), 'even')
    });
    
    it('test if oddn', () => {
        assert.equal(isOddOrEven('asd'), 'odd')
    });

    it('test if oddn', () => {
        assert.deepEqual(matrix(), [1,2,3])  //deepEqual за матрици, обекти и т.н.
    });

    })
    
    function isOddOrEven(string) {

        if (string == undefined) {
            throw new Error('String input is needed')
        }

        if (typeof(string) !== 'string') {
            return undefined;
        }
        if (string.length % 2 === 0) {
            return "even";
        }
    
        return "odd";
    }

    function matrix() {
        return [1,2,3]
    }

    

    
    
