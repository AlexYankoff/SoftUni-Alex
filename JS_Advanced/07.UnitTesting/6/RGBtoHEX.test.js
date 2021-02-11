const {expect} = require('chai');
const rgbToHexColor = require('./rgbToHex');
const isSymmetric = require('./rgbToHex');

describe('test RGBtoHEX', () => {
//Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
it('converts black to hex', () => {
    expect(rgbToHexColor(0,0,0)).to.equal('#000000');

})

it('converts white to hex', () => {
    expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');

})

it ('return undefined if parameter is not in range', () => {
    expect(rgbToHexColor(256,255,255)).to.equal(undefined);
    expect(rgbToHexColor(-1,255,255)).to.equal(undefined); 
    expect(rgbToHexColor(200,256,255)).to.equal(undefined); 
    expect(rgbToHexColor(200,-1,255)).to.equal(undefined); 
    expect(rgbToHexColor(256,255,256)).to.equal(undefined); 
    expect(rgbToHexColor(255,255,-1)).to.equal(undefined); 
    expect(rgbToHexColor('a',211,222)).to.equal(undefined); 
    expect(rgbToHexColor(256,'b', 222)).to.equal(undefined); 
    expect(rgbToHexColor(256,255,'c')).to.equal(undefined); 



    
});



})

//Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
//Return undefined if any of the input parameters are of invalid type or not in the expected range

