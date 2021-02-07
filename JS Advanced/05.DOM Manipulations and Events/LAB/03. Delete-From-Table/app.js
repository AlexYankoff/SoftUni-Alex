function deleteByEmail() {
    const email = document.querySelector('input[name="email"]').value;
    //чете полето input с атрибут email (атрибутите се задават с квдратни скоби)
    const messageField = document.querySelector('#result');
     
    let isDeleted = false

    const rows = Array.from(document.querySelectorAll('tbody tr'));
    
    for (let row of rows) {
        if (row.children[1].textContent == email) {
           row.parentNode.removeChild(row)
           isDeleted = true;
        }
    }
    messageField.textContent = isDeleted ? 'Deleted.' : 'Not found.'
}