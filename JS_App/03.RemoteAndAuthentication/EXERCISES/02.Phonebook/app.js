function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click',getPhonebook);
    document.getElementById('btnCreate').addEventListener('click',createContact);
    document.getElementById('phonebook').addEventListener('click',deleteContact);
}

attachEvents();

//Request universal
async function request(url, options) {
    const response = await fetch(url, options);
    if (response.ok == false) {
        const error = await response.json();
        alert(error.message)
        throw new Error(error.message)
    }
    const data = await response.json()
    return data;
}
//LOAD GET Phonebook and Append in ul element

async function getPhonebook(){
    const phonebook = await request('http://localhost:3030/jsonstore/phonebook');
    
    const row = Object.values(phonebook).map(createRow).join('\n');
    
    document.getElementById('phonebook').innerHTML = row;

}
//create li elements from phonebook
function createRow(element) {
    const person = element.person
    const phone = element.phone
    const result  = `<li id=${id=element._id}>${person}:${phone}
        <button>Delete</button>    
    </li>`
    return result
}


// Create Contact

async function createContact(event) {
    const inputPerson = document.getElementById('person').value;
    const inputPhone = document.getElementById('phone').value;
    const contact = {person:inputPerson, phone:inputPhone}
    
    
    if (inputPerson =='' || inputPhone == '') {return};
    const result = await request('http://localhost:3030/jsonstore/phonebook',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(contact)
    });
    document.getElementById('person').value = '';
    document.getElementById('phone').value = '';
    getPhonebook()
}


//Delete Contact

async function deleteContact(event) {
    const id = event.target.parentNode.id
    await request('http://localhost:3030/jsonstore/phonebook/'+id, {
    method: 'delete'
    }); 


}