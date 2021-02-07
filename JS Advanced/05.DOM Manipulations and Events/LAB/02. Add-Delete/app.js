function addItem() {
    //get input
    const input = document.querySelector('#newItemText')
    
    //append to the list
    const parList = document.getElementById('items');

    const newLi = createElement('li', input.value);
    const deleteBtn = createElement('a', '[Delete]');
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (ev) => {
        ev.target.parentNode.remove();
    })

    parList.appendChild(newLi);
    //input.value = '';
    newLi.appendChild(deleteBtn);
    
    //clear input feald
    //input.value = '';

    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}