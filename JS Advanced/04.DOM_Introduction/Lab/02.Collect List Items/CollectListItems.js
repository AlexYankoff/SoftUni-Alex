function extractText() {
    const liElements = [...document.getElementsByTagName('li')]; // правим колекцията на масив
    const elemEtext = liElements.map( e => e.textContent);
    console.log(elemEtext)
    

    document.getElementById('result').value = elemEtext.join('\n');
}

