import {html, render} from '../node_modules/lit-html/lit-html.js';

document.getElementById('loadBooks').addEventListener('click', loadBooks)

const addForm = document.getElementById('add-form').addEventListener('submit',addBook)

  

async function loadBooks() {
    //render all books when Load btn clicked
    const response = await fetch('http://localhost:3030/jsonstore/collections/books');
    const data = await response.json();
    const dataArr = Object.values(data);
    console.log(dataArr) 

    const bookTemlate = (book) => html `
        <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button id=${book._id} @click = ${updateBook}>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>`
    
    const result = dataArr.map(book =>bookTemlate(book))

    const tbody =  document.getElementsByTagName('tbody')[0]

    render(result, tbody)

}

//Create Book
async function addBook(ev) {
    ev.preventDefault()

    //author, title from form with submit
    const formData = new FormData(ev.target)
    const title = formData.get('title');
    const author = formData.get('author');
      
    //validation if not empty before post
    if (title==''||author==''){
        return
    }
    //post
    await postData(author, title);
    ev.target.reset();
    
} 

async function postData(author, title) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
        method:'post',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify({author, title}),
    });
        console.log(response)
        const result = await response.json();
        console.log(result);
}

//Get Book by id
async function getBookbyId(id) {
    //http://localhost:3030/jsonstore/collections/books/:id
    const response = await fetch('http://localhost:3030/jsonstore/collections/books/'+id);
    const data = await response.json();
    console.log(data)
}

//Update Book
async function updateBook (ev){// when press edit button
    console.log(ev.target)
    //hide add-form
    //document.getElementById()
    //display edit form  
    //get book by id
    // PUT - http://localhost:3030/jsonstore/collections/books/:id
    //hide edit form
    //display add-form

}