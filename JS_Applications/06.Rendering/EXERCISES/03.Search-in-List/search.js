import {html, render} from '../node_modules/lit-html/lit-html.js';
import {towns} from './towns.js';
let match 


const searchTemplate =(data, match) => html`
<div id="towns">
            <ul>
                ${data.map(city=> liEl(city,match))};
            </ul>
        </div>
        <input type="text" id="searchText" />
        <button @click = ${search}>Search</button>
        <div id="result">${countMatces(data, match)}</div>`;

const liEl = (city,match) => html  `<li class= ${(match&&city.toLowerCase().includes(match.toLowerCase())) ? 'active' : ''}>${city}</li>`

let result = searchTemplate(towns, match);
const root = document.getElementById('towns');
render(result,root);

function search() {
    match = document.getElementById('searchText').value;
    console.log(match);
    result = searchTemplate(towns, match);
    render(result,root);

}

function countMatces(towns, match) {
    
        const matches = towns.filter(t => match&&t.toLowerCase().includes(match.toLowerCase())).length
        if(matches>1) {
        return `${matches} matches found`
        } 
        else if(matches==1) {
            return `${matches} match found`
            }
}
