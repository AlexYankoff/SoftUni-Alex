import { towns } from './towns.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';

let townsList = (town) => html`<li> ${town} </li>`;

let div = document.getElementById('towns');
let ul = document.createElement('ul');
div.appendChild(ul);
let alltowns = towns.map(townsList);

render(alltowns, ul);

document.querySelector('button').addEventListener('click', search);
let input = document.getElementById('searchText');

function search() {
   let text = input.value;
   console.log(text);
   let lis = document.querySelectorAll('li');
   let counter = 0;
   for (const el of lis) {
      if (el.textContent.toLowerCase().includes(text.toLowerCase()) && text != '') {
         counter++;
         el.setAttribute('class', 'active');
         console.log(el);
      } else{
         el.removeAttribute('class');
      }
   }
   document.getElementById('result').innerText = `${counter} matches found`;
}
