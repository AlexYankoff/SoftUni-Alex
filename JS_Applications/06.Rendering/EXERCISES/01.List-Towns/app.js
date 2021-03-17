import {html, render} from '../node_modules/lit-html/lit-html.js'

const listTemplate = (data) => html`
<ul>
    ${data.map(t=> html`<li>${t}</li>`)}
</ul> `;

document.addEventListener('submit',getinfo)

function getinfo(ev) {
    ev.preventDefault()
    const towns = document.getElementById('towns').value.split(', ')
    const result = listTemplate(towns);
    const root = document.getElementById('root');
    render(result,root);
}