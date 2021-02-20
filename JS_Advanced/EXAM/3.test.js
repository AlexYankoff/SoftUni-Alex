const {assert} = require('chai'); // за да работи expect от chai

describe ('Even or Odd', () => { //mocha

    it('test power', () => {            
        assert.equal(numberOperations.powNumber(3), '9');
        });

    
    it('numberChecker', () => {            
        assert.throw(() => numberOperations.numberChecker('a'), 'The input is not a number!');
        assert.throw(() => numberOperations.numberChecker(undefined), 'The input is not a number!');
        
        assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!')
        assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
        assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!')
        

        ;
        });
    it('test matrix', () => {
        assert.deepEqual(numberOperations.sumArrays([1,2,3,4],[2,2,2]), [ 3, 4, 5, 4 ])  //deepEqual за матрици, обекти и т.н.
    });
    })


    const numberOperations = {
        powNumber: function (num) {
            return num * num;
        },
        numberChecker: function (input) {
            input = Number(input);
    
            if (isNaN(input)) {
                throw new Error('The input is not a number!');
            }
    
            if (input < 100) {
                return 'The number is lower than 100!';
            } else {
                return 'The number is greater or equal to 100!';
            }
        },
        sumArrays: function (array1, array2) {
    
            const longerArr = array1.length > array2.length ? array1 : array2;
            const rounds = array1.length < array2.length ? array1.length : array2.length;
    
            const resultArr = [];
    
            for (let i = 0; i < rounds; i++) {
                resultArr.push(array1[i] + array2[i]);
            }
    
            resultArr.push(...longerArr.slice(rounds));
    
            return resultArr
        }
    };