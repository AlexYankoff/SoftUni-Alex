let text = 'Peter: 123 Mark: 456';
let regex = /([A-Z][a-z]+): (\d+)/g;
let firstMatch = regex.exec(text);
let secondMatch = regex.exec(text);
console.log(firstMatch[0]) // Peter: 123 
console.log(firstMatch[1]); // Peter
console.log(firstMatch[2]); // 123
console.log(secondMatch[1])
