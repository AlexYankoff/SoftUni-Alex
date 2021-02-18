
let expectedOutput = [
    'number: 42',
    'string: cat',
    'number: 15',
    'string: kitten',
    'string: tomcat',
    'string = 3',
    'number = 2'
];


function argumentInfo(...arguments) {
    let typeCounts = {};
    for(let arg of arguments){
        console.log(`${typeof(arg)}: ${arg}`);
        if(! typeCounts[typeof(arg)]){
            typeCounts[typeof(arg)] = 1;
        } else {
            typeCounts[typeof(arg)]++;
        }
    }

    Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a]).forEach(k => console.log(`${k} = ${typeCounts[k]}`))
}
argumentInfo(42, 'cat', 15, 'kitten', 'tomcat')
© 2021 GitHub, Inc.