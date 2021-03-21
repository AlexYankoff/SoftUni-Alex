import {render} from 'https://unpkg.com/lit-html?module';
import * as api from './data.js';
import {layout} from './main.js';


let onSubmit = {
    'add-form': onCreateSubmit,
    'edit-form': onEditSubmit
};

export let context = {
    list: [],
    load: async () => {
        context.list = await api.getAllBooks();
        update();
    },
    onEdit(id){
        let book = context.list.find(book=>book._id===id)
        update(book)
    },
    async onDelete(id){
        let book = context.list.find(book=>book._id===id)
        let confirmed = confirm(`Are you sure you want to delete ${book.title}?`)
        if (confirmed){
            await api.deleteBook(id)
            await context.load()
        }
    }
};

start();

async function start() {
    update();
}

function update(editBook) {
    let result = layout(context, editBook);
    render(result, document.body);
}

document.body.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    onSubmit[event.target.id](formData, event.target);
});

async function onCreateSubmit(formData, form) {
    let book = {
        title: formData.get('title'),
        author: formData.get('author')
    };
    await api.createBook(book);
    form.reset();
    await context.load();
}

async function onEditSubmit(formData) {
    let id = formData.get('_id');
    let book = {
        title: formData.get('title'),
        author: formData.get('author')
    };
    await api.updateBook(id, book);
    await context.load();
}
