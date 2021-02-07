function addItem() {
    //get input
    const input = document.querySelector('#newItemText')
    
    //create new list element
    const newLi = document.createElement("Li");

    //set value to new element
    newLi.textContent = input.value

    //append to the list
    const parList = document.getElementById('items');
    parList.appendChild(newLi);
    //clear input feald
    input.value = '';
}