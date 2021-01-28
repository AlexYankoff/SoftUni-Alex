function colorize() {
    // TODO
    const table = document.getElementsByTagName('tr')
    for (let i=1; i<table.length; i+=2) {
        table[i].style.backgroundColor = 'teal'
    }
}