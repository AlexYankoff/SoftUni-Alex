import { html, render } from '../node_modules/lit-html/lit-html.js';

let template = (select) => html`
    <option value=${select._id}> ${select.text} </option>
`;

async function loadSelect() {
    let response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    let data = await response.json();

    let result = Object.values(data).map(template);
    let menu = document.getElementById('menu');

    render(result, menu);
}

loadSelect();

document.querySelector('form').addEventListener('submit', addItem);

async function addItem(e) {
    e.preventDefault();
    let input = document.getElementById('itemText');
    let item = { text: input.value };

    let response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'post',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(item)
    });

    loadSelect();
}