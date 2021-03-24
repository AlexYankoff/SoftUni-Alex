import { html, render } from '../node_modules/lit-html/lit-html.js';

document.querySelector('#searchBtn').addEventListener('click', onClick);

let template = (data) => html`
   <tr>
      <td>${data.firstName + ' ' + data.lastName}</td>
      <td>${data.email}</td>
      <td>${data.course}</td>
   </tr>
`;

let div = document.querySelector('tbody');

solve();

async function solve() {
   let response = await fetch('http://localhost:3030/jsonstore/advanced/table');
   let data = await response.json();

   data = Object.values(data).map(template);


   render(data, div);
}

let searchInput = document.getElementById('searchField');

function onClick(e) {
   e.preventDefault();
   let searchValue = searchInput.value;
   let allRows = document.querySelectorAll('tr');

   for (const el of allRows) {
      if (el.innerText.toLowerCase().includes(searchValue.toLowerCase()) && searchValue != '') {
         el.setAttribute('class', 'select')
      } else {
         el.removeAttribute('class');
      }
   }
}
