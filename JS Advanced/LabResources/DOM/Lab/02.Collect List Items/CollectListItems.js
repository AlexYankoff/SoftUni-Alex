function extractText() {
    const liElements = [document.getElementsByTagName('li')];
    const elemEtext = liElements.map( e => e.textContent);
    

    document.getElementById('result').value = elementText.join('\n');
}