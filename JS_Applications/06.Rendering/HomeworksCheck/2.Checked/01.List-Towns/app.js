import { html, render } from '../node_modules/lit-html/lit-html.js';

//function accepts data and returns array of templates
let list = (data) => html`
<ul>${data.map(x=>html`<li>${x}</li>`)}</ul>`;

//take the input element
let inputElement = document.getElementById('towns');

//create listener to the button and execute function
document.getElementById('btnLoadTowns').addEventListener('click', (e) => {
    e.preventDefault();
    
    //take value of the input
    let inputValue = inputElement.value;
    //take output element
    let div = document.getElementById('root');

    //conver input values to not spaced word, then to each element make li + value
    let towns = inputValue.split(', ').map(x => x.trim()).map(x => html`<li>${x}</li>`);

    //create output of all values
    list(towns)
    
    //render them to the div
    render(towns, div);
})
