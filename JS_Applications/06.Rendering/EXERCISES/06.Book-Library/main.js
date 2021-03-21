import {html} from 'https://unpkg.com/lit-html?module';



let rowTemp = (book) => html`
    <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td data-id=${book._id}>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </td>
    </tr>`;

let table = (context) => html`
    <table>
        <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody @click=${event=>onBtnClick(event,context)}>
            ${context.list.map(rowTemp)}
        </tbody>
    </table>`;

let createForm = ()=>html`
    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>`;

let editForm = (book)=>html`
    <form id="edit-form">
        <input type="hidden" name="_id" .value = ${book._id}>
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." .value=${book.title}>
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." .value=${book.author}>
        <input type="submit" value="Save">
    </form>`;

export let layout = (context, editBook)=>html`
    <button @click="${context.load}" id="loadBooks">LOAD ALL BOOKS</button>
    ${table(context)}
    ${editBook?editForm(editBook):createForm()}`;


function onBtnClick(event,context){

    if(event.target.className==='editBtn'){
        let id = event.target.parentElement.dataset.id
        context.onEdit(id)
    }else if(event.target.className==='deleteBtn'){
        let id = event.target.parentElement.dataset.id

        context.onDelete(id);
    }
}