// on load make aa.table with existing students
makeTable() 

//add eventListeners for Submitte
document.getElementById('form').addEventListener('submit', addStudent)

//Universal request
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
// Add students
    async function addStudent(ev) {
        ev.preventDefault()
        
        const firstName = document.querySelector('#form [name="firstName"').value;
        const lastName = document.querySelector('#form [name="lastName"').value;
        const facultyNumber = document.querySelector('#form [name="facultyNumber"').value;
        const grade = Number(document.querySelector('#form [name="grade"').value);

        if(firstName==''||lastName==''||facultyNumber==''||grade=='') {
            return alert('All fields are needed')
        }
        
        const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
                method:'post',
                headers: {'Content-type':'application/json'},
                body: JSON.stringify({firstName,lastName,facultyNumber,grade}),
            });
                const st = {firstName,lastName, facultyNumber,grade}
                createTableRow(st)
                document.getElementById('form').reset()
                
    }



//LOAD GET Phonebook and Append in ul element

async function makeTable(){
    const students = await request('http://localhost:3030/jsonstore/collections/students');
    
    const records = Object.values(students).forEach((st) =>createTableRow(st));
    
    
}

function createTableRow(st){
    const row = e('tr',{},
                    e('td',{},st.firstName),
                    e('td',{},st.lastName),
                    e('td',{},st.facultyNumber),
                    e('td',{},st.grade.toFixed(2)))
    document.querySelector('tbody').appendChild(row)

}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}
