import { cats } from './catSeeder.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';


let template = (data) => html`
<li>
    <img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${onClick}>Show status code</button>
        <div class="status" style="display: none" id=${data.id}>
            <h4>Status Code: ${data.statusCode}</h4>
            <p>${data.statusMessage}</p>
        </div>
    </div>
</li>`;

let main = document.getElementById('allCats');
let ul = document.createElement('ul');

let catsAll = cats.map(template);

main.appendChild(ul);
render(catsAll, ul);

function onClick(e){
    console.log('click on button');
    console.log(e.target.nextElementSibling.id);
    if (e.target.nextElementSibling.style.display == 'none') {
        e.target.nextElementSibling.style.display = 'block';
    } else{
        e.target.nextElementSibling.style.display = 'none'
    }
    
}