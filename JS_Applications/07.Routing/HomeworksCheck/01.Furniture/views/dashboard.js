import { html } from '../node_modules/lit-html/lit-html.js';
import { getFurniture } from '../api.js';



export async function dashboard(ctx) {
    console.log('dashboard');
    const allItems = await getFurniture();   
    const allItemsHtml = allItems.map(item => itemTemplate(item, onSubmit));
    ctx.render(dashboardTemlate(allItemsHtml));
    function onSubmit(e) {
        e.preventDefault();
        // alert(`I'm in onSubmit`);
        const id = e.target.getAttribute('data-id');
        console.log(`id=${id}`);
        ctx.page.redirect(`/details/${id}`);
    }
}

function dashboardTemlate(items) {
    return html`<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<div class="row space-top">
    ${items}
</div>`;
};

function itemTemplate(item, onSubmit) {
    return html`<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src="${item.img}" />
            <p>Description here</p>
            <footer>
                <p>Price: <span>${item.price} $</span></p>
            </footer>
            <div>
                <a href=”#” class="btn btn-info" data-id="${item._id}" data-userid="${item._ownerId}"
                    @click="${onSubmit}">Details</a>
            </div>
        </div>
    </div>
</div>`;
}