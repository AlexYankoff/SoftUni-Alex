function calc() {
    // TODO: sum = num1 + num2
    const n1 = document.getElementById('num1');
    const n2 = document.getElementById('num2')
    const suma = Number(n1.value)+Number(n2.value)
    document.getElementById('sum').value = suma
    
}
