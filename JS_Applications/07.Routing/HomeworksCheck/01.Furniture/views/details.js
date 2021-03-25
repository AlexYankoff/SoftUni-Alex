import { html } from '../node_modules/lit-html/lit-html.js';
import {styleMap} from '../node_modules/lit-html/directives/style-map.js';
import { getItemById } from '../api.js';
export async function details(ctx) {
    console.log('details');
    const id = ctx.params.id;
    const data = await getItemById(id);
    
    
    const visible = data._ownerId == sessionStorage.getItem('userId');
    ctx.render(detailsTemlate(data,visible, onEdit, onDelete));
    function onEdit(e){
        e.preventDefault();
        alert(`I'm in onEdit`);
        ctx.page.redirect(`/edit/${id}`);
    }
    function onDelete(e){
        e.preventDefault();
        alert(`I'm in onDelete`);
    }
}

function detailsTemlate(data, visible, onEdit, onDelete ) {
    const make =data.make;
    const model =data.model;
    const year =data.year;
    const description =data.description;
    const price =data.price;
    const material = data.material;
    return html`<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${data.img}" />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${make}</span></p>
            <p>Model: <span>${model}</span></p>
            <p>Year: <span>${year}</span></p>
            <p>Description: <span>${description}</span></p>
            <p>Price: <span>${price}</span></p>
            <p>Material: <span>${material}</span></p>
            <div>
                <a href=”#” class="btn btn-info" style="${styleMap({display:visible?'inline-block':'none'})}" @click="${onEdit}">Edit</a>
                <a href=”#” class="btn btn-red" style="${styleMap({display:visible?'inline-block':'none'})}" @click="${onDelete}">Delete</a>
            </div>
        </div>
    </div>
</div>`;
}