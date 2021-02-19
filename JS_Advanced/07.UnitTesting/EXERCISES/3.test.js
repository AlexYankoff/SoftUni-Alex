const {assert} = require('chai'); // за да работи expect от chai

describe ('Char Lookup function', () => { //mocha

    it('test if first parameter is not string', () => {
        assert.equal(lookupChar(11,0), undefined)
        assert.equal(lookupChar(undefined,'2'), undefined)
        //assert.equal(lookupChar(true,'2'), undefined)



    });
    it('test if second parameter is not a number', () => {
        assert.equal(lookupChar("Boby",'2'), undefined)
        assert.equal(lookupChar("Boby",2.5), undefined)


    });

    it('test if incorrect index', () => {
        assert.equal(lookupChar("Boby",5), "Incorrect index")
        assert.equal(lookupChar("Boby",4), "Incorrect index")
        assert.equal(lookupChar("Boby",-1), "Incorrect index")

    });

    it('test if both parameters are correct', () => {
        assert.equal(lookupChar("Boby",1), "o")
        
    });

    })          
        

    function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

