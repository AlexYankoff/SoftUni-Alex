import {html, render} from '../node_modules/lit-html/lit-html.js';
import {Cat, cats} from './catSeeder.js';

//document.getElementById('allCats').addEventListener('click',onClick);

const cardTemplate =(data) => html`

    <li>
        <img src= ${data.imageLocation} width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id=${data.id}>
                <h4>Status Code: ${data.statusCode}</h4>
                <p>${data.statusMessage}</p>
            </div>
        </div>
    </li>`;
const container = document.getElementById('allCats');

const result = html `
<ul @click = ${onClick}>
${cats.map(cardTemplate)}
</ul>`;

render(result, container);

function onClick(event) {
    if(event.target.tagName != 'BUTTON') {
        return;
    }
    
    const element = event.target.parentNode;
    const infoDiv = element.getElementsByTagName('div')[0];
    
    
    infoDiv.style.display = infoDiv.style.display !='block' ? 'block' : 'none';
    event.target.textContent = event.target.textContent == "Show status code" ? "Hide status code" : "Show status code";

}
