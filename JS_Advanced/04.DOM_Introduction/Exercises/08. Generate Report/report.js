function generateReport() {
    let inputElements = Array.from(document.getElementsByTagName('input'));

    const result = [];
    let tableRows = Array.from(document.getElementsByTagName('tr'));
    const chosenCols = [];

    for (let i = 0; i < tableRows.length; i++) {
        const row = tableRows[i];
        const obj = {};

        for (let y = 0; y < row.children.length; y++) {
            const element = row.children[y];
            if (i == 0) {
                if (element.children[0].checked) {
                    chosenCols.push(y);
                }
                continue;
            }

            if (chosenCols.includes(y)) {
                let propertyName = inputElements[y].name;
                obj[propertyName] = element.textContent;
            }
        }
        if (i !== 0) {
            if (Object.keys(obj).length > 0) {
                result.push(obj);
            }

        }
    }
    if (result.length > 0) {
        document.getElementById('output').value = JSON.stringify(result);
    }
}