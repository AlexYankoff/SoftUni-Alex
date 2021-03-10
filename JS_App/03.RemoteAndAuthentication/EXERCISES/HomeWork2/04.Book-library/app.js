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

async function getAllBooks(){
    const books = await request('http://localhost:3030/jsonstore/collections/books');
    const row = Object.entries(books).map(createRow).join('\n');

    document.querySelector('tbody').innerHTML = row;

}

function createRow([id, book]) {
    const result  = `
    <tr data-id= '${id}'>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button class='editBtn'>Edit</button>
            <button class='deleteBtn'>Delete</button>
        </td>

    </tr>`
    return result
}

async function createBook(event) {
    event.preventDefault()
    const formData = new FormData(event.target);
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }
    if (book.title =='') {return};
    const result = await request('http://localhost:3030/jsonstore/collections/books',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(book)
    });
    event.target.reset()
    getAllBooks()
}


async function updateBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const id = formData.get('id')
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }
    await request('http://localhost:3030/jsonstore/collections/books/'+id, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
        }); 
    document.getElementById('createForm').style.display = 'block';
    document.getElementById('editForm').style.display = ''  
    getAllBooks()
}

async function deleteBook(id) {await request('http://localhost:3030/jsonstore/collections/books/'+id, {
    method: 'delete'
    }); 
getAllBooks();

}

function start (){
    getAllBooks()
    document.getElementById('loadBooks').addEventListener('click', getAllBooks);
    document.getElementById('createForm').addEventListener('submit',createBook);
    document.querySelector('table').addEventListener('click',tableClick);

    document.getElementById('editForm').addEventListener('submit', updateBook);
}
start()


function tableClick(event) {
    const bookId = event.target.parentNode.parentNode.dataset.id

    if (event.target.textContent == 'Edit') {
        document.getElementById('createForm').style.display = 'none';
        document.getElementById('editForm').style.display = 'block'
                
        loadBookForEditing(bookId);

    }else if (event.target.textContent == 'Delete') {
               
        deleteBook(bookId);
    }
} 

async function loadBookForEditing(id) {
    const book = await request('http://localhost:3030/jsonstore/collections/books/'+id);
    document.querySelector('#editForm [name ="id"]').value = id;
    document.querySelector('#editForm [name ="title"]').value = book.title;
    document.querySelector('#editForm [name ="author"]').value = book.author;
    
}