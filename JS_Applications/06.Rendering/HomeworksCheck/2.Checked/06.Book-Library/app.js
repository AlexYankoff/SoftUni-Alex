import { html, render } from '../node_modules/lit-html/lit-html.js'

getAllBooks();

let body = document.querySelector('body');

let table = `<table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>`;

let createForm = `
<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input id="title" type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input id="author" type="text" name="author" placeholder="Author...">
    <input id="createBtn" type="submit" value="Submit">
</form>`;

let editForm = `
<form id="edit-form" style="display: none">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input id="editTitle" type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input id="editAuthor"type="text" name="author" placeholder="Author...">
    <input id="editBtn" type="submit" value="Save">
</form>`;

let row = ([key, value]) => html`<tr>
    <td>${value.title}</td>
    <td>${value.author}</td>
    <td id=${key}>
        <button>Edit</button>
        <button>Delete</button>
    </td>
</tr>`;

body.innerHTML = table;
body.innerHTML += createForm;
body.innerHTML += editForm;
let tbody = document.querySelector('tbody');

async function getAllBooks() {
    let response = await fetch('http://localhost:3030/jsonstore/collections/books');
    let data = await response.json();

    let books = Object.entries(data).map(row);
    render(books, tbody);
}

document.getElementById('add-form').addEventListener('submit', createBook);

async function createBook(e) {
    e.preventDefault();

    let title = document.getElementById('title');
    let author = document.getElementById('author');

    let book = { title: title.value, author: author.value };

    if (title.value == '' || author.value == '') {
        return alert('All fields are required!');
    }
    let response = await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(book)
    });
    if (response.ok) {
        title.value = '';
        author.value = '';
    }
    getAllBooks();
}

tbody.addEventListener('click', delBook);

async function delBook(e) {
    e.preventDefault();
    if (e.target.tagName == 'BUTTON') {
        if (e.target.innerText == 'Delete') {
            let confirmed = confirm('Are you sure you want to delete this bool?');
            if (confirmed) {
                let response = await fetch('http://localhost:3030/jsonstore/collections/books/' + e.target.parentNode.id, {
                    method: 'delete',
                });
            }
        } else if (e.target.innerText == 'Edit') {
            let id = e.target.parentNode.id;
            console.log(id);
            let author = e.target.parentNode.previousElementSibling.innerText;
            console.log(author);
            let title = e.target.parentNode.previousElementSibling.previousElementSibling.innerText;
            console.log(title);
            console.log('---------------------------')

            let addForm = document.getElementById('add-form');
            addForm.style.display = 'none';
            let editForm = document.getElementById('edit-form');
            editForm.style.display = 'block';

            let authorInput = document.getElementById('editAuthor');
            authorInput.value = author;
            let titleInput = document.getElementById('editTitle');
            titleInput.value = title;

            document.getElementById('editBtn').addEventListener('click', editBook);

            async function editBook(e) {
                e.preventDefault();

                let book = { author: authorInput.value, title: titleInput.value };
                console.log(book);

                let url = 'http://localhost:3030/jsonstore/collections/books/' + id;
                console.log(url);
                console.log('---------------------------')

                await fetch(url, {
                    method: 'put',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(book)
                });
                addForm.style.display = 'block';
                editForm.style.display = 'none';
                window.location.reload();
            }
        }
    }
    getAllBooks();
}
