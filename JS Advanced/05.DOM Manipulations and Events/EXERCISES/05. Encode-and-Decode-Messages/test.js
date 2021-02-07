let text = 'AcE';
let converted =text.split('').map(ch =>String.fromCharCode(ch.charCodeAt(0)+1))
console.log(converted)
