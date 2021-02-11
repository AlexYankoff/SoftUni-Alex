function addItem() {
    //get text;
    const newText = document.querySelector('#newItemText');
    const newVal = document.querySelector('#newItemValue')
    const button = document.querySelector('input[type="BUTTON"]')
    

   
        console.log('click event');
        const newOption =document.createElement('option');
        newOption.textContent = newText.value;
        newOption.value = newVal.value
        document.querySelector('select').appendChild(newOption);
        newText.value = '';
        newVal.value = '';

        
}